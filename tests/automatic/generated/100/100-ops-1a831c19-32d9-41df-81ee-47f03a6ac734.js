var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/rm/ins/undo/ins/rm/undo/rm/ins/ins/ins/undo/redo/ins/undo/rm/ins/undo/redo/undo/ins/undo/undo/ins/rm/ins/undo/rm/undo/undo/undo/redo/ins/undo/ins/ins/ins/undo/redo/rm/undo/undo/undo/rm/undo/rm/undo/ins/ins/undo/rm/rm/undo/rm/rm/rm/rm/rm/ins/undo/ins/rm/ins/undo/ins/rm/ins/rm/ins/rm/rm/ins/ins/rm/undo/ins/ins/rm/rm/ins/ins/rm/undo/undo/redo/undo/rm/ins/ins/undo/redo/rm/rm/ins/undo/undo/rm/ins/undo/ins - 100-ops-1a831c19-32d9-41df-81ee-47f03a6ac734", function() {
  var doc1 = new cljs.StringDocument("59ad9ae0-5378-11e7-bad4-417112e9572d", 0, null);
  var doc2 = new cljs.StringDocument("59af4890-5378-11e7-bad4-417112e9572d", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"175896c8-65a1-43b7-b684-d105f4792dcf","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 59ad9ae0-5378-11e7-bad4-417112e9572d operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"yw"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":1},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yw"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":3,"value":"ely"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"qy"},"execOrder":3},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ely"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":6,"value":"t"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":8}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"wlo"},"execOrder":9},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"t"},"execOrder":10}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":" l"},"execOrder":11}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":12}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":13}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple4 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update10 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":14}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"w"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var commit5 = [{"type":0,"at":0,"value":"yrw"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update13 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eyy"},"execOrder":17},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yrw"},"execOrder":18}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var commit6 = [{"type":1,"at":4,"value":"yy"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update14 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"eyy"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yy"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var commitTuple7 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update16 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rtq"},"execOrder":21}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yy"},"execOrder":22}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rtq"},"execOrder":23},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":24}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":25}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":26}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var commit8 = [{"type":1,"at":0,"value":"q"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update21 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":27},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":28}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var commit9 = [{"type":0,"at":0,"value":"qyt"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var commit10 = [{"type":0,"at":3,"value":"tq"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var update22 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":29},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qyt"},"execOrder":30}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var update23 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"tq"},"execOrder":31}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var commit11 = [{"type":0,"at":6,"value":"q"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = cljs.ops.string.exec(data1, commitTuple11.toExec);

    var update24 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tq"},"execOrder":32}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

    var update25 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"q"},"execOrder":33}];
    var updateTuple25 = doc1.update(update25);
    data1 = cljs.ops.string.exec(data1, updateTuple25.toExec);

    var commitTuple12 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple12.toExec);

    var update26 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"qy"},"execOrder":34}];
    var updateTuple26 = doc1.update(update26);
    data1 = cljs.ops.string.exec(data1, updateTuple26.toExec);

    var commitTuple13 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple13.toExec);

    var update27 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"q"},"execOrder":35}];
    var updateTuple27 = doc1.update(update27);
    data1 = cljs.ops.string.exec(data1, updateTuple27.toExec);

    var commit14 = [{"type":0,"at":0,"value":"tr"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = cljs.ops.string.exec(data1, commitTuple14.toExec);

    var update28 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":1},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"q"},"execOrder":36}];
    var updateTuple28 = doc1.update(update28);
    data1 = cljs.ops.string.exec(data1, updateTuple28.toExec);

    var update29 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"tr"},"execOrder":37}];
    var updateTuple29 = doc1.update(update29);
    data1 = cljs.ops.string.exec(data1, updateTuple29.toExec);

    var commitTuple15 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple15.toExec);

    var update30 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":38}];
    var updateTuple30 = doc1.update(update30);
    data1 = cljs.ops.string.exec(data1, updateTuple30.toExec);

    var update31 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"tr"},"execOrder":39}];
    var updateTuple31 = doc1.update(update31);
    data1 = cljs.ops.string.exec(data1, updateTuple31.toExec);

    var commit16 = [{"type":1,"at":0,"value":"w"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = cljs.ops.string.exec(data1, commitTuple16.toExec);

    var update32 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":40}];
    var updateTuple32 = doc1.update(update32);
    data1 = cljs.ops.string.exec(data1, updateTuple32.toExec);

    var update33 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":41}];
    var updateTuple33 = doc1.update(update33);
    data1 = cljs.ops.string.exec(data1, updateTuple33.toExec);

    var commit17 = [{"type":0,"at":0,"value":"e"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = cljs.ops.string.exec(data1, commitTuple17.toExec);

    var update34 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":42}];
    var updateTuple34 = doc1.update(update34);
    data1 = cljs.ops.string.exec(data1, updateTuple34.toExec);

    var commitTuple18 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple18.toExec);

    var update35 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":43}];
    var updateTuple35 = doc1.update(update35);
    data1 = cljs.ops.string.exec(data1, updateTuple35.toExec);

    var commitTuple19 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple19.toExec);

    var update36 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"e"},"execOrder":44}];
    var updateTuple36 = doc1.update(update36);
    data1 = cljs.ops.string.exec(data1, updateTuple36.toExec);

    var commitTuple20 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple20.toExec);

    var update37 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":1},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":0,"value":"e"},"execOrder":45}];
    var updateTuple37 = doc1.update(update37);
    data1 = cljs.ops.string.exec(data1, updateTuple37.toExec);

    var commit21 = [{"type":0,"at":0,"value":"qr"}];
    var commitTuple21 = doc1.commit(commit21);
    data1 = cljs.ops.string.exec(data1, commitTuple21.toExec);

    var update38 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":2},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":3,"load":{"type":1,"at":0,"value":"e"},"execOrder":46}];
    var updateTuple38 = doc1.update(update38);
    data1 = cljs.ops.string.exec(data1, updateTuple38.toExec);

    var update39 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qr"},"execOrder":47}];
    var updateTuple39 = doc1.update(update39);
    data1 = cljs.ops.string.exec(data1, updateTuple39.toExec);

    var commitTuple22 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple22.toExec);

    var update40 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":48}];
    var updateTuple40 = doc1.update(update40);
    data1 = cljs.ops.string.exec(data1, updateTuple40.toExec);

    var commitTuple23 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple23.toExec);

    var update41 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"qr"},"execOrder":49}];
    var updateTuple41 = doc1.update(update41);
    data1 = cljs.ops.string.exec(data1, updateTuple41.toExec);

    var commit24 = [{"type":0,"at":1,"value":"etq"}];
    var commitTuple24 = doc1.commit(commit24);
    data1 = cljs.ops.string.exec(data1, commitTuple24.toExec);

    var update42 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":50}];
    var updateTuple42 = doc1.update(update42);
    data1 = cljs.ops.string.exec(data1, updateTuple42.toExec);

    var update43 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"etq"},"execOrder":51}];
    var updateTuple43 = doc1.update(update43);
    data1 = cljs.ops.string.exec(data1, updateTuple43.toExec);

    var update44 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3,"13":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"r"},"execOrder":52}];
    var updateTuple44 = doc1.update(update44);
    data1 = cljs.ops.string.exec(data1, updateTuple44.toExec);

    var commit25 = [{"type":1,"at":0,"value":"we"}];
    var commitTuple25 = doc1.commit(commit25);
    data1 = cljs.ops.string.exec(data1, commitTuple25.toExec);

    var update45 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"erq"},"execOrder":53},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":54}];
    var updateTuple45 = doc1.update(update45);
    data1 = cljs.ops.string.exec(data1, updateTuple45.toExec);

    var commit26 = [{"type":0,"at":0,"value":"t"}];
    var commitTuple26 = doc1.commit(commit26);
    data1 = cljs.ops.string.exec(data1, commitTuple26.toExec);

    var update46 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":55}];
    var updateTuple46 = doc1.update(update46);
    data1 = cljs.ops.string.exec(data1, updateTuple46.toExec);

    var update47 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":56}];
    var updateTuple47 = doc1.update(update47);
    data1 = cljs.ops.string.exec(data1, updateTuple47.toExec);

    var commitTuple27 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple27.toExec);

    var commit28 = [{"type":1,"at":0,"value":"t"}];
    var commitTuple28 = doc1.commit(commit28);
    data1 = cljs.ops.string.exec(data1, commitTuple28.toExec);

    var update48 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":26,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"er"},"execOrder":57},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"t"},"execOrder":58}];
    var updateTuple48 = doc1.update(update48);
    data1 = cljs.ops.string.exec(data1, updateTuple48.toExec);

    var commitTuple29 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple29.toExec);

    var update49 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":59}];
    var updateTuple49 = doc1.update(update49);
    data1 = cljs.ops.string.exec(data1, updateTuple49.toExec);

    var commitTuple30 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple30.toExec);

    var update50 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"t"},"execOrder":60}];
    var updateTuple50 = doc1.update(update50);
    data1 = cljs.ops.string.exec(data1, updateTuple50.toExec);

    var update51 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"we"},"execOrder":61}];
    var updateTuple51 = doc1.update(update51);
    data1 = cljs.ops.string.exec(data1, updateTuple51.toExec);

    var commitTuple31 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple31.toExec);

    var update52 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":27,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":26,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"et"},"execOrder":62}];
    var updateTuple52 = doc1.update(update52);
    data1 = cljs.ops.string.exec(data1, updateTuple52.toExec);

    var commitTuple32 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple32.toExec);

    var update53 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"etq"},"execOrder":63}];
    var updateTuple53 = doc1.update(update53);
    data1 = cljs.ops.string.exec(data1, updateTuple53.toExec);

    var commit33 = [{"type":0,"at":4,"value":"tye"}];
    var commitTuple33 = doc1.commit(commit33);
    data1 = cljs.ops.string.exec(data1, commitTuple33.toExec);

    var update54 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"etq"},"execOrder":64}];
    var updateTuple54 = doc1.update(update54);
    data1 = cljs.ops.string.exec(data1, updateTuple54.toExec);

    var update55 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"tye"},"execOrder":65}];
    var updateTuple55 = doc1.update(update55);
    data1 = cljs.ops.string.exec(data1, updateTuple55.toExec);

    var commitTuple34 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple34.toExec);

    var update56 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":66},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"tye"},"execOrder":67}];
    var updateTuple56 = doc1.update(update56);
    data1 = cljs.ops.string.exec(data1, updateTuple56.toExec);

    var commit35 = [{"type":0,"at":5,"value":"tty"}];
    var commitTuple35 = doc1.commit(commit35);
    data1 = cljs.ops.string.exec(data1, commitTuple35.toExec);

    var commit36 = [{"type":0,"at":1,"value":"twt"}];
    var commitTuple36 = doc1.commit(commit36);
    data1 = cljs.ops.string.exec(data1, commitTuple36.toExec);

    var update57 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"et"},"execOrder":68},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"tty"},"execOrder":69}];
    var updateTuple57 = doc1.update(update57);
    data1 = cljs.ops.string.exec(data1, updateTuple57.toExec);

    var commit37 = [{"type":0,"at":9,"value":"er"}];
    var commitTuple37 = doc1.commit(commit37);
    data1 = cljs.ops.string.exec(data1, commitTuple37.toExec);

    var update58 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"twt"},"execOrder":70}];
    var updateTuple58 = doc1.update(update58);
    data1 = cljs.ops.string.exec(data1, updateTuple58.toExec);

    var update59 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"er"},"execOrder":71}];
    var updateTuple59 = doc1.update(update59);
    data1 = cljs.ops.string.exec(data1, updateTuple59.toExec);

    var update60 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"et"},"execOrder":72}];
    var updateTuple60 = doc1.update(update60);
    data1 = cljs.ops.string.exec(data1, updateTuple60.toExec);

    var update61 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yw"},"execOrder":73}];
    var updateTuple61 = doc1.update(update61);
    data1 = cljs.ops.string.exec(data1, updateTuple61.toExec);

    var commitTuple38 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple38.toExec);

    var update62 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":1},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yw"},"execOrder":74}];
    var updateTuple62 = doc1.update(update62);
    data1 = cljs.ops.string.exec(data1, updateTuple62.toExec);

    var update63 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"er"},"execOrder":75}];
    var updateTuple63 = doc1.update(update63);
    data1 = cljs.ops.string.exec(data1, updateTuple63.toExec);

    var commitTuple39 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple39.toExec);

    var update64 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":2},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":3,"load":{"type":1,"at":4,"value":"yw"},"execOrder":76}];
    var updateTuple64 = doc1.update(update64);
    data1 = cljs.ops.string.exec(data1, updateTuple64.toExec);

    var update65 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":9,"value":"er"},"execOrder":77}];
    var updateTuple65 = doc1.update(update65);
    data1 = cljs.ops.string.exec(data1, updateTuple65.toExec);

    var update66 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":30,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qe"},"execOrder":78}];
    var updateTuple66 = doc1.update(update66);
    data1 = cljs.ops.string.exec(data1, updateTuple66.toExec);

    var commit40 = [{"type":1,"at":5,"value":"tt"}];
    var commitTuple40 = doc1.commit(commit40);
    data1 = cljs.ops.string.exec(data1, commitTuple40.toExec);

    var update67 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":31,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"r"},"execOrder":79}];
    var updateTuple67 = doc1.update(update67);
    data1 = cljs.ops.string.exec(data1, updateTuple67.toExec);

    var commitTuple41 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple41.toExec);

    var update68 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":80}];
    var updateTuple68 = doc1.update(update68);
    data1 = cljs.ops.string.exec(data1, updateTuple68.toExec);

    var commitTuple42 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple42.toExec);

    var update69 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"tt"},"execOrder":81}];
    var updateTuple69 = doc1.update(update69);
    data1 = cljs.ops.string.exec(data1, updateTuple69.toExec);

    var update70 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":3,"load":{"type":1,"at":9,"value":"er"},"execOrder":82}];
    var updateTuple70 = doc1.update(update70);
    data1 = cljs.ops.string.exec(data1, updateTuple70.toExec);

    var update71 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":31,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":83}];
    var updateTuple71 = doc1.update(update71);
    data1 = cljs.ops.string.exec(data1, updateTuple71.toExec);

    var commitTuple43 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple43.toExec);

    var update72 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"e"},"execOrder":84}];
    var updateTuple72 = doc1.update(update72);
    data1 = cljs.ops.string.exec(data1, updateTuple72.toExec);

    var commit44 = [{"type":1,"at":2,"value":"tt"}];
    var commitTuple44 = doc1.commit(commit44);
    data1 = cljs.ops.string.exec(data1, commitTuple44.toExec);

    var update73 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"twt"},"execOrder":85}];
    var updateTuple73 = doc1.update(update73);
    data1 = cljs.ops.string.exec(data1, updateTuple73.toExec);

    var commitTuple45 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple45.toExec);

    var update74 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tt"},"execOrder":86}];
    var updateTuple74 = doc1.update(update74);
    data1 = cljs.ops.string.exec(data1, updateTuple74.toExec);

    var commit46 = [{"type":1,"at":0,"value":"w"}];
    var commitTuple46 = doc1.commit(commit46);
    data1 = cljs.ops.string.exec(data1, commitTuple46.toExec);

    var update75 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"tt"},"execOrder":87}];
    var updateTuple75 = doc1.update(update75);
    data1 = cljs.ops.string.exec(data1, updateTuple75.toExec);

    var update76 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":88}];
    var updateTuple76 = doc1.update(update76);
    data1 = cljs.ops.string.exec(data1, updateTuple76.toExec);

    var commitTuple47 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple47.toExec);

    var update77 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":3,"value":"e"},"execOrder":89}];
    var updateTuple77 = doc1.update(update77);
    data1 = cljs.ops.string.exec(data1, updateTuple77.toExec);

    var update78 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":90}];
    var updateTuple78 = doc1.update(update78);
    data1 = cljs.ops.string.exec(data1, updateTuple78.toExec);

    var commit48 = [{"type":0,"at":3,"value":"r"}];
    var commitTuple48 = doc1.commit(commit48);
    data1 = cljs.ops.string.exec(data1, commitTuple48.toExec);

    var update79 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":33,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"tt"},"execOrder":91}];
    var updateTuple79 = doc1.update(update79);
    data1 = cljs.ops.string.exec(data1, updateTuple79.toExec);

    var update80 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":92}];
    var updateTuple80 = doc1.update(update80);
    data1 = cljs.ops.string.exec(data1, updateTuple80.toExec);

    var update81 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":33,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":93},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wqe"},"execOrder":94}];
    var updateTuple81 = doc1.update(update81);
    data1 = cljs.ops.string.exec(data1, updateTuple81.toExec);

    var update82 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wqe"},"execOrder":95}];
    var updateTuple82 = doc1.update(update82);
    data1 = cljs.ops.string.exec(data1, updateTuple82.toExec);

    var update83 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":96}];
    var updateTuple83 = doc1.update(update83);
    data1 = cljs.ops.string.exec(data1, updateTuple83.toExec);

    var update84 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":36,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":97}];
    var updateTuple84 = doc1.update(update84);
    data1 = cljs.ops.string.exec(data1, updateTuple84.toExec);

    var update85 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":36,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yq"},"execOrder":98},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"yq"},"execOrder":99}];
    var updateTuple85 = doc1.update(update85);
    data1 = cljs.ops.string.exec(data1, updateTuple85.toExec);

    var update86 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":38,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1,"37":1},"invClusterSize":11},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eqw"},"execOrder":100}];
    var updateTuple86 = doc1.update(update86);
    data1 = cljs.ops.string.exec(data1, updateTuple86.toExec);

  });

  it("Site 59af4890-5378-11e7-bad4-417112e9572d operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"qy"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commitTuple2 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yw"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"qy"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commit3 = [{"type":1,"at":8,"value":"Wor"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var commit4 = [{"type":1,"at":8,"value":"ld"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update4 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ely"},"execOrder":4},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple5 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update5 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commit6 = [{"type":1,"at":1,"value":"wlo"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update7 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit7 = [{"type":1,"at":3,"value":"t"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update8 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"wlo"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var commit8 = [{"type":1,"at":1,"value":" l"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update9 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"t"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit9 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update10 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":" l"},"execOrder":11}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commit10 = [{"type":1,"at":0,"value":"d"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update11 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":12}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commit11 = [{"type":0,"at":0,"value":"w"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update12 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":13}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":14}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commitTuple12 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update14 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":15}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commit13 = [{"type":0,"at":0,"value":"eyy"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update15 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"w"},"execOrder":16}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eyy"},"execOrder":17}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var commit14 = [{"type":1,"at":0,"value":"eyy"}];
    var commitTuple14 = doc2.commit(commit14);
    data2 = cljs.ops.string.exec(data2, commitTuple14.toExec);

    var update17 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yrw"},"execOrder":18},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"eyy"},"execOrder":19}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

    var commit15 = [{"type":0,"at":0,"value":"rtq"}];
    var commitTuple15 = doc2.commit(commit15);
    data2 = cljs.ops.string.exec(data2, commitTuple15.toExec);

    var update18 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yy"},"execOrder":20},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rtq"},"execOrder":21}];
    var updateTuple18 = doc2.update(update18);
    data2 = cljs.ops.string.exec(data2, updateTuple18.toExec);

    var commitTuple16 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple16.toExec);

    var update19 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yy"},"execOrder":22}];
    var updateTuple19 = doc2.update(update19);
    data2 = cljs.ops.string.exec(data2, updateTuple19.toExec);

    var commit17 = [{"type":0,"at":0,"value":"t"}];
    var commitTuple17 = doc2.commit(commit17);
    data2 = cljs.ops.string.exec(data2, commitTuple17.toExec);

    var update20 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rtq"},"execOrder":23}];
    var updateTuple20 = doc2.update(update20);
    data2 = cljs.ops.string.exec(data2, updateTuple20.toExec);

    var commit18 = [{"type":1,"at":0,"value":"t"}];
    var commitTuple18 = doc2.commit(commit18);
    data2 = cljs.ops.string.exec(data2, commitTuple18.toExec);

    var update21 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":24}];
    var updateTuple21 = doc2.update(update21);
    data2 = cljs.ops.string.exec(data2, updateTuple21.toExec);

    var commit19 = [{"type":0,"at":0,"value":"q"}];
    var commitTuple19 = doc2.commit(commit19);
    data2 = cljs.ops.string.exec(data2, commitTuple19.toExec);

    var update22 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":25}];
    var updateTuple22 = doc2.update(update22);
    data2 = cljs.ops.string.exec(data2, updateTuple22.toExec);

    var commit20 = [{"type":1,"at":0,"value":"q"}];
    var commitTuple20 = doc2.commit(commit20);
    data2 = cljs.ops.string.exec(data2, commitTuple20.toExec);

    var update23 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":26}];
    var updateTuple23 = doc2.update(update23);
    data2 = cljs.ops.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":27}];
    var updateTuple24 = doc2.update(update24);
    data2 = cljs.ops.string.exec(data2, updateTuple24.toExec);

    var commit21 = [{"type":0,"at":0,"value":"q"}];
    var commitTuple21 = doc2.commit(commit21);
    data2 = cljs.ops.string.exec(data2, commitTuple21.toExec);

    var update25 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":28}];
    var updateTuple25 = doc2.update(update25);
    data2 = cljs.ops.string.exec(data2, updateTuple25.toExec);

    var update26 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":29}];
    var updateTuple26 = doc2.update(update26);
    data2 = cljs.ops.string.exec(data2, updateTuple26.toExec);

    var update27 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qyt"},"execOrder":30}];
    var updateTuple27 = doc2.update(update27);
    data2 = cljs.ops.string.exec(data2, updateTuple27.toExec);

    var commit22 = [{"type":1,"at":2,"value":"tq"}];
    var commitTuple22 = doc2.commit(commit22);
    data2 = cljs.ops.string.exec(data2, commitTuple22.toExec);

    var update28 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"tq"},"execOrder":31},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tq"},"execOrder":32}];
    var updateTuple28 = doc2.update(update28);
    data2 = cljs.ops.string.exec(data2, updateTuple28.toExec);

    var commit23 = [{"type":1,"at":0,"value":"qy"}];
    var commitTuple23 = doc2.commit(commit23);
    data2 = cljs.ops.string.exec(data2, commitTuple23.toExec);

    var update29 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"q"},"execOrder":33},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"qy"},"execOrder":34}];
    var updateTuple29 = doc2.update(update29);
    data2 = cljs.ops.string.exec(data2, updateTuple29.toExec);

    var update30 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"q"},"execOrder":35},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":1},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"q"},"execOrder":36}];
    var updateTuple30 = doc2.update(update30);
    data2 = cljs.ops.string.exec(data2, updateTuple30.toExec);

    var commit24 = [{"type":0,"at":0,"value":"w"}];
    var commitTuple24 = doc2.commit(commit24);
    data2 = cljs.ops.string.exec(data2, commitTuple24.toExec);

    var update31 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"tr"},"execOrder":37},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":38}];
    var updateTuple31 = doc2.update(update31);
    data2 = cljs.ops.string.exec(data2, updateTuple31.toExec);

    var commit25 = [{"type":0,"at":1,"value":"qy"}];
    var commitTuple25 = doc2.commit(commit25);
    data2 = cljs.ops.string.exec(data2, commitTuple25.toExec);

    var update32 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"tr"},"execOrder":39},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":40}];
    var updateTuple32 = doc2.update(update32);
    data2 = cljs.ops.string.exec(data2, updateTuple32.toExec);

    var commit26 = [{"type":1,"at":0,"value":"w"}];
    var commitTuple26 = doc2.commit(commit26);
    data2 = cljs.ops.string.exec(data2, commitTuple26.toExec);

    var update33 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":41}];
    var updateTuple33 = doc2.update(update33);
    data2 = cljs.ops.string.exec(data2, updateTuple33.toExec);

    var update34 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":42}];
    var updateTuple34 = doc2.update(update34);
    data2 = cljs.ops.string.exec(data2, updateTuple34.toExec);

    var update35 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":43}];
    var updateTuple35 = doc2.update(update35);
    data2 = cljs.ops.string.exec(data2, updateTuple35.toExec);

    var update36 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"e"},"execOrder":44}];
    var updateTuple36 = doc2.update(update36);
    data2 = cljs.ops.string.exec(data2, updateTuple36.toExec);

    var update37 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":1},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":0,"value":"e"},"execOrder":45}];
    var updateTuple37 = doc2.update(update37);
    data2 = cljs.ops.string.exec(data2, updateTuple37.toExec);

    var commitTuple27 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple27.toExec);

    var update38 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":2},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":3,"load":{"type":1,"at":0,"value":"e"},"execOrder":46},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qr"},"execOrder":47}];
    var updateTuple38 = doc2.update(update38);
    data2 = cljs.ops.string.exec(data2, updateTuple38.toExec);

    var update39 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":48}];
    var updateTuple39 = doc2.update(update39);
    data2 = cljs.ops.string.exec(data2, updateTuple39.toExec);

    var update40 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"qr"},"execOrder":49}];
    var updateTuple40 = doc2.update(update40);
    data2 = cljs.ops.string.exec(data2, updateTuple40.toExec);

    var commit28 = [{"type":0,"at":0,"value":"r"}];
    var commitTuple28 = doc2.commit(commit28);
    data2 = cljs.ops.string.exec(data2, commitTuple28.toExec);

    var update41 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":50},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"etq"},"execOrder":51}];
    var updateTuple41 = doc2.update(update41);
    data2 = cljs.ops.string.exec(data2, updateTuple41.toExec);

    var commit29 = [{"type":0,"at":3,"value":"erq"}];
    var commitTuple29 = doc2.commit(commit29);
    data2 = cljs.ops.string.exec(data2, commitTuple29.toExec);

    var update42 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3,"13":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"r"},"execOrder":52}];
    var updateTuple42 = doc2.update(update42);
    data2 = cljs.ops.string.exec(data2, updateTuple42.toExec);

    var commit30 = [{"type":1,"at":6,"value":"qr"}];
    var commitTuple30 = doc2.commit(commit30);
    data2 = cljs.ops.string.exec(data2, commitTuple30.toExec);

    var update43 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"erq"},"execOrder":53}];
    var updateTuple43 = doc2.update(update43);
    data2 = cljs.ops.string.exec(data2, updateTuple43.toExec);

    var update44 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":54}];
    var updateTuple44 = doc2.update(update44);
    data2 = cljs.ops.string.exec(data2, updateTuple44.toExec);

    var commit31 = [{"type":1,"at":3,"value":"er"}];
    var commitTuple31 = doc2.commit(commit31);
    data2 = cljs.ops.string.exec(data2, commitTuple31.toExec);

    var update45 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":55}];
    var updateTuple45 = doc2.update(update45);
    data2 = cljs.ops.string.exec(data2, updateTuple45.toExec);

    var update46 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":56},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":26,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"er"},"execOrder":57}];
    var updateTuple46 = doc2.update(update46);
    data2 = cljs.ops.string.exec(data2, updateTuple46.toExec);

    var update47 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"t"},"execOrder":58}];
    var updateTuple47 = doc2.update(update47);
    data2 = cljs.ops.string.exec(data2, updateTuple47.toExec);

    var update48 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":59}];
    var updateTuple48 = doc2.update(update48);
    data2 = cljs.ops.string.exec(data2, updateTuple48.toExec);

    var commit32 = [{"type":0,"at":1,"value":"et"}];
    var commitTuple32 = doc2.commit(commit32);
    data2 = cljs.ops.string.exec(data2, commitTuple32.toExec);

    var update49 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"t"},"execOrder":60},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"we"},"execOrder":61}];
    var updateTuple49 = doc2.update(update49);
    data2 = cljs.ops.string.exec(data2, updateTuple49.toExec);

    var update50 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":27,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":26,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"et"},"execOrder":62}];
    var updateTuple50 = doc2.update(update50);
    data2 = cljs.ops.string.exec(data2, updateTuple50.toExec);

    var update51 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"etq"},"execOrder":63}];
    var updateTuple51 = doc2.update(update51);
    data2 = cljs.ops.string.exec(data2, updateTuple51.toExec);

    var update52 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"etq"},"execOrder":64}];
    var updateTuple52 = doc2.update(update52);
    data2 = cljs.ops.string.exec(data2, updateTuple52.toExec);

    var commit33 = [{"type":0,"at":4,"value":"yw"}];
    var commitTuple33 = doc2.commit(commit33);
    data2 = cljs.ops.string.exec(data2, commitTuple33.toExec);

    var update53 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"tye"},"execOrder":65}];
    var updateTuple53 = doc2.update(update53);
    data2 = cljs.ops.string.exec(data2, updateTuple53.toExec);

    var update54 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":66}];
    var updateTuple54 = doc2.update(update54);
    data2 = cljs.ops.string.exec(data2, updateTuple54.toExec);

    var commit34 = [{"type":1,"at":1,"value":"et"}];
    var commitTuple34 = doc2.commit(commit34);
    data2 = cljs.ops.string.exec(data2, commitTuple34.toExec);

    var update55 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"tye"},"execOrder":67},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"et"},"execOrder":68}];
    var updateTuple55 = doc2.update(update55);
    data2 = cljs.ops.string.exec(data2, updateTuple55.toExec);

    var update56 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"tty"},"execOrder":69},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"twt"},"execOrder":70}];
    var updateTuple56 = doc2.update(update56);
    data2 = cljs.ops.string.exec(data2, updateTuple56.toExec);

    var commitTuple35 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple35.toExec);

    var commitTuple36 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple36.toExec);

    var update57 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"er"},"execOrder":71},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"et"},"execOrder":72}];
    var updateTuple57 = doc2.update(update57);
    data2 = cljs.ops.string.exec(data2, updateTuple57.toExec);

    var commitTuple37 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple37.toExec);

    var update58 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yw"},"execOrder":73}];
    var updateTuple58 = doc2.update(update58);
    data2 = cljs.ops.string.exec(data2, updateTuple58.toExec);

    var update59 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":1},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yw"},"execOrder":74}];
    var updateTuple59 = doc2.update(update59);
    data2 = cljs.ops.string.exec(data2, updateTuple59.toExec);

    var commitTuple38 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple38.toExec);

    var update60 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"er"},"execOrder":75}];
    var updateTuple60 = doc2.update(update60);
    data2 = cljs.ops.string.exec(data2, updateTuple60.toExec);

    var update61 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":2},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":3,"load":{"type":1,"at":4,"value":"yw"},"execOrder":76}];
    var updateTuple61 = doc2.update(update61);
    data2 = cljs.ops.string.exec(data2, updateTuple61.toExec);

    var commit39 = [{"type":1,"at":6,"value":"qe"}];
    var commitTuple39 = doc2.commit(commit39);
    data2 = cljs.ops.string.exec(data2, commitTuple39.toExec);

    var update62 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":9,"value":"er"},"execOrder":77}];
    var updateTuple62 = doc2.update(update62);
    data2 = cljs.ops.string.exec(data2, updateTuple62.toExec);

    var commit40 = [{"type":0,"at":9,"value":"r"}];
    var commitTuple40 = doc2.commit(commit40);
    data2 = cljs.ops.string.exec(data2, commitTuple40.toExec);

    var update63 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":30,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qe"},"execOrder":78}];
    var updateTuple63 = doc2.update(update63);
    data2 = cljs.ops.string.exec(data2, updateTuple63.toExec);

    var update64 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":31,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"r"},"execOrder":79}];
    var updateTuple64 = doc2.update(update64);
    data2 = cljs.ops.string.exec(data2, updateTuple64.toExec);

    var update65 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":80}];
    var updateTuple65 = doc2.update(update65);
    data2 = cljs.ops.string.exec(data2, updateTuple65.toExec);

    var commit41 = [{"type":0,"at":3,"value":"e"}];
    var commitTuple41 = doc2.commit(commit41);
    data2 = cljs.ops.string.exec(data2, commitTuple41.toExec);

    var update66 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"tt"},"execOrder":81},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":3,"load":{"type":1,"at":9,"value":"er"},"execOrder":82}];
    var updateTuple66 = doc2.update(update66);
    data2 = cljs.ops.string.exec(data2, updateTuple66.toExec);

    var commitTuple42 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple42.toExec);

    var update67 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":31,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":83}];
    var updateTuple67 = doc2.update(update67);
    data2 = cljs.ops.string.exec(data2, updateTuple67.toExec);

    var update68 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"e"},"execOrder":84}];
    var updateTuple68 = doc2.update(update68);
    data2 = cljs.ops.string.exec(data2, updateTuple68.toExec);

    var update69 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"twt"},"execOrder":85},{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tt"},"execOrder":86}];
    var updateTuple69 = doc2.update(update69);
    data2 = cljs.ops.string.exec(data2, updateTuple69.toExec);

    var commitTuple43 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple43.toExec);

    var update70 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"tt"},"execOrder":87}];
    var updateTuple70 = doc2.update(update70);
    data2 = cljs.ops.string.exec(data2, updateTuple70.toExec);

    var update71 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":88},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":3,"value":"e"},"execOrder":89}];
    var updateTuple71 = doc2.update(update71);
    data2 = cljs.ops.string.exec(data2, updateTuple71.toExec);

    var commit44 = [{"type":1,"at":1,"value":"tt"}];
    var commitTuple44 = doc2.commit(commit44);
    data2 = cljs.ops.string.exec(data2, commitTuple44.toExec);

    var update72 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":90},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":33,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"tt"},"execOrder":91}];
    var updateTuple72 = doc2.update(update72);
    data2 = cljs.ops.string.exec(data2, updateTuple72.toExec);

    var commit45 = [{"type":1,"at":0,"value":"w"}];
    var commitTuple45 = doc2.commit(commit45);
    data2 = cljs.ops.string.exec(data2, commitTuple45.toExec);

    var commit46 = [{"type":0,"at":1,"value":"wqe"}];
    var commitTuple46 = doc2.commit(commit46);
    data2 = cljs.ops.string.exec(data2, commitTuple46.toExec);

    var update73 = [{"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":92},{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":33,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":93}];
    var updateTuple73 = doc2.update(update73);
    data2 = cljs.ops.string.exec(data2, updateTuple73.toExec);

    var commitTuple47 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple47.toExec);

    var update74 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wqe"},"execOrder":94}];
    var updateTuple74 = doc2.update(update74);
    data2 = cljs.ops.string.exec(data2, updateTuple74.toExec);

    var commitTuple48 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple48.toExec);

    var update75 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wqe"},"execOrder":95}];
    var updateTuple75 = doc2.update(update75);
    data2 = cljs.ops.string.exec(data2, updateTuple75.toExec);

    var commit49 = [{"type":1,"at":0,"value":"we"}];
    var commitTuple49 = doc2.commit(commit49);
    data2 = cljs.ops.string.exec(data2, commitTuple49.toExec);

    var update76 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":96}];
    var updateTuple76 = doc2.update(update76);
    data2 = cljs.ops.string.exec(data2, updateTuple76.toExec);

    var commit50 = [{"type":0,"at":0,"value":"yq"}];
    var commitTuple50 = doc2.commit(commit50);
    data2 = cljs.ops.string.exec(data2, commitTuple50.toExec);

    var update77 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":36,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":97}];
    var updateTuple77 = doc2.update(update77);
    data2 = cljs.ops.string.exec(data2, updateTuple77.toExec);

    var commitTuple51 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple51.toExec);

    var update78 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":36,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yq"},"execOrder":98}];
    var updateTuple78 = doc2.update(update78);
    data2 = cljs.ops.string.exec(data2, updateTuple78.toExec);

    var commit52 = [{"type":0,"at":0,"value":"eqw"}];
    var commitTuple52 = doc2.commit(commit52);
    data2 = cljs.ops.string.exec(data2, commitTuple52.toExec);

    var update79 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"yq"},"execOrder":99}];
    var updateTuple79 = doc2.update(update79);
    data2 = cljs.ops.string.exec(data2, updateTuple79.toExec);

    var update80 = [{"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":38,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1,"37":1},"invClusterSize":11},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eqw"},"execOrder":100}];
    var updateTuple80 = doc2.update(update80);
    data2 = cljs.ops.string.exec(data2, updateTuple80.toExec);

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

    var serverUpdate0 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"yw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":1,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"qy"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"ely"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":2,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"wlo"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"t"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":" l"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"d"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":3,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1},"invClusterSize":2},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"w"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eyy"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":4,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yrw"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"eyy"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yy"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rtq"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":5,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"yy"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1},"invClusterSize":3},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rtq"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":6,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"q"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":5,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"q"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":7,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":6,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qyt"},"execOrder":30};
    updateServer(serverUpdate29);

    var serverUpdate30 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":8,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"tq"},"execOrder":31};
    updateServer(serverUpdate30);

    var serverUpdate31 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":7,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tq"},"execOrder":32};
    updateServer(serverUpdate31);

    var serverUpdate32 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"q"},"execOrder":33};
    updateServer(serverUpdate32);

    var serverUpdate33 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":8,"invCluster":{"3":1,"5":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"qy"},"execOrder":34};
    updateServer(serverUpdate33);

    var serverUpdate34 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1},"invClusterSize":2},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"q"},"execOrder":35};
    updateServer(serverUpdate34);

    var serverUpdate35 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":9,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":1},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"q"},"execOrder":36};
    updateServer(serverUpdate35);

    var serverUpdate36 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"tr"},"execOrder":37};
    updateServer(serverUpdate36);

    var serverUpdate37 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":9,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":38};
    updateServer(serverUpdate37);

    var serverUpdate38 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":10,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"tr"},"execOrder":39};
    updateServer(serverUpdate38);

    var serverUpdate39 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":40};
    updateServer(serverUpdate39);

    var serverUpdate40 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":41};
    updateServer(serverUpdate40);

    var serverUpdate41 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":42};
    updateServer(serverUpdate41);

    var serverUpdate42 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":43};
    updateServer(serverUpdate42);

    var serverUpdate43 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"e"},"execOrder":44};
    updateServer(serverUpdate43);

    var serverUpdate44 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":1},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":2,"load":{"type":0,"at":0,"value":"e"},"execOrder":45};
    updateServer(serverUpdate44);

    var serverUpdate45 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":12,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":2},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":3,"load":{"type":1,"at":0,"value":"e"},"execOrder":46};
    updateServer(serverUpdate45);

    var serverUpdate46 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":12,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qr"},"execOrder":47};
    updateServer(serverUpdate46);

    var serverUpdate47 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":10,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":48};
    updateServer(serverUpdate47);

    var serverUpdate48 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":13,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3},"invClusterSize":5},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"qr"},"execOrder":49};
    updateServer(serverUpdate48);

    var serverUpdate49 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":11,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":11,"invCluster":{"3":1,"5":1,"9":2,"10":1},"invClusterSize":4},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"1":1,"3":1,"9":1,"12":1},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":50};
    updateServer(serverUpdate49);

    var serverUpdate50 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"etq"},"execOrder":51};
    updateServer(serverUpdate50);

    var serverUpdate51 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":13,"invCluster":{"3":1,"5":1,"9":2,"10":1,"12":3,"13":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"r"},"execOrder":52};
    updateServer(serverUpdate51);

    var serverUpdate52 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"erq"},"execOrder":53};
    updateServer(serverUpdate52);

    var serverUpdate53 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qr"},"execOrder":54};
    updateServer(serverUpdate53);

    var serverUpdate54 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":55};
    updateServer(serverUpdate54);

    var serverUpdate55 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":56};
    updateServer(serverUpdate55);

    var serverUpdate56 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":26,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"er"},"execOrder":57};
    updateServer(serverUpdate56);

    var serverUpdate57 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":16,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"t"},"execOrder":58};
    updateServer(serverUpdate57);

    var serverUpdate58 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":16,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"t"},"execOrder":59};
    updateServer(serverUpdate58);

    var serverUpdate59 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":17,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"t"},"execOrder":60};
    updateServer(serverUpdate59);

    var serverUpdate60 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":15,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":15,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"we"},"execOrder":61};
    updateServer(serverUpdate60);

    var serverUpdate61 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":27,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":26,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"16":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"et"},"execOrder":62};
    updateServer(serverUpdate61);

    var serverUpdate62 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1},"invClusterSize":7},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"etq"},"execOrder":63};
    updateServer(serverUpdate62);

    var serverUpdate63 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":14,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":14,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":1},"invClusterSize":8},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"etq"},"execOrder":64};
    updateServer(serverUpdate63);

    var serverUpdate64 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"tye"},"execOrder":65};
    updateServer(serverUpdate64);

    var serverUpdate65 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":66};
    updateServer(serverUpdate65);

    var serverUpdate66 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":18,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":27,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"tye"},"execOrder":67};
    updateServer(serverUpdate66);

    var serverUpdate67 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"et"},"execOrder":68};
    updateServer(serverUpdate67);

    var serverUpdate68 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":19,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"tty"},"execOrder":69};
    updateServer(serverUpdate68);

    var serverUpdate69 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":19,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"twt"},"execOrder":70};
    updateServer(serverUpdate69);

    var serverUpdate70 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"er"},"execOrder":71};
    updateServer(serverUpdate70);

    var serverUpdate71 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":29,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":18,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"et"},"execOrder":72};
    updateServer(serverUpdate71);

    var serverUpdate72 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"yw"},"execOrder":73};
    updateServer(serverUpdate72);

    var serverUpdate73 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":1},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"yw"},"execOrder":74};
    updateServer(serverUpdate73);

    var serverUpdate74 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"er"},"execOrder":75};
    updateServer(serverUpdate74);

    var serverUpdate75 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":28,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":2},"invClusterSize":6},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":17,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1},"invClusterSize":11}},"size":2},"invCount":3,"load":{"type":1,"at":4,"value":"yw"},"execOrder":76};
    updateServer(serverUpdate75);

    var serverUpdate76 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":0,"at":9,"value":"er"},"execOrder":77};
    updateServer(serverUpdate76);

    var serverUpdate77 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":30,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"qe"},"execOrder":78};
    updateServer(serverUpdate77);

    var serverUpdate78 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":31,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"r"},"execOrder":79};
    updateServer(serverUpdate78);

    var serverUpdate79 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":80};
    updateServer(serverUpdate79);

    var serverUpdate80 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":22,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":30,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"tt"},"execOrder":81};
    updateServer(serverUpdate80);

    var serverUpdate81 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":21,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":21,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":29,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":3,"load":{"type":1,"at":9,"value":"er"},"execOrder":82};
    updateServer(serverUpdate81);

    var serverUpdate82 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":31,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":83};
    updateServer(serverUpdate82);

    var serverUpdate83 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1},"invClusterSize":7},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"e"},"execOrder":84};
    updateServer(serverUpdate83);

    var serverUpdate84 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":20,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":20,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1},"invClusterSize":12},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":28,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"twt"},"execOrder":85};
    updateServer(serverUpdate84);

    var serverUpdate85 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"tt"},"execOrder":86};
    updateServer(serverUpdate85);

    var serverUpdate86 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":23,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1},"invClusterSize":15},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"tt"},"execOrder":87};
    updateServer(serverUpdate86);

    var serverUpdate87 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":23,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":88};
    updateServer(serverUpdate87);

    var serverUpdate88 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":32,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":22,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"21":2},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":3,"value":"e"},"execOrder":89};
    updateServer(serverUpdate88);

    var serverUpdate89 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":24,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":90};
    updateServer(serverUpdate89);

    var serverUpdate90 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":33,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1},"invClusterSize":16}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"tt"},"execOrder":91};
    updateServer(serverUpdate90);

    var serverUpdate91 = {"siteId":"59ad9ae0-5378-11e7-bad4-417112e9572d","seqId":25,"context":{"vector":{"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17},"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":32,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":92};
    updateServer(serverUpdate91);

    var serverUpdate92 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":33,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":93};
    updateServer(serverUpdate92);

    var serverUpdate93 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wqe"},"execOrder":94};
    updateServer(serverUpdate93);

    var serverUpdate94 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":35,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wqe"},"execOrder":95};
    updateServer(serverUpdate94);

    var serverUpdate95 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":34,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":34,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2},"invClusterSize":8},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":24,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"w"},"execOrder":96};
    updateServer(serverUpdate95);

    var serverUpdate96 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":36,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":35,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"we"},"execOrder":97};
    updateServer(serverUpdate96);

    var serverUpdate97 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":36,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"yq"},"execOrder":98};
    updateServer(serverUpdate97);

    var serverUpdate98 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":37,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1},"invClusterSize":10},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"yq"},"execOrder":99};
    updateServer(serverUpdate98);

    var serverUpdate99 = {"siteId":"59af4890-5378-11e7-bad4-417112e9572d","seqId":38,"context":{"vector":{"59af4890-5378-11e7-bad4-417112e9572d":{"seqId":37,"invCluster":{"1":1,"3":1,"9":1,"12":1,"22":1,"28":3,"29":1,"32":2,"34":1,"35":1,"37":1},"invClusterSize":11},"59ad9ae0-5378-11e7-bad4-417112e9572d":{"seqId":25,"invCluster":{"3":1,"5":1,"9":2,"10":1,"11":1,"12":3,"13":1,"14":2,"15":1,"16":1,"17":1,"18":1,"20":1,"21":3,"22":1,"23":1,"24":1},"invClusterSize":17}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"eqw"},"execOrder":100};
    updateServer(serverUpdate99);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});