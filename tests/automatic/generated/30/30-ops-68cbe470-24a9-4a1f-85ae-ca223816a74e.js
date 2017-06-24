var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/rm/rm/ins/ins/undo/undo/rm/ins/rm/ins/undo/undo/rm/ins/undo/rm/rm/rm/undo/rm/ins/ins/undo/rm/undo/rm/rm/rm - 30-ops-68cbe470-24a9-4a1f-85ae-ca223816a74e", function() {
  var doc1 = new cljs.StringDocument("bd7525e0-5380-11e7-9cb7-4be7bca15d9e", 0, null);
  var doc2 = new cljs.StringDocument("bd7721b0-5380-11e7-9cb7-4be7bca15d9e", 0, null);
  var doc3 = new cljs.StringDocument("bd78a850-5380-11e7-9cb7-4be7bca15d9e", 0, null);
  var doc4 = new cljs.StringDocument("bd79b9c0-5380-11e7-9cb7-4be7bca15d9e", 0, null);
  var doc5 = new cljs.StringDocument("bd7b6770-5380-11e7-9cb7-4be7bca15d9e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"cd14a0d4-773e-481b-9be6-e93e01d71416","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site bd7525e0-5380-11e7-9cb7-4be7bca15d9e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":11,"value":"ttw"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update17 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var commit3 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update20 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var update21 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var commit4 = [{"type":1,"at":0,"value":"d"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update22 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var update23 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var update24 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

  });

  it("Site bd7721b0-5380-11e7-9cb7-4be7bca15d9e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"tqw"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":0,"at":4,"value":"ey"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update3 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commitTuple3 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit5 = [{"type":1,"at":2,"value":" W"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var commit6 = [{"type":0,"at":7,"value":"rqt"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update9 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit7 = [{"type":1,"at":5,"value":"dtr"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update10 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commit8 = [{"type":0,"at":4,"value":"twe"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update11 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commitTuple9 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var commitTuple10 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update13 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commit11 = [{"type":1,"at":6,"value":"t"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update14 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var commit12 = [{"type":0,"at":6,"value":"e"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update16 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

    var commitTuple13 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update18 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22}];
    var updateTuple18 = doc2.update(update18);
    data2 = cljs.ops.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23}];
    var updateTuple19 = doc2.update(update19);
    data2 = cljs.ops.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25}];
    var updateTuple20 = doc2.update(update20);
    data2 = cljs.ops.string.exec(data2, updateTuple20.toExec);

    var update21 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26}];
    var updateTuple21 = doc2.update(update21);
    data2 = cljs.ops.string.exec(data2, updateTuple21.toExec);

    var commit14 = [{"type":1,"at":0,"value":"d"}];
    var commitTuple14 = doc2.commit(commit14);
    data2 = cljs.ops.string.exec(data2, commitTuple14.toExec);

    var update22 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28}];
    var updateTuple22 = doc2.update(update22);
    data2 = cljs.ops.string.exec(data2, updateTuple22.toExec);

    var update23 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29}];
    var updateTuple23 = doc2.update(update23);
    data2 = cljs.ops.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30}];
    var updateTuple24 = doc2.update(update24);
    data2 = cljs.ops.string.exec(data2, updateTuple24.toExec);

  });

  it("Site bd78a850-5380-11e7-9cb7-4be7bca15d9e operations should be executed without errors", function() {
    var update1 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var commit1 = [{"type":1,"at":2,"value":"llt"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update3 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var commit2 = [{"type":1,"at":12,"value":"tw"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update8 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12}];
    var updateTuple11 = doc3.update(update11);
    data3 = cljs.ops.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13}];
    var updateTuple12 = doc3.update(update12);
    data3 = cljs.ops.string.exec(data3, updateTuple12.toExec);

    var commitTuple3 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update13 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14}];
    var updateTuple13 = doc3.update(update13);
    data3 = cljs.ops.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15}];
    var updateTuple14 = doc3.update(update14);
    data3 = cljs.ops.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16}];
    var updateTuple15 = doc3.update(update15);
    data3 = cljs.ops.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17}];
    var updateTuple16 = doc3.update(update16);
    data3 = cljs.ops.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18}];
    var updateTuple17 = doc3.update(update17);
    data3 = cljs.ops.string.exec(data3, updateTuple17.toExec);

    var update18 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple18 = doc3.update(update18);
    data3 = cljs.ops.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21}];
    var updateTuple19 = doc3.update(update19);
    data3 = cljs.ops.string.exec(data3, updateTuple19.toExec);

    var update20 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22}];
    var updateTuple20 = doc3.update(update20);
    data3 = cljs.ops.string.exec(data3, updateTuple20.toExec);

    var update21 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23}];
    var updateTuple21 = doc3.update(update21);
    data3 = cljs.ops.string.exec(data3, updateTuple21.toExec);

    var commit4 = [{"type":1,"at":1,"value":"er"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = cljs.ops.string.exec(data3, commitTuple4.toExec);

    var update22 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25}];
    var updateTuple22 = doc3.update(update22);
    data3 = cljs.ops.string.exec(data3, updateTuple22.toExec);

    var update23 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26}];
    var updateTuple23 = doc3.update(update23);
    data3 = cljs.ops.string.exec(data3, updateTuple23.toExec);

    var update24 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28}];
    var updateTuple24 = doc3.update(update24);
    data3 = cljs.ops.string.exec(data3, updateTuple24.toExec);

    var update25 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29}];
    var updateTuple25 = doc3.update(update25);
    data3 = cljs.ops.string.exec(data3, updateTuple25.toExec);

    var commit5 = [{"type":0,"at":0,"value":"e"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = cljs.ops.string.exec(data3, commitTuple5.toExec);

    var update26 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30}];
    var updateTuple26 = doc3.update(update26);
    data3 = cljs.ops.string.exec(data3, updateTuple26.toExec);

  });

  it("Site bd79b9c0-5380-11e7-9cb7-4be7bca15d9e operations should be executed without errors", function() {
    var update1 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = cljs.ops.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = cljs.ops.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = cljs.ops.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = cljs.ops.string.exec(data4, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":8,"value":"e"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = cljs.ops.string.exec(data4, commitTuple1.toExec);

    var update5 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = cljs.ops.string.exec(data4, updateTuple5.toExec);

    var commitTuple2 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple2.toExec);

    var update6 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = cljs.ops.string.exec(data4, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = cljs.ops.string.exec(data4, commitTuple3.toExec);

    var update7 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = cljs.ops.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = cljs.ops.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = cljs.ops.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = cljs.ops.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11}];
    var updateTuple11 = doc4.update(update11);
    data4 = cljs.ops.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12}];
    var updateTuple12 = doc4.update(update12);
    data4 = cljs.ops.string.exec(data4, updateTuple12.toExec);

    var update13 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13}];
    var updateTuple13 = doc4.update(update13);
    data4 = cljs.ops.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14}];
    var updateTuple14 = doc4.update(update14);
    data4 = cljs.ops.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15}];
    var updateTuple15 = doc4.update(update15);
    data4 = cljs.ops.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16}];
    var updateTuple16 = doc4.update(update16);
    data4 = cljs.ops.string.exec(data4, updateTuple16.toExec);

    var update17 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17}];
    var updateTuple17 = doc4.update(update17);
    data4 = cljs.ops.string.exec(data4, updateTuple17.toExec);

    var commitTuple4 = doc4.undo();
    data4 = cljs.ops.string.exec(data4, commitTuple4.toExec);

    var update18 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18}];
    var updateTuple18 = doc4.update(update18);
    data4 = cljs.ops.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple19 = doc4.update(update19);
    data4 = cljs.ops.string.exec(data4, updateTuple19.toExec);

    var update20 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20},{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21}];
    var updateTuple20 = doc4.update(update20);
    data4 = cljs.ops.string.exec(data4, updateTuple20.toExec);

    var update21 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22}];
    var updateTuple21 = doc4.update(update21);
    data4 = cljs.ops.string.exec(data4, updateTuple21.toExec);

    var update22 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23}];
    var updateTuple22 = doc4.update(update22);
    data4 = cljs.ops.string.exec(data4, updateTuple22.toExec);

    var update23 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25}];
    var updateTuple23 = doc4.update(update23);
    data4 = cljs.ops.string.exec(data4, updateTuple23.toExec);

    var update24 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26}];
    var updateTuple24 = doc4.update(update24);
    data4 = cljs.ops.string.exec(data4, updateTuple24.toExec);

    var update25 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27},{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28}];
    var updateTuple25 = doc4.update(update25);
    data4 = cljs.ops.string.exec(data4, updateTuple25.toExec);

    var update26 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29}];
    var updateTuple26 = doc4.update(update26);
    data4 = cljs.ops.string.exec(data4, updateTuple26.toExec);

    var update27 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30}];
    var updateTuple27 = doc4.update(update27);
    data4 = cljs.ops.string.exec(data4, updateTuple27.toExec);

  });

  it("Site bd7b6770-5380-11e7-9cb7-4be7bca15d9e operations should be executed without errors", function() {
    var update1 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = cljs.ops.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = cljs.ops.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = cljs.ops.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = cljs.ops.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = cljs.ops.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = cljs.ops.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = cljs.ops.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = cljs.ops.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = cljs.ops.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = cljs.ops.string.exec(data5, updateTuple10.toExec);

    var update11 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11}];
    var updateTuple11 = doc5.update(update11);
    data5 = cljs.ops.string.exec(data5, updateTuple11.toExec);

    var update12 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12}];
    var updateTuple12 = doc5.update(update12);
    data5 = cljs.ops.string.exec(data5, updateTuple12.toExec);

    var update13 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13}];
    var updateTuple13 = doc5.update(update13);
    data5 = cljs.ops.string.exec(data5, updateTuple13.toExec);

    var update14 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14}];
    var updateTuple14 = doc5.update(update14);
    data5 = cljs.ops.string.exec(data5, updateTuple14.toExec);

    var update15 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15}];
    var updateTuple15 = doc5.update(update15);
    data5 = cljs.ops.string.exec(data5, updateTuple15.toExec);

    var update16 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16}];
    var updateTuple16 = doc5.update(update16);
    data5 = cljs.ops.string.exec(data5, updateTuple16.toExec);

    var update17 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17}];
    var updateTuple17 = doc5.update(update17);
    data5 = cljs.ops.string.exec(data5, updateTuple17.toExec);

    var update18 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18}];
    var updateTuple18 = doc5.update(update18);
    data5 = cljs.ops.string.exec(data5, updateTuple18.toExec);

    var commit1 = [{"type":1,"at":1,"value":"oo"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = cljs.ops.string.exec(data5, commitTuple1.toExec);

    var update19 = [{"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple19 = doc5.update(update19);
    data5 = cljs.ops.string.exec(data5, updateTuple19.toExec);

    var update20 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20}];
    var updateTuple20 = doc5.update(update20);
    data5 = cljs.ops.string.exec(data5, updateTuple20.toExec);

    var update21 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21}];
    var updateTuple21 = doc5.update(update21);
    data5 = cljs.ops.string.exec(data5, updateTuple21.toExec);

    var update22 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22}];
    var updateTuple22 = doc5.update(update22);
    data5 = cljs.ops.string.exec(data5, updateTuple22.toExec);

    var commit2 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = cljs.ops.string.exec(data5, commitTuple2.toExec);

    var update23 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23}];
    var updateTuple23 = doc5.update(update23);
    data5 = cljs.ops.string.exec(data5, updateTuple23.toExec);

    var update24 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24}];
    var updateTuple24 = doc5.update(update24);
    data5 = cljs.ops.string.exec(data5, updateTuple24.toExec);

    var update25 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25}];
    var updateTuple25 = doc5.update(update25);
    data5 = cljs.ops.string.exec(data5, updateTuple25.toExec);

    var commit3 = [{"type":1,"at":0,"value":"er"}];
    var commitTuple3 = doc5.commit(commit3);
    data5 = cljs.ops.string.exec(data5, commitTuple3.toExec);

    var update26 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26}];
    var updateTuple26 = doc5.update(update26);
    data5 = cljs.ops.string.exec(data5, updateTuple26.toExec);

    var update27 = [{"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27}];
    var updateTuple27 = doc5.update(update27);
    data5 = cljs.ops.string.exec(data5, updateTuple27.toExec);

    var update28 = [{"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28}];
    var updateTuple28 = doc5.update(update28);
    data5 = cljs.ops.string.exec(data5, updateTuple28.toExec);

    var update29 = [{"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29}];
    var updateTuple29 = doc5.update(update29);
    data5 = cljs.ops.string.exec(data5, updateTuple29.toExec);

    var update30 = [{"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30}];
    var updateTuple30 = doc5.update(update30);
    data5 = cljs.ops.string.exec(data5, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"tqw"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"ttw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llt"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"ey"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"ey"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"e"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tqw"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":12,"value":"tw"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":" W"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"rqt"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"dtr"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":4,"value":"twe"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":12,"value":"tw"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":6,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":4,"value":"twe"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":5,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"dtr"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":7,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":6,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":6,"value":"t"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"oo"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":7,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"e"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":1,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"ttw"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":8,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":6,"value":"e"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1},"invClusterSize":4},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":2,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":1,"value":"er"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"bd7b6770-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"bd7525e0-5380-11e7-9cb7-4be7bca15d9e","seqId":3,"context":{"vector":{"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"bd7721b0-5380-11e7-9cb7-4be7bca15d9e","seqId":9,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":8,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"bd78a850-5380-11e7-9cb7-4be7bca15d9e","seqId":4,"context":{"vector":{"bd7721b0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":9,"invCluster":{"1":1,"2":1,"5":1,"6":1,"8":1},"invClusterSize":5},"bd7525e0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"bd78a850-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"bd79b9c0-5380-11e7-9cb7-4be7bca15d9e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"bd7b6770-5380-11e7-9cb7-4be7bca15d9e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});