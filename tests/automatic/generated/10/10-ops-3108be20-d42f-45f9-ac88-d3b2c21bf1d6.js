var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/ins/ins/rm/undo/ins/rm/rm/undo/ins - 10-ops-3108be20-d42f-45f9-ac88-d3b2c21bf1d6", function() {
  var doc1 = new cljs.StringDocument("e15f18a0-537e-11e7-a491-fbbfd9d01bca", 0, null);
  var doc2 = new cljs.StringDocument("e1611470-537e-11e7-a491-fbbfd9d01bca", 0, null);
  var doc3 = new cljs.StringDocument("e162c220-537e-11e7-a491-fbbfd9d01bca", 0, null);
  var doc4 = new cljs.StringDocument("e16421b0-537e-11e7-a491-fbbfd9d01bca", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"6829ccd1-25e9-4da7-b530-6d876336b91f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site e15f18a0-537e-11e7-a491-fbbfd9d01bca operations should be executed without errors", function() {
    var update1 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":6,"value":"Wor"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update4 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"ey"},"execOrder":4},{"siteId":"e15f18a0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wor"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"qqe"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":2,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"qe"},"execOrder":7},{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":3,"value":"qe"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"et"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

  });

  it("Site e1611470-537e-11e7-a491-fbbfd9d01bca operations should be executed without errors", function() {
    var update1 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":8,"value":"ew"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update2 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":2},{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"ey"},"execOrder":4},{"siteId":"e15f18a0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wor"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":2,"value":"qqe"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"qqe"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":3,"value":"qe"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update5 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":2,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"qe"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update6 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":3,"value":"qe"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"et"},"execOrder":9},{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

  });

  it("Site e162c220-537e-11e7-a491-fbbfd9d01bca operations should be executed without errors", function() {
    var update1 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":7,"value":"ey"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":2},{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"ey"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"e15f18a0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wor"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"qqe"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":2,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"qe"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":3,"value":"qe"},"execOrder":8}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var commit2 = [{"type":1,"at":5,"value":"ll"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update8 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"et"},"execOrder":9},{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

  });

  it("Site e16421b0-537e-11e7-a491-fbbfd9d01bca operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = cljs.ops.string.exec(data4, commitTuple1.toExec);

    var commitTuple2 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple2.toExec);

    var update1 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = cljs.ops.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = cljs.ops.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = cljs.ops.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"ey"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = cljs.ops.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"e15f18a0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wor"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = cljs.ops.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"qqe"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = cljs.ops.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":2,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"qe"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = cljs.ops.string.exec(data4, updateTuple7.toExec);

    var commit3 = [{"type":0,"at":7,"value":"et"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = cljs.ops.string.exec(data4, commitTuple3.toExec);

    var update8 = [{"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":3,"value":"qe"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = cljs.ops.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"et"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = cljs.ops.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = cljs.ops.string.exec(data4, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"ey"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"e15f18a0-537e-11e7-a491-fbbfd9d01bca","seqId":1,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wor"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"qqe"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":2,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"qe"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"e1611470-537e-11e7-a491-fbbfd9d01bca","seqId":3,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":3,"value":"qe"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"e16421b0-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{},"invClusterSize":0},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"et"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"e162c220-537e-11e7-a491-fbbfd9d01bca","seqId":2,"context":{"vector":{"e16421b0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"e162c220-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0},"e1611470-537e-11e7-a491-fbbfd9d01bca":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"e15f18a0-537e-11e7-a491-fbbfd9d01bca":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});