var request = require('request');
var syncRequest = require('sync-request');
var uuid = require('uuid');
var cljs = require('collaborativejs');
var fs = require('fs');


// region ---- start server
console.log('Waiting for the server to startup');
var server = require('child_process').fork('server/express.js', {silent: true});
server.stdout.setEncoding('utf8');

var timeoutId = setTimeout(function() {
  console.log('Failed to start the server');
  process.exit(1);
}, 5000);

server.stdout.on('data', function(data) {
  if (data.startsWith('Example app listening on port 3000!')) {
    clearTimeout(timeoutId);
    startTest();
  } else if (data) {
    console.log('Server says:\n' + data);
  }
});

process.on('exit', function() {
  server.kill(null);
});
// endregion


// test initialization props
var documentData = null;
var timerObj = {setTimeout: setTimeout, clearTimeout: clearTimeout};
var maxClientsCount = 5;
var exactClientsCount = NaN; // set to NaN to make it random with maxClientsCount
var clients = [];

// testing params
var opsTotalCount = 100;
var opsGenerated = 0;
var opsPerRequest = 1;
var generatingInterval = 100;
var sendingInterval = 100;
var statusUpdateInterval = 200;
var availableOps = 3; //0 - ins only, 1 - ins/rm, 2 - ins/rm/undo, 3 - ins/rm/undo/redo
var saveAll = true;

var log = {
  sites: {}
};


function startTest() {
  setupTestEntries();
  startSending();
}

// region -- setup test entries (document and clients)
function setupTestEntries() {
  // create document
  documentData = createDocument();

  log.serverInitialData = JSON.parse(JSON.stringify(documentData));

  var clientsCount = isNaN(exactClientsCount) ?
      (Math.floor(Math.random() * maxClientsCount) + 1) :
      exactClientsCount;

  // create random number of clients
  for (var i = 0; i < clientsCount; i++) {
    clients.push(createClient(documentData.id));
  }
}


function createDocument() {
  var result = syncRequest('POST', 'http://localhost:3000/create');
  var response = JSON.parse(result.getBody());
  return response.documentData;
}

function createClient(documentId) {
  var result = syncRequest('POST', 'http://localhost:3000/document/' + documentId);
  var body = JSON.parse(result.getBody());
  var document = new cljs.StringDocument(body.siteId, body.documentData.execOrder, body.documentData.context);
  var net = new cljs.net.Http(timerObj);
  var client = {document: document, documentData: body.documentData, net: net};
  var sendingFunc = operationsSendingFunc.bind(client);

  log.sites[body.siteId] = {documentData: documentData, updates: []};

  document.update(body.documentData.ops);
  net.setSendingFn(sendingFunc);
  net.start(sendingInterval);

  return client;
}

function operationsSendingFunc(execOrder, updates, callback) {
  var client = this;
  var url = 'http://localhost:3000/document/' + client.documentData.id + '/update';
  var data = {execOrder: execOrder, updates: updates};
  var options = {method: 'post', url: url, body: data, json: true};

  request(options, function(error, response, body) {
    if (response.statusCode == 200) {
      var returningUpdates = body.updates;
      if (returningUpdates.length) {
        log.sites[client.document.getSiteId()].updates.push({type: 'update', ops: JSON.parse(JSON.stringify(returningUpdates))});
        var tuple = client.document.update(returningUpdates);
        client.documentData.data = cljs.ops.string.exec(client.documentData.data, tuple.toExec);
      }
      callback(true, client.document.getExecOrder(), returningUpdates);
    } else {
      console.log(body);
      callback(false);
    }
  });
}
// endregion


