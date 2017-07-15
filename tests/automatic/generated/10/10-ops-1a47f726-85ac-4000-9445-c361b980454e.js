var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/rm/ins/undo/ins/ins/rm/ins/undo - 10-ops-1a47f726-85ac-4000-9445-c361b980454e", function() {
  var doc1 = new clv.string.Document("f3f71350-537e-11e7-b501-db70ab66ee9e", 0, null);
  var doc2 = new clv.string.Document("f3f95d40-537e-11e7-b501-db70ab66ee9e", 0, null);
  var doc3 = new clv.string.Document("f3fa95c0-537e-11e7-b501-db70ab66ee9e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"a81e8044-54d7-469a-a973-a875fa50d9f7","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site f3f71350-537e-11e7-b501-db70ab66ee9e operations should be executed without errors", function() {
    var update1 = [{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":1,"at":5,"value":" W"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" W"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":2,"value":"ll"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update3 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":4},{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"rt"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":3,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"o"},"execOrder":7},{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

  });

  it("Site f3f95d40-537e-11e7-b501-db70ab66ee9e operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":7,"value":"or"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" W"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":3,"value":"y"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":4},{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"rt"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple3 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update6 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":3,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"o"},"execOrder":7},{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

  });

  it("Site f3fa95c0-537e-11e7-b501-db70ab66ee9e operations should be executed without errors", function() {
    var update1 = [{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" W"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.ops.string.exec(data3, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":7,"value":"t"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.ops.string.exec(data3, commitTuple1.toExec);

    var update3 = [{"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.ops.string.exec(data3, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":4,"value":"rt"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.ops.string.exec(data3, commitTuple2.toExec);

    var update5 = [{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.ops.string.exec(data3, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":2,"value":"o"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.ops.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"rt"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":3,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"o"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.ops.string.exec(data3, updateTuple7.toExec);

    var commit4 = [{"type":0,"at":4,"value":"q"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.ops.string.exec(data3, commitTuple4.toExec);

    var update8 = [{"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.ops.string.exec(data3, updateTuple8.toExec);

    var commitTuple5 = doc3.undo();
    data3 = clv.ops.string.exec(data3, commitTuple5.toExec);

    var update9 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.ops.string.exec(data3, updateTuple10.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new clv.string.Document(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = clv.ops.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" W"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"f3f71350-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":1,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"rt"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":3,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"o"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"f3f95d40-537e-11e7-b501-db70ab66ee9e","seqId":2,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"f3fa95c0-537e-11e7-b501-db70ab66ee9e","seqId":4,"context":{"vector":{"f3f95d40-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3f71350-537e-11e7-b501-db70ab66ee9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f3fa95c0-537e-11e7-b501-db70ab66ee9e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});
