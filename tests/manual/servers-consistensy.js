var request = require('request');
var uuid = require('uuid');

// region ---- start server
console.log('Waiting for the server to startup');
var server = require('child_process').fork('express-server.js', {silent: true});
server.stdout.setEncoding('utf8');

var timeoutId = setTimeout(function () {
    console.log('Failed to start the server');
    process.exit(1);
}, 5000);

server.stdout.on('data', function (data) {
    if (data.startsWith('Example app listening on port 3000!')) {
        clearTimeout(timeoutId);
        runTests();
    } else if (data) {
        console.log('Server says:\n' + data);
    }
});

process.on('exit', function () {
    server.kill(null);
});
// endregion


// testing params
var totalItemsCount = 100000;
var itemsPerRequest = 200;
var sendingInterval = 50;
var statusUpdateInterval = 500;

// testing results
var testPassed = false;
var netErrors = '';

// requests stat
var requestsSent = 0;
var requestsComplete = 0;
var requestsFailed = 0;
var requestsSucceed = 0;

// items stat
var itemsSent = 0;
var itemsDelivered = 0;
var itemsLost = 0;
var itemsResent = 0;

var resendingQueue = [];
var returnedItems = [];
var returnedItemsMap = {};

// server stat
var requestReceived = NaN;
var serverItemsReceived = NaN;
var serverItemsStored = NaN;
var serverKeysStored = NaN;
var serverUpdatesSent = NaN;


function runTests() {
    var sendingIntervalId = setInterval(function () {
        if (itemsSent < totalItemsCount) {
            commitItems();
        } else {
            clearInterval(sendingIntervalId);
        }
    }, sendingInterval);

    var statusUpdateIntervalId = setInterval(function () {
        if (isTestComplete()) {
            clearInterval(statusUpdateIntervalId);
            exit();
        } else {
            requestStatus();
        }
    }, statusUpdateInterval);
}


function commitItems() {
    var updates = generateItems();
    var options = {
        method: 'post',
        body: {updates: updates, packageIndex: returnedItems.length},
        json: true,
        url: 'http://localhost:3000/commit'
    };

    itemsSent += updates.length;
    requestsSent++;

    var callback = onCommitComplete.bind(this, updates);
    request(options, callback);
}

function onCommitComplete(items, error, response, body) {
    if (error) {
        requestsFailed++;
        itemsLost += items.length;
        netErrors += '\n' + error.toString();
        resendingQueue = resendingQueue.concat(items);
    } else {
        requestsSucceed++;
        itemsDelivered += items.length;

        receiveItems(body.updates);
    }
    requestsComplete++;
}

function generateItems() {
    var result = [];

    for (var i = 0; i < itemsPerRequest; i++) {
        result.push({uuid: uuid.v4()});
    }

    itemsResent += resendingQueue.length;
    result = result.concat(resendingQueue.splice(0));

    return result;
}

function receiveItems(updates) {
    for (var i = 0, count = updates.length; i < count; i++) {
        var pack = updates[i];
        if (!returnedItemsMap[pack.uuid]) {
            returnedItemsMap[pack.uuid] = pack;
            returnedItems.push(pack);
        }
    }
}

function isTestComplete() {
    var allItemsSent = totalItemsCount == itemsSent;
    var allItemsDeliveredToServer = totalItemsCount == serverItemsReceived;
    var allRequestsComplete = requestsSent == requestsComplete;
    return allItemsSent && allItemsDeliveredToServer && allRequestsComplete;
}


function requestStatus() {
    var options = {
        method: 'post',
        json: true,
        url: 'http://localhost:3000/status'
    };

    request(options, function (error, response, body) {
        requestReceived = body.requestReceived;
        serverItemsReceived = body.updatesReceived;
        serverItemsStored = body.updatesStored;
        serverKeysStored = body.uuidsStored;
        serverUpdatesSent = body.updatesSent;

        checkTestPassed();
        reportStatus();
    });
}

function checkTestPassed() {
    testPassed =
        totalItemsCount == serverItemsStored &&
        totalItemsCount == serverKeysStored &&
        totalItemsCount == returnedItems.length;
}


function reportStatus() {
    console.log(
        'Status report' +
        '\n    Requests - sent: %d, received: %d, complete: %d' +
        '\n    Items - sent: %d, delivered: %d, lost: %d, resent: %d, returned: %d' +
        '\n    Server - received: %d, stored: %d, keys stored: %d, sent: %d' +
        '\nTest complete: %s',
        requestsSent, requestReceived, requestsComplete,
        itemsSent, itemsDelivered, itemsLost, itemsResent, returnedItems.length,
        serverItemsReceived, serverItemsStored, serverKeysStored, serverUpdatesSent,
        isTestComplete()
    );
}


function exit() {
    checkTestPassed();
    reportStatus();

    if (netErrors) console.log('Net errors:\n' + netErrors);

    if (testPassed) {
        console.log('Test passed');
        process.exit(0);
    } else {
        console.error('Test failed');
        process.exit(1);
    }
}