function startSending() {
  // generate and send ops with random client
  var generatingIntervalId = setInterval(function() {
    if (opsGenerated < opsTotalCount) {
      var randClientIndex = Math.floor(Math.random() * clients.length - 1) + 1;
      var client = clients[randClientIndex];
      var ops = generateOps(client);

      // there is a case then undo call generates more then one op
      if (ops.length > opsPerRequest && (opsGenerated + ops.length) > opsTotalCount) {
        opsTotalCount += ops.length - opsPerRequest;
      }

      opsGenerated += ops.length;
      client.net.send(client.document.getExecOrder(), ops);
    } else {
      clearInterval(generatingIntervalId);
    }
  }, generatingInterval);

  // request server status until test complete (fail or success)
  var statusUpdateIntervalId = setInterval(function() {
    if (isTestComplete()) {
      clearInterval(statusUpdateIntervalId);
      clients.forEach(function(model) {
        model.net.stop();
      });
      requestStatus(true);
    } else {
      requestStatus();
    }
  }, statusUpdateInterval);
}


function isTestComplete() {
  var allOpsGenerated = (opsTotalCount == opsGenerated);
  var allNetsIsUpToDate = clients.reduce(function(accumulator, client) {
    return accumulator && client.net.isUpToDate();
  }, true);
  return allOpsGenerated && allNetsIsUpToDate;
}


function isTestPassed(serverData) {
  var allSitesHaveSameData = clients.reduce(function(accumulator, client, index, array) {
    var result = accumulator;
    if (index != array.length - 1) {
      var nextClient = array[index + 1];
      result = accumulator && client.documentData.data == nextClient.documentData.data;
    }
    return result
  }, true);

  return allSitesHaveSameData && clients[0].documentData.data == serverData;
}


function requestStatus(opt_finalRequest) {
  var url = 'http://localhost:3000/document/' + documentData.id;
  var options = {method: 'post', url: url, json: true};

  request(options, function(error, response, body) {
    var serverData = body.documentData.data;
    var status = clients.reduce(function(accumulator, client) {
      return accumulator + client.document.getSiteId() + ': ' + client.documentData.data + '\n';
    }, '');

    status += ('server: ' + serverData + '\n');
    status += ('sites: ' + clients.length + '\n');
    status += ('ops: ' + opsGenerated + '/' + opsTotalCount);

    console.log(status);

    if (opt_finalRequest) {
      var code, message;

      if (isTestPassed(serverData)) {
        message = 'Test passed';
        code = 0;
      } else {
        message = 'Test failed';
        code = 1;
        if (!saveAll) generateTest();
      }
      if (saveAll) generateTest();
      console.log(message);
      process.exit(code);
    }
  });
}


