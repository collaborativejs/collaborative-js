var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/rm/undo/ins/undo/rm/rm/undo/redo - 10-ops-c57f8d2b-bb4c-4501-96a3-79a757a692a3", function() {
  var doc1 = new cljs.StringDocument("38bcc710-537e-11e7-93bf-db210dcccb82", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"103310fb-3a22-48ea-921d-c35c95f75a18","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 38bcc710-537e-11e7-93bf-db210dcccb82 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":7,"value":"or"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":1,"at":3,"value":"lo"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":1,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":7,"value":"or"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple4 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":2,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":0,"at":11,"value":"rwq"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":2,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commitTuple6 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":3,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"rwq"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":1,"at":4,"value":"o "}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":3,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"rwq"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":1,"at":6,"value":"rl"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":4,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commitTuple9 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"rl"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commitTuple10 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"rl"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"5":1},"invClusterSize":4}},"size":1},"invCount":2,"load":{"type":1,"at":6,"value":"rl"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new cljs.StringDocument(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = cljs.ops.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":1,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":7,"value":"or"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":2,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":2,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":3,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"rwq"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":3,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"rwq"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":4,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"rl"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"rl"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"38bcc710-537e-11e7-93bf-db210dcccb82","seqId":5,"context":{"vector":{"38bcc710-537e-11e7-93bf-db210dcccb82":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"5":1},"invClusterSize":4}},"size":1},"invCount":2,"load":{"type":1,"at":6,"value":"rl"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});