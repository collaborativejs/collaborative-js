var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/rm/ins/undo/ins/rm/undo/rm/ins - 10-ops-7cc9b59b-286d-4257-90d1-9e58a55fc318", function() {
  var doc1 = new cljs.StringDocument("de494d20-537e-11e7-a82e-fda335eb5f4d", 0, null);
  var doc2 = new cljs.StringDocument("de4bbe20-537e-11e7-a82e-fda335eb5f4d", 0, null);
  var doc3 = new cljs.StringDocument("de4cf6a0-537e-11e7-a82e-fda335eb5f4d", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"f05687cc-8e4c-4241-8486-d04ca011bf0f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site de494d20-537e-11e7-a82e-fda335eb5f4d operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":2,"value":"llo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"rq"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtr"},"execOrder":4},{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":6,"value":"W"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update5 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"rtr"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":3,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":4,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"te"},"execOrder":10}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

  });

  it("Site de4bbe20-537e-11e7-a82e-fda335eb5f4d operations should be executed without errors", function() {
    var update1 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"rq"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":5,"value":"rtr"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update3 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3},{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtr"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple2 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update6 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7},{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"rtr"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":3,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":4,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"te"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

  });

  it("Site de4cf6a0-537e-11e7-a82e-fda335eb5f4d operations should be executed without errors", function() {
    var update1 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":4,"value":"rq"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":8,"value":"ld"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update2 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"rq"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtr"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var commitTuple3 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Hel"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = cljs.ops.string.exec(data3, commitTuple4.toExec);

    var update8 = [{"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"rtr"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var commit5 = [{"type":0,"at":4,"value":"te"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = cljs.ops.string.exec(data3, commitTuple5.toExec);

    var update9 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":3,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":4,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"te"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"rq"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"rtr"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"de494d20-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":2,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"de4bbe20-537e-11e7-a82e-fda335eb5f4d","seqId":1,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"rtr"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":3,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"de4cf6a0-537e-11e7-a82e-fda335eb5f4d","seqId":4,"context":{"vector":{"de494d20-537e-11e7-a82e-fda335eb5f4d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"de4cf6a0-537e-11e7-a82e-fda335eb5f4d":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"de4bbe20-537e-11e7-a82e-fda335eb5f4d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"te"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});