function generateTest() {
  var sites = log.sites;
  var i, site, index, commitIndex, updateIndex;
  var test = '';
  var serverUpdates = {};
  var summary = [];
  test += 'var cljs = require("collaborativejs");\n';
  test += 'var assert = require("assert");\n\n';
  test += 'describe("Generated test - TEST_SUMMARY - TEST_ID", function() {\n';

  var sitesDeclarationCode = '';
  var dataDeclarationCode = '';

  index = 1;
  for (i in sites) {
    site = sites[i];
    sitesDeclarationCode += '  var doc' + index + ' = new cljs.StringDocument("SITE_ID", EXEC_ORDER, CONTEXT);\n'
            .replace('SITE_ID', i)
            .replace('EXEC_ORDER', site.documentData.execOrder)
            .replace('CONTEXT', site.documentData.context);
    dataDeclarationCode += '  var data' + index + ' = "DATA";\n'.replace('DATA', site.documentData.data);
    index++;
  }

  test += sitesDeclarationCode;
  test += dataDeclarationCode + '\n';
  test += '  var serverData = SERVER_INITIAL_DATA;\n'.replace('SERVER_INITIAL_DATA', JSON.stringify(log.serverInitialData));

  index = 1;

  for (i in sites) {
    site = sites[i];
    commitIndex = 1;
    updateIndex = 1;

    test += '  it("Site ID operations should be executed without errors", function() {\n'.replace('ID', i);

    for (var u = 0, uCount = site.updates.length; u < uCount; u++) {
      var update = site.updates[u];
      if (update.type == 'commit') {
        test += '    var commit' + commitIndex + ' = ' + JSON.stringify(update.ops) + ';\n';
        test += '    var commitTuple' + commitIndex + ' = doc' + index + '.commit(commit' + commitIndex + ');\n';
        test += '    data' + index + ' = cljs.ops.string.exec(data' + index + ', commitTuple' + commitIndex + '.toExec);\n';
        commitIndex++;

        for (var oi = 0, oiCount = update.ops.length; oi < oiCount; oi++) {
          var ioO = update.ops[oi];
          if (ioO.type == 0) summary.push('ins');
          else summary.push('rm');
        }
      } else if (update.type == 'update') {
        test += '    var update' + updateIndex + ' = ' + JSON.stringify(update.ops) + ';\n';
        test += '    var updateTuple' + updateIndex + ' = doc' + index + '.update(update' + updateIndex + ');\n';
        test += '    data' + index + ' = cljs.ops.string.exec(data' + index + ', updateTuple' + updateIndex + '.toExec);\n';
        updateIndex++;

        for (var o = 0, oCount = update.ops.length; o < oCount; o++) {
          var op = update.ops[o];
          if (op) serverUpdates[op.execOrder] = op;
        }
      } else if (update.type == 'undo') {
        test += '    var commitTuple' + commitIndex + ' = doc' + index + '.undo();\n';
        test += '    data' + index + ' = cljs.ops.string.exec(data' + index + ', commitTuple' + commitIndex + '.toExec);\n';
        commitIndex++;
        summary.push('undo');
      } else {
        test += '    var commitTuple' + commitIndex + ' = doc' + index + '.redo();\n';
        test += '    data' + index + ' = cljs.ops.string.exec(data' + index + ', commitTuple' + commitIndex + '.toExec);\n';
        commitIndex++;
        summary.push('redo');
      }
      test += '\n';
    }

    test += '  });\n\n';
    index++;
  }


  var su, suCount;
  var serverUpdatesList = [];
  for (su in serverUpdates) {
    serverUpdatesList.push(serverUpdates[su]);
  }
  serverUpdatesList.sort(function(a, b) {
    return a.execOrder - b.execOrder;
  });

  test += '  it("Server operations should be executed without errors", function() {\n';

  test += '    function updateServer(op) {\n';

  test += '      var server = new cljs.StringDocument(null, serverData.execOrder, serverData.context);\n';
  test += '      server.update(serverData.ops);\n';

  test += '      var serverTuple = server.update(op);\n';
  test += '      serverData.data = cljs.ops.string.exec(serverData.data, serverTuple.toExec);\n';
  test += '      serverData.context = server.getContext();\n';
  test += '      serverData.ops.push(op);\n';
  test += '      serverData.execOrder = server.getExecOrder();\n';
  test += '    }\n\n';

  for (su = 0, suCount = serverUpdatesList.length; su < suCount; su++) {
    test += '    var serverUpdate' + su + ' = ' + JSON.stringify(serverUpdatesList[su]) + ';\n';
    test += '    updateServer(serverUpdate' + su + ');\n\n';
  }

  test += '  });\n\n';

  test += '  it("All sites should have same data with the server", function() {\n';

  index = 1;
  for (i in sites) {

    test += '    assert.equal(data' + index + ', serverData.data, "Site ' +  index + ' data should be equal to server");\n';
    index++
  }
  test += '  });\n\n';

  test += '});';

  var name = summary.length + '-ops-' + uuid.v4();
  test = test.replace('TEST_SUMMARY', summary.join('/'))
      .replace('TEST_ID', name);

  var fs = require('fs');
  var dir = '../automatic/generated/' + opsTotalCount;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(dir + '/' + name + '.json', JSON.stringify(log));
  fs.writeFileSync(dir + '/' + name + '.js', test);
}


// region ---- generation of operations
function generateOps(client) {
  var result = [];
  var tuple, opsLog;

  for (var i = 0; i < opsPerRequest; i++) {
    var tmp = makeRandOps(client.document, client.documentData.data, undefined, availableOps);
    tuple = tmp[0];
    opsLog = tmp[1];
    if (typeof opsLog[0] == 'string') {
      log.sites[client.document.getSiteId()].updates.push({type: opsLog});
    } else {
      log.sites[client.document.getSiteId()].updates.push({type: 'commit', ops: tmp[1]});
    }

    client.documentData.data = cljs.ops.string.exec(client.documentData.data, tuple.toExec);
    result = result.concat(tuple.toSend);
  }

  return result;
}


