var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid');
var clv = require('collaborativejs');

// create in-memory storage
var storage = {};

// set express server settings
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**
 * Simple check that server is up and running.
 */
app.get('/', function(req, res) {
  res.send('ok');
});


/**
 * Creates new document.
 */
app.post('/create', function(req, res) {
  var documentData = {
    id: uuid.v4(),
    data: 'Hello World',
    ops: [],
    execOrder: 0,
    context: null
  };

  storage[documentData.id] = documentData;

  res.status(200);
  res.send(JSON.stringify({documentData: documentData}));
});


/**
 * Returns existing document or error if document doesn't exists.
 */
app.post('/document/:id', function(req, res) {
  var documentId = req.params.id;

  var documentData = storage[documentId];
  if (documentData) {
    res.status(200);
    res.send(JSON.stringify({
      siteId: uuid.v1(),
      documentData: documentData
    }));
  } else {
    res.status(500);
    res.send('Document with id ' + documentId + 'not found');
  }
});


app.post('/document/:id/update', function(req, res) {
  var documentId = req.params.id;
  var execOrder = req.body.execOrder;
  var updates = req.body.updates;
  var documentData = storage[documentId];

  if (documentData) {
    applyUpdates(documentData, updates);

    var response = {
      updates: searchForUpdates(documentData, execOrder)
    };

    res.status(200);
    res.send(JSON.stringify(response));
  } else {
    res.status(500);
    res.send('Document with id ' + documentId + 'not found');
  }
});


function applyUpdates(documentData, updates) {
  var document = new clv.string.Document(null, documentData.execOrder, documentData.context);
  document.update(documentData.ops);

  for (var i = 0, count = updates.length; i < count; i++) {
    var op = updates[i];
    // check whenever op is valid op and it will not not corrupt document
    // console.log('check', JSON.stringify(op), JSON.stringify(documentData.context))
    if (clv.ops.canApply(op, documentData.context)) {
      // check whenever op is have been already applied
      if (!clv.ops.seen(op, documentData.context)) {
        op.execOrder = documentData.ops.length + 1;
        var tuple = document.update(op);
        documentData.data = clv.ops.string.exec(documentData.data, tuple.toExec);
        documentData.context = document.getContext();
        documentData.ops.push(op);
        documentData.execOrder = document.getExecOrder();
      } else {
        // Note:
        // As far as we see there are only two possible cases of this error:
        //    1. Inappropriate front-end implementation.
        //    2. Unexpected network errors.
        // There are no additional actions required in case of duplicated operations, just don't execute them.
        // In real world app, you also might want to have some error reporting here.
      }
    } else {
      throw Error("One of the received ops is corrupted, can't apply this and all following ops.");
      // Note:
      // As far as we see there are only two possible cases of this error:
      //    1. Inappropriate front-end implementation.
      //    2. Unexpected network errors.
      // To avoid inappropriate update of the document, it is required to resend all corrupted operations.
      // In case you're using one of our Http implementations, you don't need to do anything, all ops will be re-sent
      // automatically, otherwise, you have to resend them yourself.
      // In real world app, you also might want to have some error reporting here.
    }
  }
}

function searchForUpdates(documentData, execOrder) {
  return documentData.ops.filter(function(op) {
    return op.execOrder > execOrder;
  });
}


// run express server
app.listen(3000, function() {
  console.log('Example app listening on port ' + 3000 + '!');
});
