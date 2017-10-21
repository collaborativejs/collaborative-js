var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/undo/ins/undo/redo/rm/rm/ins/undo/ins - 10-ops-3b27a909-9837-4a9b-a53a-df9a9b3552ef", function() {
  var doc1 = new clv.string.Document("20bab0a0-537e-11e7-99fb-9d125df1495a", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"cc3f36d6-1d22-41d2-ad65-9832e0c25aa2","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 20bab0a0-537e-11e7-99fb-9d125df1495a operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":6,"value":"W"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":1,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":4,"value":"w"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update4 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple5 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var commit6 = [{"type":1,"at":6,"value":" "}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":0,"at":4,"value":"w"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":1,"at":1,"value":"ell"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":3,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":" "},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":0,"at":5,"value":"qyr"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":4,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":5,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qyr"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":0,"at":5,"value":"wr"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":5,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":5,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"qyr"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":6,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":5,"invCluster":{"1":1,"2":2,"5":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"wr"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":1,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":2,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":0,"at":4,"value":"w"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":3,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":" "},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":4,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":5,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qyr"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":5,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":5,"invCluster":{"1":1,"2":2},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"qyr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"20bab0a0-537e-11e7-99fb-9d125df1495a","seqId":6,"context":{"vector":{"20bab0a0-537e-11e7-99fb-9d125df1495a":{"seqId":5,"invCluster":{"1":1,"2":2,"5":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"wr"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
