var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/rm/ins/ins/ins/ins/ins/ins/rm/ins/undo/ins/rm/undo/undo/rm/undo/rm/undo/rm/undo/rm/ins/rm/ins/undo/undo/undo/ins - 30-ops-59e4cdad-610a-4718-9935-833a197f432f", function() {
  var doc1 = new cljs.StringDocument("f9a5ee50-5380-11e7-a002-892737c72713", 0, null);
  var doc2 = new cljs.StringDocument("f9a7c310-5380-11e7-a002-892737c72713", 0, null);
  var doc3 = new cljs.StringDocument("f9a8fb90-5380-11e7-a002-892737c72713", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"8306ad41-c41b-4466-be74-fee4e974609a","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site f9a5ee50-5380-11e7-a002-892737c72713 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"lo "}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qrq"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit2 = [{"type":1,"at":6,"value":"qr"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":4},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"W"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit3 = [{"type":1,"at":2,"value":"l"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update8 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ter"},"execOrder":10},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var commit4 = [{"type":0,"at":3,"value":"ywe"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update10 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"ywe"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":13}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"otl"},"execOrder":14}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var commit5 = [{"type":0,"at":2,"value":"q"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update13 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"ter"},"execOrder":16},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":17}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var commit6 = [{"type":0,"at":1,"value":"t"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update15 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"ter"},"execOrder":19}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":20}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"te"},"execOrder":21}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qr"},"execOrder":22}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qr"},"execOrder":23}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var update21 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":7,"value":"otl"},"execOrder":24}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"ter"},"execOrder":25}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var update23 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"te"},"execOrder":26}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var update24 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"t"},"execOrder":27}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

    var commit7 = [{"type":0,"at":3,"value":"y"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update25 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"yt"},"execOrder":28}];
    var updateTuple25 = doc1.update(update25);
    data1 = cljs.ops.string.exec(data1, updateTuple25.toExec);

    var update26 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"t"},"execOrder":29},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":30}];
    var updateTuple26 = doc1.update(update26);
    data1 = cljs.ops.string.exec(data1, updateTuple26.toExec);

  });

  it("Site f9a7c310-5380-11e7-a002-892737c72713 operations should be executed without errors", function() {
    var update1 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":5,"value":"qrq"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update2 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qrq"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":4},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":5,"value":"t"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":6,"value":"qr"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update6 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"W"},"execOrder":7},{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commit4 = [{"type":0,"at":1,"value":"wr"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ter"},"execOrder":10},{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"ywe"},"execOrder":12}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commitTuple5 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update10 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commit6 = [{"type":0,"at":3,"value":"r"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update11 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"otl"},"execOrder":14},{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commit7 = [{"type":1,"at":2,"value":"ter"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update12 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"ter"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commitTuple8 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update14 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commitTuple9 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update15 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"ter"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var commit10 = [{"type":1,"at":1,"value":"te"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update16 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"te"},"execOrder":21}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qr"},"execOrder":22}];
    var updateTuple18 = doc2.update(update18);
    data2 = cljs.ops.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qr"},"execOrder":23}];
    var updateTuple19 = doc2.update(update19);
    data2 = cljs.ops.string.exec(data2, updateTuple19.toExec);

    var commitTuple11 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update20 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":7,"value":"otl"},"execOrder":24}];
    var updateTuple20 = doc2.update(update20);
    data2 = cljs.ops.string.exec(data2, updateTuple20.toExec);

    var commit12 = [{"type":1,"at":1,"value":"t"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update21 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"ter"},"execOrder":25},{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"te"},"execOrder":26}];
    var updateTuple21 = doc2.update(update21);
    data2 = cljs.ops.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"t"},"execOrder":27}];
    var updateTuple22 = doc2.update(update22);
    data2 = cljs.ops.string.exec(data2, updateTuple22.toExec);

    var commitTuple13 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update23 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"yt"},"execOrder":28},{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"t"},"execOrder":29}];
    var updateTuple23 = doc2.update(update23);
    data2 = cljs.ops.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":30}];
    var updateTuple24 = doc2.update(update24);
    data2 = cljs.ops.string.exec(data2, updateTuple24.toExec);

  });

  it("Site f9a8fb90-5380-11e7-a002-892737c72713 operations should be executed without errors", function() {
    var update1 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qrq"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var commitTuple2 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update3 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":3,"value":"W"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"W"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var commit4 = [{"type":0,"at":6,"value":"ter"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = cljs.ops.string.exec(data3, commitTuple4.toExec);

    var update9 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ter"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":11}];
    var updateTuple11 = doc3.update(update11);
    data3 = cljs.ops.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"ywe"},"execOrder":12}];
    var updateTuple12 = doc3.update(update12);
    data3 = cljs.ops.string.exec(data3, updateTuple12.toExec);

    var commit5 = [{"type":1,"at":7,"value":"otl"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = cljs.ops.string.exec(data3, commitTuple5.toExec);

    var update13 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":13}];
    var updateTuple13 = doc3.update(update13);
    data3 = cljs.ops.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"otl"},"execOrder":14}];
    var updateTuple14 = doc3.update(update14);
    data3 = cljs.ops.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":15}];
    var updateTuple15 = doc3.update(update15);
    data3 = cljs.ops.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"ter"},"execOrder":16}];
    var updateTuple16 = doc3.update(update16);
    data3 = cljs.ops.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":17}];
    var updateTuple17 = doc3.update(update17);
    data3 = cljs.ops.string.exec(data3, updateTuple17.toExec);

    var update18 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":18}];
    var updateTuple18 = doc3.update(update18);
    data3 = cljs.ops.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"ter"},"execOrder":19}];
    var updateTuple19 = doc3.update(update19);
    data3 = cljs.ops.string.exec(data3, updateTuple19.toExec);

    var update20 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":20}];
    var updateTuple20 = doc3.update(update20);
    data3 = cljs.ops.string.exec(data3, updateTuple20.toExec);

    var commit6 = [{"type":0,"at":4,"value":"qr"}];
    var commitTuple6 = doc3.commit(commit6);
    data3 = cljs.ops.string.exec(data3, commitTuple6.toExec);

    var update21 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"te"},"execOrder":21}];
    var updateTuple21 = doc3.update(update21);
    data3 = cljs.ops.string.exec(data3, updateTuple21.toExec);

    var commitTuple7 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple7.toExec);

    var update22 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qr"},"execOrder":22}];
    var updateTuple22 = doc3.update(update22);
    data3 = cljs.ops.string.exec(data3, updateTuple22.toExec);

    var commitTuple8 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple8.toExec);

    var update23 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qr"},"execOrder":23}];
    var updateTuple23 = doc3.update(update23);
    data3 = cljs.ops.string.exec(data3, updateTuple23.toExec);

    var commitTuple9 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple9.toExec);

    var update24 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":7,"value":"otl"},"execOrder":24}];
    var updateTuple24 = doc3.update(update24);
    data3 = cljs.ops.string.exec(data3, updateTuple24.toExec);

    var update25 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"ter"},"execOrder":25}];
    var updateTuple25 = doc3.update(update25);
    data3 = cljs.ops.string.exec(data3, updateTuple25.toExec);

    var update26 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"te"},"execOrder":26}];
    var updateTuple26 = doc3.update(update26);
    data3 = cljs.ops.string.exec(data3, updateTuple26.toExec);

    var commit10 = [{"type":0,"at":5,"value":"yt"}];
    var commitTuple10 = doc3.commit(commit10);
    data3 = cljs.ops.string.exec(data3, commitTuple10.toExec);

    var update27 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"t"},"execOrder":27}];
    var updateTuple27 = doc3.update(update27);
    data3 = cljs.ops.string.exec(data3, updateTuple27.toExec);

    var update28 = [{"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"yt"},"execOrder":28}];
    var updateTuple28 = doc3.update(update28);
    data3 = cljs.ops.string.exec(data3, updateTuple28.toExec);

    var update29 = [{"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"t"},"execOrder":29}];
    var updateTuple29 = doc3.update(update29);
    data3 = cljs.ops.string.exec(data3, updateTuple29.toExec);

    var update30 = [{"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":30}];
    var updateTuple30 = doc3.update(update30);
    data3 = cljs.ops.string.exec(data3, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qrq"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":1,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":2,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"W"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ter"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"ywe"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"otl"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"ter"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"ter"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"te"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qr"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":5,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qr"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":4,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":7,"value":"otl"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":3,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":2,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"ter"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"te"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"t"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"f9a8fb90-5380-11e7-a002-892737c72713","seqId":6,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":7,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"yt"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"f9a7c310-5380-11e7-a002-892737c72713","seqId":8,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":0,"at":1,"value":"t"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"f9a5ee50-5380-11e7-a002-892737c72713","seqId":7,"context":{"vector":{"f9a5ee50-5380-11e7-a002-892737c72713":{"seqId":6,"invCluster":{},"invClusterSize":0},"f9a7c310-5380-11e7-a002-892737c72713":{"seqId":8,"invCluster":{"4":1,"5":1,"6":1,"7":1},"invClusterSize":4},"f9a8fb90-5380-11e7-a002-892737c72713":{"seqId":5,"invCluster":{"1":1,"3":1,"4":1,"5":1},"invClusterSize":4}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"y"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});