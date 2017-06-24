var express = require('express');
var bodyParser = require('body-parser');

// memory storage
var storage = [];
var storageMap = {};

// stat
var requestReceived = 0;
var updatesReceived = 0;
var updatesSent = 0;

// run node server
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('ok');
});

app.post('/update', function(req, res) {
  // get request params
  var execOrder = req.body.execOrder;
  var updates = req.body.updates;

  //
  requestReceived++;
  updatesReceived += updates.length;

  applyUpdates(updates);

  var returnUpdates = storage.slice(execOrder, storage.length);
  updatesSent += returnUpdates.length;

  var result = {
    updates: returnUpdates,
    execOrder: storage.length
  };

  res.status(200);
  res.send(JSON.stringify(result));
});


function applyUpdates(updates) {
  for (var i = 0, count = updates.length; i < count; i++) {
    var update = updates[i];
    update.index = storage.length;
    storage.push(update);

    if (!storageMap[update.uuid]) {
      storageMap[update.uuid] = update;
    }
  }
}


app.post('/status', function(req, res) {
  var status = {
    requestReceived: requestReceived,
    updatesReceived: updatesReceived,
    updatesStored: storage.length,
    uuidsStored: Object.keys(storageMap).length,
    updatesSent: updatesSent,
    execOrder: storage.length
  };
  res.status(200);
  res.send(JSON.stringify(status));
});


app.listen(3000, function() {
  console.log('Example app listening on port ' + 3000 + '!');
});