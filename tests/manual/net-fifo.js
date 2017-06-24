var request = require('request');
var uuid = require('uuid');
var cljs = require('collaborativejs');

// region ---- start server
console.log('Waiting for the server to startup');
var server = require('child_process').fork('net-fifo/express-server.js', {silent: true});
server.stdout.setEncoding('utf8');

var timeoutId = setTimeout(function() {
  console.log('Failed to start the server');
  process.exit(1);
}, 5000);

server.stdout.on('data', function(data) {
  if (data.startsWith('Example app listening on port 3000!')) {
    clearTimeout(timeoutId);
    runTests();
  } else if (data) {
    console.log('Server says:\n' + data);
  }
});

process.on('exit', function() {
  server.kill(null);
});
// endregion


// generating params
var totalItemsCount = 1000;
var itemsPerGeneration = 20;
var generatingInterval = 250;
var itemsGenerated = 0;

// sending params
var sendingInterval = 50;
var statusUpdateInterval = 500;

// testing results
var testPassed = false;
var netErrors = '';

// received updates
var execOrder = 0;
var receivedUpdates = [];

// server stat
var requestReceived = NaN;
var serverItemsReceived = NaN;
var serverItemsStored = NaN;
var serverKeysStored = NaN;
var serverUpdatesSent = NaN;
var serverexecOrder = NaN;

// cljs vars
var timerObj = {setTimeout: setTimeout, clearTimeout: clearTimeout};
var net = new cljs.net.Http(timerObj);
net.setSendingFn(sendingFunction);


function runTests() {
  net.start(sendingInterval);

  var generatingIntervalId = setInterval(function() {
    if (itemsGenerated < totalItemsCount) {
      var items = generateItems();
      net.send(items);
    } else {
      clearInterval(generatingIntervalId);
    }
  }, generatingInterval);

  var statusUpdateIntervalId = setInterval(function() {
    if (isTestComplete()) {
      clearInterval(statusUpdateIntervalId);
      requestStatus(true);
    } else {
      requestStatus();
    }
  }, statusUpdateInterval);
}

function sendingFunction(updates, callback) {
  var options = {
    method: 'post',
    body: {updates: updates, execOrder: execOrder},
    json: true,
    url: 'http://localhost:3000/commit'
  };
  var onComplete = onCommitComplete.bind(this, callback);
  request(options, onComplete);
}

function onCommitComplete(callback, error, response, body) {
  var isSuccess = !error;
  var updates = null;

  if (isSuccess) {
    execOrder = body.execOrder;
    updates = body.updates;
    receivedUpdates = receivedUpdates.concat(updates);
  }

  callback.call(this, isSuccess, updates);
}

function generateItems() {
  var result = [];

  for (var i = 0; i < itemsPerGeneration; i++) {
    result.push({uuid: uuid.v4()});
  }
  itemsGenerated += result.length;

  return result;
}


function requestStatus(isFinalRequest) {
  var options = {
    method: 'post',
    json: true,
    url: 'http://localhost:3000/status'
  };

  request(options, function(error, response, body) {
    requestReceived = body.requestReceived;
    serverItemsReceived = body.updatesReceived;
    serverItemsStored = body.updatesStored;
    serverKeysStored = body.uuidsStored;
    serverUpdatesSent = body.updatesSent;
    serverexecOrder = body.execOrder;

    reportStatus();

    if (isFinalRequest) {
      testPassed = isTestPassed();
      exit();
    }
  });
}


function isTestComplete() {
  var stat = net.getStat();
  var allItemsGenerated = (totalItemsCount === itemsGenerated);
  var allRequestsComplete = (stat.totalRequestsSent === stat.completeRequests);
  return allItemsGenerated && allRequestsComplete;
}


function isTestPassed() {
  var allItemsDelivered = (totalItemsCount == serverItemsReceived);
  var allItemsStored = (totalItemsCount == serverItemsStored);
  var noDuplicateItems = (totalItemsCount == serverKeysStored);
  var allItemsReceivedBack = (totalItemsCount == receivedUpdates.length);
  var execOrderesEquals = (execOrder == serverexecOrder);
  var indexesSequenceIsOk = true;

  for (var i = 0, count = receivedUpdates.length; i < count; i++) {
    var update = receivedUpdates[i];
    if (update.index != i) {
      indexesSequenceIsOk = false;
      break;
    }
  }

  return allItemsDelivered &&
      allItemsStored &&
      noDuplicateItems &&
      allItemsReceivedBack &&
      indexesSequenceIsOk &&
      execOrderesEquals;
}


function reportStatus() {
  var stat = net.getStat();
  console.log(
      'Status report' +
      '\n    Requests - sent: %d, complete: %d, successful: %d, failed: %d' +
      '\n    Items - sent: %d, delivered: %d, lost: %d, re-queued: %d, received: %d, execOrder: %d' +
      '\n    Server - received: %d, stored: %d, keys stored: %d, sent: %d, execOrder: %d' +
      '\nTest complete: %s',
      stat.totalRequestsSent, stat.completeRequests, stat.successfulRequests, stat.failedRequests,
      stat.totalUpdatesSent, stat.deliveredUpdates, stat.lostUpdates, stat.reQueuedUpdates, stat.receivedUpdates, execOrder,
      serverItemsReceived, serverItemsStored, serverKeysStored, serverUpdatesSent, serverexecOrder,
      isTestComplete()
  );
}


function exit() {
  if (netErrors) console.log('Net errors:\n' + netErrors);

  if (testPassed) {
    console.log('Test passed');
    process.exit(0);
  } else {
    console.error('Test failed');
    process.exit(1);
  }
}
