var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/ins/ins/ins/rm/undo/ins/undo/rm - 10-ops-dc6954dc-470f-4fce-af45-e5e6fde98e11", function() {
  var doc1 = new clv.string.Document("485a9490-537e-11e7-8747-05c9e6a0827e", 0, null);
  var doc2 = new clv.string.Document("485c9060-537e-11e7-8747-05c9e6a0827e", 0, null);
  var doc3 = new clv.string.Document("485deff0-537e-11e7-8747-05c9e6a0827e", 0, null);
  var doc4 = new clv.string.Document("485f4f80-537e-11e7-8747-05c9e6a0827e", 0, null);
  var doc5 = new clv.string.Document("4860af10-537e-11e7-8747-05c9e6a0827e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"a5edf8f9-8637-460c-80a4-ee8b0b1a2d91","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 485a9490-537e-11e7-8747-05c9e6a0827e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"q"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1},{"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5},{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 485c9060-537e-11e7-8747-05c9e6a0827e operations should be executed without errors", function() {
    var update1 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1},{"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":9,"value":"wer"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update3 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":17,"value":"re"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5},{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9},{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

  });

  it("Site 485deff0-537e-11e7-8747-05c9e6a0827e operations should be executed without errors", function() {
    var update1 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1},{"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5},{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":13,"value":"r"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":8,"value":"ty"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update5 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7},{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

  });

  it("Site 485f4f80-537e-11e7-8747-05c9e6a0827e operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update1 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update2 = [{"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":4,"value":"ty"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update3 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5},{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var commitTuple4 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var update7 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8},{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

  });

  it("Site 4860af10-537e-11e7-8747-05c9e6a0827e operations should be executed without errors", function() {
    var update1 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":5,"value":"o "}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var update4 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.string.exec(data5, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"485a9490-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"4860af10-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wer"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"485c9060-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":17,"value":"re"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":1,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":13,"value":"r"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"485deff0-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"4860af10-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485c9060-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0},"485deff0-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ty"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"485f4f80-537e-11e7-8747-05c9e6a0827e","seqId":2,"context":{"vector":{"485f4f80-537e-11e7-8747-05c9e6a0827e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"485a9490-537e-11e7-8747-05c9e6a0827e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});
