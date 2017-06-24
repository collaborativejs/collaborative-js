var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/undo/rm/ins/undo/redo/rm/ins/ins/rm/ins/ins/rm/ins/undo/rm/rm/rm/rm - 20-ops-5baff830-32e4-43c2-99b5-d0113d7b1ca3", function() {
  var doc1 = new cljs.StringDocument("97cf32a0-537f-11e7-b54d-e12201363d11", 0, null);
  var doc2 = new cljs.StringDocument("97d17c90-537f-11e7-b54d-e12201363d11", 0, null);
  var doc3 = new cljs.StringDocument("97d30330-537f-11e7-b54d-e12201363d11", 0, null);
  var doc4 = new cljs.StringDocument("97d43bb0-537f-11e7-b54d-e12201363d11", 0, null);
  var doc5 = new cljs.StringDocument("97d5c250-537f-11e7-b54d-e12201363d11", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"df55d0a9-23d4-422b-bda5-176327cdaa7e","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 97cf32a0-537f-11e7-b54d-e12201363d11 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"qtr"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commit2 = [{"type":0,"at":9,"value":"wtw"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update6 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple3 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update10 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var commit4 = [{"type":1,"at":6,"value":"ee"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update15 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

  });

  it("Site 97d17c90-537f-11e7-b54d-e12201363d11 operations should be executed without errors", function() {
    var update1 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":12,"value":"re"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update3 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commitTuple2 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commitTuple3 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update8 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":7,"value":"l"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update10 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

  });

  it("Site 97d30330-537f-11e7-b54d-e12201363d11 operations should be executed without errors", function() {
    var update1 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var commit1 = [{"type":0,"at":11,"value":"ye"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update6 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var commit2 = [{"type":0,"at":4,"value":"rwq"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update7 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

    var commit3 = [{"type":1,"at":7,"value":"yed"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update11 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15}];
    var updateTuple11 = doc3.update(update11);
    data3 = cljs.ops.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16}];
    var updateTuple12 = doc3.update(update12);
    data3 = cljs.ops.string.exec(data3, updateTuple12.toExec);

    var commit4 = [{"type":0,"at":5,"value":"qe"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = cljs.ops.string.exec(data3, commitTuple4.toExec);

    var update13 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17}];
    var updateTuple13 = doc3.update(update13);
    data3 = cljs.ops.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18}];
    var updateTuple14 = doc3.update(update14);
    data3 = cljs.ops.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20}];
    var updateTuple15 = doc3.update(update15);
    data3 = cljs.ops.string.exec(data3, updateTuple15.toExec);

  });

  it("Site 97d43bb0-537f-11e7-b54d-e12201363d11 operations should be executed without errors", function() {
    var update1 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = cljs.ops.string.exec(data4, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":4,"value":"tey"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = cljs.ops.string.exec(data4, commitTuple1.toExec);

    var update2 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2},{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3}];
    var updateTuple2 = doc4.update(update2);
    data4 = cljs.ops.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4}];
    var updateTuple3 = doc4.update(update3);
    data4 = cljs.ops.string.exec(data4, updateTuple3.toExec);

    var commit2 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple2 = doc4.commit(commit2);
    data4 = cljs.ops.string.exec(data4, commitTuple2.toExec);

    var update4 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5}];
    var updateTuple4 = doc4.update(update4);
    data4 = cljs.ops.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc4.update(update5);
    data4 = cljs.ops.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8}];
    var updateTuple6 = doc4.update(update6);
    data4 = cljs.ops.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc4.update(update7);
    data4 = cljs.ops.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10}];
    var updateTuple8 = doc4.update(update8);
    data4 = cljs.ops.string.exec(data4, updateTuple8.toExec);

    var commit3 = [{"type":0,"at":4,"value":"ty"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = cljs.ops.string.exec(data4, commitTuple3.toExec);

    var update9 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11},{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12}];
    var updateTuple9 = doc4.update(update9);
    data4 = cljs.ops.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13}];
    var updateTuple10 = doc4.update(update10);
    data4 = cljs.ops.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14}];
    var updateTuple11 = doc4.update(update11);
    data4 = cljs.ops.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15}];
    var updateTuple12 = doc4.update(update12);
    data4 = cljs.ops.string.exec(data4, updateTuple12.toExec);

    var update13 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16}];
    var updateTuple13 = doc4.update(update13);
    data4 = cljs.ops.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17}];
    var updateTuple14 = doc4.update(update14);
    data4 = cljs.ops.string.exec(data4, updateTuple14.toExec);

    var commitTuple4 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple4.toExec);

    var update15 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18}];
    var updateTuple15 = doc4.update(update15);
    data4 = cljs.ops.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19},{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20}];
    var updateTuple16 = doc4.update(update16);
    data4 = cljs.ops.string.exec(data4, updateTuple16.toExec);

  });

  it("Site 97d5c250-537f-11e7-b54d-e12201363d11 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":4,"value":"o"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = cljs.ops.string.exec(data5, commitTuple1.toExec);

    var update1 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = cljs.ops.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = cljs.ops.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = cljs.ops.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = cljs.ops.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = cljs.ops.string.exec(data5, updateTuple5.toExec);

    var commit2 = [{"type":1,"at":3,"value":"l W"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = cljs.ops.string.exec(data5, commitTuple2.toExec);

    var update6 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6},{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7}];
    var updateTuple6 = doc5.update(update6);
    data5 = cljs.ops.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8}];
    var updateTuple7 = doc5.update(update7);
    data5 = cljs.ops.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9}];
    var updateTuple8 = doc5.update(update8);
    data5 = cljs.ops.string.exec(data5, updateTuple8.toExec);

    var commit3 = [{"type":1,"at":1,"value":"lor"}];
    var commitTuple3 = doc5.commit(commit3);
    data5 = cljs.ops.string.exec(data5, commitTuple3.toExec);

    var update9 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10}];
    var updateTuple9 = doc5.update(update9);
    data5 = cljs.ops.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11}];
    var updateTuple10 = doc5.update(update10);
    data5 = cljs.ops.string.exec(data5, updateTuple10.toExec);

    var update11 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12}];
    var updateTuple11 = doc5.update(update11);
    data5 = cljs.ops.string.exec(data5, updateTuple11.toExec);

    var update12 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13}];
    var updateTuple12 = doc5.update(update12);
    data5 = cljs.ops.string.exec(data5, updateTuple12.toExec);

    var update13 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14}];
    var updateTuple13 = doc5.update(update13);
    data5 = cljs.ops.string.exec(data5, updateTuple13.toExec);

    var update14 = [{"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15}];
    var updateTuple14 = doc5.update(update14);
    data5 = cljs.ops.string.exec(data5, updateTuple14.toExec);

    var update15 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16}];
    var updateTuple15 = doc5.update(update15);
    data5 = cljs.ops.string.exec(data5, updateTuple15.toExec);

    var update16 = [{"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17}];
    var updateTuple16 = doc5.update(update16);
    data5 = cljs.ops.string.exec(data5, updateTuple16.toExec);

    var update17 = [{"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18}];
    var updateTuple17 = doc5.update(update17);
    data5 = cljs.ops.string.exec(data5, updateTuple17.toExec);

    var commit4 = [{"type":1,"at":4,"value":"r"}];
    var commitTuple4 = doc5.commit(commit4);
    data5 = cljs.ops.string.exec(data5, commitTuple4.toExec);

    var update18 = [{"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19}];
    var updateTuple18 = doc5.update(update18);
    data5 = cljs.ops.string.exec(data5, updateTuple18.toExec);

    var update19 = [{"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20}];
    var updateTuple19 = doc5.update(update19);
    data5 = cljs.ops.string.exec(data5, updateTuple19.toExec);

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

    var serverUpdate0 = {"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"qtr"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tey"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"re"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"re"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l W"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":9,"value":"wtw"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":11,"value":"ye"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"rwq"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"lor"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":1,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":0,"at":12,"value":"re"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":4,"value":"ty"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":9,"value":"wtw"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"97d17c90-537f-11e7-b54d-e12201363d11","seqId":2,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"l"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":7,"value":"yed"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"97d30330-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":5,"value":"qe"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"97d43bb0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":4,"value":"ty"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"97d5c250-537f-11e7-b54d-e12201363d11","seqId":4,"context":{"vector":{"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"97cf32a0-537f-11e7-b54d-e12201363d11","seqId":3,"context":{"vector":{"97cf32a0-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"97d5c250-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{},"invClusterSize":0},"97d43bb0-537f-11e7-b54d-e12201363d11":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"97d17c90-537f-11e7-b54d-e12201363d11":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"97d30330-537f-11e7-b54d-e12201363d11":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ee"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});