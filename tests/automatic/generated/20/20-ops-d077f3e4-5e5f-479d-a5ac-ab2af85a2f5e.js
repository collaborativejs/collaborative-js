var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/ins/undo/ins/rm/undo/ins/rm/undo/rm/ins/ins/ins/rm/ins/rm/ins/undo/ins - 20-ops-d077f3e4-5e5f-479d-a5ac-ab2af85a2f5e", function() {
  var doc1 = new clv.string.Document("bb7d9110-537f-11e7-8842-456cc9b80bd4", 0, null);
  var doc2 = new clv.string.Document("bb7fdb00-537f-11e7-8842-456cc9b80bd4", 0, null);
  var doc3 = new clv.string.Document("bb813a90-537f-11e7-8842-456cc9b80bd4", 0, null);
  var doc4 = new clv.string.Document("bb829a20-537f-11e7-8842-456cc9b80bd4", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"7cddf85b-bdaa-4d71-98fa-c84d14ae233f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site bb7d9110-537f-11e7-8842-456cc9b80bd4 operations should be executed without errors", function() {
    var update1 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"yww"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"o"},"execOrder":5},{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"r"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commit1 = [{"type":0,"at":15,"value":"qqr"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update6 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":7},{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"yww"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"qqr"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"yy"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":6,"value":"yww"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":15,"value":"twr"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var commit2 = [{"type":0,"at":23,"value":"yry"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update11 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":18,"value":"tw"},"execOrder":13}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"wqq"},"execOrder":14},{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":23,"value":"yry"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit3 = [{"type":0,"at":3,"value":"y"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update13 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":16,"value":"q"},"execOrder":16},{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update15 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":6,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"y"},"execOrder":19},{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

  });

  it("Site bb7fdb00-537f-11e7-8842-456cc9b80bd4 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":11,"value":"t"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":5,"value":"o"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update3 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"yww"},"execOrder":3},{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple3 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"o"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit4 = [{"type":0,"at":14,"value":"r"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"r"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commit5 = [{"type":1,"at":6,"value":"yww"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update6 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":7},{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"yww"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commitTuple6 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update7 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"qqr"},"execOrder":9},{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"yy"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":6,"value":"yww"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":15,"value":"twr"},"execOrder":12},{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":18,"value":"tw"},"execOrder":13}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"wqq"},"execOrder":14},{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":23,"value":"yry"},"execOrder":15}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":16,"value":"q"},"execOrder":16}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commit7 = [{"type":1,"at":4,"value":"o"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update12 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":17},{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":18}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":6,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"y"},"execOrder":19}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":20}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

  });

  it("Site bb813a90-537f-11e7-8842-456cc9b80bd4 operations should be executed without errors", function() {
    var update1 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":5,"value":"yww"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":2},{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"yww"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"o"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"r"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var commit2 = [{"type":0,"at":15,"value":"yy"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update7 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"yww"},"execOrder":8}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"qqr"},"execOrder":9},{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"yy"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var commit3 = [{"type":0,"at":15,"value":"twr"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update9 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":6,"value":"yww"},"execOrder":11}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":18,"value":"tw"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update10 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":15,"value":"twr"},"execOrder":12}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":18,"value":"tw"},"execOrder":13}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var commit5 = [{"type":0,"at":16,"value":"q"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = clv.string.exec(data3, commitTuple5.toExec);

    var update12 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"wqq"},"execOrder":14},{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":23,"value":"yry"},"execOrder":15}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":16,"value":"q"},"execOrder":16}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var commit6 = [{"type":1,"at":5,"value":"y"}];
    var commitTuple6 = doc3.commit(commit6);
    data3 = clv.string.exec(data3, commitTuple6.toExec);

    var update14 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":17}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":18},{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":6,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"y"},"execOrder":19}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":20}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

  });

  it("Site bb829a20-537f-11e7-8842-456cc9b80bd4 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"q"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update1 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"yww"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"o"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update6 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"r"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"yww"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"qqr"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"yy"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":6,"value":"yww"},"execOrder":11}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":15,"value":"twr"},"execOrder":12}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var commit3 = [{"type":0,"at":12,"value":"wqq"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update13 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":18,"value":"tw"},"execOrder":13},{"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"wqq"},"execOrder":14}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":23,"value":"yry"},"execOrder":15}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":16,"value":"q"},"execOrder":16}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":17}];
    var updateTuple16 = doc4.update(update16);
    data4 = clv.string.exec(data4, updateTuple16.toExec);

    var update17 = [{"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":18}];
    var updateTuple17 = doc4.update(update17);
    data4 = clv.string.exec(data4, updateTuple17.toExec);

    var update18 = [{"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":6,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"y"},"execOrder":19}];
    var updateTuple18 = doc4.update(update18);
    data4 = clv.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":20}];
    var updateTuple19 = doc4.update(update19);
    data4 = clv.string.exec(data4, updateTuple19.toExec);

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

    var serverUpdate0 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"t"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"yww"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"o"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"r"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"yww"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":1,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"qqr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"yy"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":6,"value":"yww"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":15,"value":"twr"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":4,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":18,"value":"tw"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"bb829a20-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"wqq"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":2,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":23,"value":"yry"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":16,"value":"q"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"bb7fdb00-537f-11e7-8842-456cc9b80bd4","seqId":5,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"bb813a90-537f-11e7-8842-456cc9b80bd4","seqId":6,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":5,"invCluster":{},"invClusterSize":0},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"y"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"bb7d9110-537f-11e7-8842-456cc9b80bd4","seqId":3,"context":{"vector":{"bb7fdb00-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{"2":1,"4":1},"invClusterSize":2},"bb829a20-537f-11e7-8842-456cc9b80bd4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bb813a90-537f-11e7-8842-456cc9b80bd4":{"seqId":4,"invCluster":{},"invClusterSize":0},"bb7d9110-537f-11e7-8842-456cc9b80bd4":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":3,"value":"y"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});