/**
 * @param {cljs.Document} document
 * @param {string} str
 * @param {?number=} opt_opType
 * @param {?number=} opt_allowedOps 0 - insert only, 1 - insert + remove,
 * 2 - insert + remove + undo, 3 + insert + remove + undo + redo
 * @return {!Array.<Object>}
 */
function makeRandOps(document, str, opt_opType, opt_allowedOps) {
  var allowedOps = opt_allowedOps == undefined ?
      3 : opt_allowedOps;
  var opType = opt_opType == undefined ?
      (Math.round(Math.random() * allowedOps) + 1) :
      opt_opType;

  var ops, tuple;
  var opsLog = [];

  if (opType == 1) {
    ops = getRandInsOps(str);
    addOpsToLog(opsLog, ops);
    tuple = document.commit(ops);
  } else if (opType == 2) {
    ops = getRandRmOps(str);
    if (ops) {
      addOpsToLog(opsLog, ops);
      tuple = document.commit(ops);
    } else {
      ops = getRandInsOps(str);
      addOpsToLog(opsLog, ops);
      tuple = document.commit(ops);
    }
  } else if (opType == 3) {
    tuple = document.undo();
    if (tuple && tuple.toSend.length) {
      addOpsToLog(opsLog, 'undo');
    } else {
      ops = getRandInsOps(str);
      addOpsToLog(opsLog, ops);
      tuple = document.commit(ops);
    }
  } else {
    tuple = document.redo();
    if (tuple && tuple.toSend.length) {
      addOpsToLog(opsLog, 'redo');
    } else {
      ops = getRandInsOps(str);
      addOpsToLog(opsLog, ops);
      tuple = document.commit(ops);
    }
  }

  return [tuple, opsLog];
}


/**
 * Clone ops and push to log.
 * @param opsLog
 * @param ops
 * @returns {*}
 */
function addOpsToLog(opsLog, ops) {
  ops = JSON.parse(JSON.stringify(ops));
  if (typeof  ops == 'string') opsLog.push(ops);
  else opsLog.push.apply(opsLog, ops);
  return opsLog;
}


/**
 * @param {string} str
 * @param {Array.<string>=} opt_alphabet
 * @param {number=} opt_maxCount
 * @return {Array<!cljs.ops.string.Operation>}
 */
function getRandInsOps(str, opt_alphabet, opt_maxCount) {
  if (!opt_maxCount) opt_maxCount = 3;
  if (!opt_alphabet) opt_alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  var insCount = Math.floor(Math.random() * opt_maxCount) + 1;
  var insIndex = Math.floor(Math.random() * str.length + 1);
  insIndex = insIndex < 0 ? 0 : insIndex;
  insIndex = insIndex > str.length ? str.length : insIndex;

  var index, insString = '';
  for (var i = 0, count = insCount; i < count; i++) {
    index = Math.floor(Math.random() * 6);
    insString += opt_alphabet[index];
  }

  var newData = [
    str.slice(0, insIndex),
    insString,
    str.slice(insIndex)
  ].join('');

  return cljs.ops.string.genOps(str, newData);
}


/**
 * @param {string} str
 * @param {number=} opt_maxCount
 * @return {Array<!cljs.ops.string.Operation>}
 */
function getRandRmOps(str, opt_maxCount) {
  var result = null;
  if (str.length) {
    if (!opt_maxCount) opt_maxCount = 3;
    var rmIndex = Math.floor(Math.random() * (str.length - 1));
    var rmCount = Math.min(Math.floor(Math.random() * opt_maxCount) + 1, str.length - rmIndex);
    var newData = str.replace(str.substring(rmIndex, rmIndex + rmCount), '');
    result = cljs.ops.string.genOps(str, newData);
  }
  return result;
}
// endregion
