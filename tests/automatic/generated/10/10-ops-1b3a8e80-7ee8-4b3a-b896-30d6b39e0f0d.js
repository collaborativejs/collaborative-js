var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/rm/rm/rm/ins/rm/rm/ins/undo - 10-ops-1b3a8e80-7ee8-4b3a-b896-30d6b39e0f0d", function() {
  var doc1 = new clv.string.Document("64f63050-537e-11e7-b989-d313162a8ced", 0, null);
  var doc2 = new clv.string.Document("64f82c20-537e-11e7-b989-d313162a8ced", 0, null);
  var doc3 = new clv.string.Document("64f98bb0-537e-11e7-b989-d313162a8ced", 0, null);
  var doc4 = new clv.string.Document("64fac430-537e-11e7-b989-d313162a8ced", 0, null);
  var doc5 = new clv.string.Document("64fbfcb0-537e-11e7-b989-d313162a8ced", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"d6f3d5dc-e210-4b8b-8c09-c88953ff7c9f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 64f63050-537e-11e7-b989-d313162a8ced operations should be executed without errors", function() {
    var update1 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

  });

  it("Site 64f82c20-537e-11e7-b989-d313162a8ced operations should be executed without errors", function() {
    var update1 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var commit1 = [{"type":0,"at":2,"value":"yr"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update9 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9},{"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

  });

  it("Site 64f98bb0-537e-11e7-b989-d313162a8ced operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":6,"value":"w"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.ops.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1},{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.ops.string.exec(data3, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":6,"value":"y"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.ops.string.exec(data3, commitTuple2.toExec);

    var update3 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.ops.string.exec(data3, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":3,"value":"r"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.ops.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7},{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.ops.string.exec(data3, updateTuple6.toExec);

    var commit4 = [{"type":1,"at":6,"value":"w"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.ops.string.exec(data3, commitTuple4.toExec);

    var update7 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.ops.string.exec(data3, updateTuple8.toExec);

  });

  it("Site 64fac430-537e-11e7-b989-d313162a8ced operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"rry"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.ops.string.exec(data4, commitTuple1.toExec);

    var update1 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1},{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.ops.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.ops.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.ops.string.exec(data4, updateTuple3.toExec);

    var commit2 = [{"type":1,"at":4,"value":"r"}];
    var commitTuple2 = doc4.commit(commit2);
    data4 = clv.ops.string.exec(data4, commitTuple2.toExec);

    var update4 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5},{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.ops.string.exec(data4, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":6,"value":"o"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.ops.string.exec(data4, commitTuple3.toExec);

    var update5 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.ops.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.ops.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.ops.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.ops.string.exec(data4, updateTuple8.toExec);

  });

  it("Site 64fbfcb0-537e-11e7-b989-d313162a8ced operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"yry"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.ops.string.exec(data5, commitTuple1.toExec);

    var update1 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.ops.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.ops.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.ops.string.exec(data5, updateTuple3.toExec);

    var commitTuple2 = doc5.undo();
    data5 = clv.ops.string.exec(data5, commitTuple2.toExec);

    var update4 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.ops.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.ops.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.ops.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.ops.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.ops.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.ops.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.ops.string.exec(data5, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yry"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"rry"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"y"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"64fbfcb0-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yry"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":2,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"64fac430-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":3,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"64f98bb0-537e-11e7-b989-d313162a8ced","seqId":4,"context":{"vector":{"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"w"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"64f82c20-537e-11e7-b989-d313162a8ced","seqId":1,"context":{"vector":{"64fbfcb0-537e-11e7-b989-d313162a8ced":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"64fac430-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0},"64f98bb0-537e-11e7-b989-d313162a8ced":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"yr"},"execOrder":10};
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
