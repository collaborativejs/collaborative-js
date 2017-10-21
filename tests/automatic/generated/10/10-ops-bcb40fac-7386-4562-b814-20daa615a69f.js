var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/undo/rm/rm/undo/undo/rm/undo/ins/undo - 10-ops-bcb40fac-7386-4562-b814-20daa615a69f", function() {
  var doc1 = new clv.string.Document("3443c210-537e-11e7-97e1-6f8e127695d2", 0, null);
  var doc2 = new clv.string.Document("3445e4f0-537e-11e7-97e1-6f8e127695d2", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"ef0b291a-516c-4ff0-bce3-59357a0dd1fd","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 3443c210-537e-11e7-97e1-6f8e127695d2 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":11,"value":"ew"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":1},{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var commit3 = [{"type":1,"at":0,"value":"ell"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":3},{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ew"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":3,"value":"orl"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ell"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"orl"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"orl"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update6 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtq"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"rtq"},"execOrder":9},{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ell"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

  });

  it("Site 3445e4f0-537e-11e7-97e1-6f8e127695d2 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ew"},"execOrder":4},{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ell"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit3 = [{"type":0,"at":5,"value":"rtq"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update5 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"orl"},"execOrder":6},{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"orl"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update6 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtq"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"rtq"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ell"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new clv.string.Document(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = clv.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":1,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ew"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ell"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"orl"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":3,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"orl"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtq"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"3445e4f0-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"rtq"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"3443c210-537e-11e7-97e1-6f8e127695d2","seqId":2,"context":{"vector":{"3443c210-537e-11e7-97e1-6f8e127695d2":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"3445e4f0-537e-11e7-97e1-6f8e127695d2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ell"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
