var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/ins/undo/ins/undo/ins/undo/ins/ins/undo/rm/undo/rm/ins/ins/ins/undo/redo/rm - 20-ops-2265363d-8000-4da1-9205-ae58baba4143", function() {
  var doc1 = new cljs.StringDocument("8f4f4b60-537f-11e7-983e-b1c16e70998f", 0, null);
  var doc2 = new cljs.StringDocument("8f514730-537f-11e7-983e-b1c16e70998f", 0, null);
  var doc3 = new cljs.StringDocument("8f527fb0-537f-11e7-983e-b1c16e70998f", 0, null);
  var doc4 = new cljs.StringDocument("8f539120-537f-11e7-983e-b1c16e70998f", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"4ab766f1-8e2f-4c1f-9c71-6ffd4dfd79a1","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 8f4f4b60-537f-11e7-983e-b1c16e70998f operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":3,"value":"eq"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":3},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"eq"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"l"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":3,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":4,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":13,"value":"qr"},"execOrder":9},{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wwe"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ew"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"yww"},"execOrder":13}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":14}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"qww"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var commitTuple4 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update14 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"yww"},"execOrder":16}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":1},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":2,"load":{"type":0,"at":8,"value":"e"},"execOrder":17},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"eq"},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":6,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":2},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"we"},"execOrder":19}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":14,"value":"qww"},"execOrder":20}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

  });

  it("Site 8f514730-537f-11e7-983e-b1c16e70998f operations should be executed without errors", function() {
    var update1 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":3},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"eq"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"l"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":8,"value":"ew"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update5 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":6},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":3,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commitTuple2 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update7 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":4,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":13,"value":"qr"},"execOrder":9},{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wwe"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ew"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":12},{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"yww"},"execOrder":13}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit3 = [{"type":0,"at":14,"value":"qww"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update10 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":14},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"qww"},"execOrder":15}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"yww"},"execOrder":16}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":1},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":2,"load":{"type":0,"at":8,"value":"e"},"execOrder":17},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"eq"},"execOrder":18}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update13 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":6,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":2},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"we"},"execOrder":19},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":14,"value":"qww"},"execOrder":20}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

  });

  it("Site 8f527fb0-537f-11e7-983e-b1c16e70998f operations should be executed without errors", function() {
    var update1 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":3},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"eq"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"l"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":6},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":7}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":3,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":8}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var commit1 = [{"type":0,"at":1,"value":"wwe"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update7 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":4,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":13,"value":"qr"},"execOrder":9},{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wwe"},"execOrder":10}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ew"},"execOrder":11}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var commit2 = [{"type":0,"at":10,"value":"yww"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update9 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":12},{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"yww"},"execOrder":13}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var commitTuple3 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update10 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":14},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"qww"},"execOrder":15}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"yww"},"execOrder":16}];
    var updateTuple11 = doc3.update(update11);
    data3 = cljs.ops.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":1},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":2,"load":{"type":0,"at":8,"value":"e"},"execOrder":17},{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"eq"},"execOrder":18}];
    var updateTuple12 = doc3.update(update12);
    data3 = cljs.ops.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":6,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":2},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"we"},"execOrder":19},{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":14,"value":"qww"},"execOrder":20}];
    var updateTuple13 = doc3.update(update13);
    data3 = cljs.ops.string.exec(data3, updateTuple13.toExec);

  });

  it("Site 8f539120-537f-11e7-983e-b1c16e70998f operations should be executed without errors", function() {
    var update1 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = cljs.ops.string.exec(data4, updateTuple1.toExec);

    var commit1 = [{"type":1,"at":1,"value":"l"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = cljs.ops.string.exec(data4, commitTuple1.toExec);

    var update2 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = cljs.ops.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = cljs.ops.string.exec(data4, updateTuple3.toExec);

    var commitTuple2 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple2.toExec);

    var update4 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"eq"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = cljs.ops.string.exec(data4, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":2,"value":"l"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = cljs.ops.string.exec(data4, commitTuple3.toExec);

    var update5 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"l"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = cljs.ops.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = cljs.ops.string.exec(data4, updateTuple6.toExec);

    var commit4 = [{"type":0,"at":8,"value":"t"}];
    var commitTuple4 = doc4.commit(commit4);
    data4 = cljs.ops.string.exec(data4, commitTuple4.toExec);

    var update7 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = cljs.ops.string.exec(data4, updateTuple7.toExec);

    var commit5 = [{"type":0,"at":13,"value":"qr"}];
    var commitTuple5 = doc4.commit(commit5);
    data4 = cljs.ops.string.exec(data4, commitTuple5.toExec);

    var update8 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":3,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = cljs.ops.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":4,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":13,"value":"qr"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = cljs.ops.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wwe"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = cljs.ops.string.exec(data4, updateTuple10.toExec);

    var commit6 = [{"type":0,"at":8,"value":"e"}];
    var commitTuple6 = doc4.commit(commit6);
    data4 = cljs.ops.string.exec(data4, commitTuple6.toExec);

    var update11 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ew"},"execOrder":11}];
    var updateTuple11 = doc4.update(update11);
    data4 = cljs.ops.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":12}];
    var updateTuple12 = doc4.update(update12);
    data4 = cljs.ops.string.exec(data4, updateTuple12.toExec);

    var commitTuple7 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple7.toExec);

    var update13 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"yww"},"execOrder":13}];
    var updateTuple13 = doc4.update(update13);
    data4 = cljs.ops.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":14}];
    var updateTuple14 = doc4.update(update14);
    data4 = cljs.ops.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"qww"},"execOrder":15}];
    var updateTuple15 = doc4.update(update15);
    data4 = cljs.ops.string.exec(data4, updateTuple15.toExec);

    var commitTuple8 = doc4.redo();
    data4 = cljs.ops.string.exec(data4, commitTuple8.toExec);

    var update16 = [{"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"yww"},"execOrder":16}];
    var updateTuple16 = doc4.update(update16);
    data4 = cljs.ops.string.exec(data4, updateTuple16.toExec);

    var update17 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":1},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":2,"load":{"type":0,"at":8,"value":"e"},"execOrder":17}];
    var updateTuple17 = doc4.update(update17);
    data4 = cljs.ops.string.exec(data4, updateTuple17.toExec);

    var commit9 = [{"type":1,"at":2,"value":"we"}];
    var commitTuple9 = doc4.commit(commit9);
    data4 = cljs.ops.string.exec(data4, commitTuple9.toExec);

    var update18 = [{"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"eq"},"execOrder":18}];
    var updateTuple18 = doc4.update(update18);
    data4 = cljs.ops.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":6,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":2},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"we"},"execOrder":19}];
    var updateTuple19 = doc4.update(update19);
    data4 = cljs.ops.string.exec(data4, updateTuple19.toExec);

    var update20 = [{"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":14,"value":"qww"},"execOrder":20}];
    var updateTuple20 = doc4.update(update20);
    data4 = cljs.ops.string.exec(data4, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"eq"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"l"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ew"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":3,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":4,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":13,"value":"qr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wwe"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":1,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"ew"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"yww"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"qww"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"8f527fb0-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"yww"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":5,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":1},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":2,"load":{"type":0,"at":8,"value":"e"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"8f4f4b60-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"eq"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"8f539120-537f-11e7-983e-b1c16e70998f","seqId":6,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1,"5":2},"invClusterSize":2},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"we"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"8f514730-537f-11e7-983e-b1c16e70998f","seqId":2,"context":{"vector":{"8f4f4b60-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f539120-537f-11e7-983e-b1c16e70998f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8f514730-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8f527fb0-537f-11e7-983e-b1c16e70998f":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":14,"value":"qww"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});