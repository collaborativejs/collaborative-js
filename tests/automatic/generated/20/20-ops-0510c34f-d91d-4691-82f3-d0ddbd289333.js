var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/redo/ins/undo/rm/undo/ins/rm/rm/undo/redo/undo/undo/redo/rm/rm/ins/ins/ins - 20-ops-0510c34f-d91d-4691-82f3-d0ddbd289333", function() {
  var doc1 = new cljs.StringDocument("84e9b430-537f-11e7-acea-9b6fa4c9a018", 0, null);
  var doc2 = new cljs.StringDocument("84ebb000-537f-11e7-acea-9b6fa4c9a018", 0, null);
  var doc3 = new cljs.StringDocument("84ece880-537f-11e7-acea-9b6fa4c9a018", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"2fd7a0fb-dc06-40cb-b9b4-1128692a2d4d","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 84e9b430-537f-11e7-acea-9b6fa4c9a018 operations should be executed without errors", function() {
    var update1 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ye"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":8,"value":"y"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update3 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3},{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple3 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":8,"value":"y"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":0,"at":8,"value":"tw"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"tw"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commitTuple5 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update6 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"Wor"},"execOrder":7},{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"tw"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"rq"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit6 = [{"type":1,"at":2,"value":"rqy"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update8 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"yel"},"execOrder":10},{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"rqy"},"execOrder":11}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":12},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"yel"},"execOrder":13}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":2,"load":{"type":1,"at":2,"value":"yel"},"execOrder":14}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var commitTuple7 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update11 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":3,"load":{"type":0,"at":2,"value":"yel"},"execOrder":15},{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":16}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":17}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qee"},"execOrder":18}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":2,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ell"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

  });

  it("Site 84ebb000-537f-11e7-acea-9b6fa4c9a018 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"ye"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ye"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":6,"value":"o"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update3 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":8,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"tw"},"execOrder":6}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"Wor"},"execOrder":7},{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"tw"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit3 = [{"type":1,"at":2,"value":"yel"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update8 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"rq"},"execOrder":9},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"yel"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"rqy"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update10 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":12},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"yel"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commitTuple5 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update11 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":2,"load":{"type":1,"at":2,"value":"yel"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commitTuple6 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update12 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":3,"load":{"type":0,"at":2,"value":"yel"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commitTuple7 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update13 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":16},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commitTuple8 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update14 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qee"},"execOrder":18},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":19}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commit9 = [{"type":1,"at":5,"value":"ell"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update15 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":2,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ell"},"execOrder":20}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

  });

  it("Site 84ece880-537f-11e7-acea-9b6fa4c9a018 operations should be executed without errors", function() {
    var update1 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ye"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":8,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"tw"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var commit1 = [{"type":1,"at":10,"value":"Wor"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update7 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"Wor"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"tw"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var commit2 = [{"type":0,"at":2,"value":"rq"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update9 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"rq"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"yel"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"rqy"},"execOrder":11}];
    var updateTuple11 = doc3.update(update11);
    data3 = cljs.ops.string.exec(data3, updateTuple11.toExec);

    var commit3 = [{"type":0,"at":6,"value":"y"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update12 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":12}];
    var updateTuple12 = doc3.update(update12);
    data3 = cljs.ops.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"yel"},"execOrder":13}];
    var updateTuple13 = doc3.update(update13);
    data3 = cljs.ops.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":2,"load":{"type":1,"at":2,"value":"yel"},"execOrder":14}];
    var updateTuple14 = doc3.update(update14);
    data3 = cljs.ops.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":3,"load":{"type":0,"at":2,"value":"yel"},"execOrder":15}];
    var updateTuple15 = doc3.update(update15);
    data3 = cljs.ops.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":16}];
    var updateTuple16 = doc3.update(update16);
    data3 = cljs.ops.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":17}];
    var updateTuple17 = doc3.update(update17);
    data3 = cljs.ops.string.exec(data3, updateTuple17.toExec);

    var commit4 = [{"type":0,"at":9,"value":"qee"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = cljs.ops.string.exec(data3, commitTuple4.toExec);

    var update18 = [{"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qee"},"execOrder":18}];
    var updateTuple18 = doc3.update(update18);
    data3 = cljs.ops.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":19},{"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":2,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ell"},"execOrder":20}];
    var updateTuple19 = doc3.update(update19);
    data3 = cljs.ops.string.exec(data3, updateTuple19.toExec);

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

    var serverUpdate0 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"ye"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":8,"value":"y"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"tw"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":1,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"Wor"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"tw"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"rq"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"yel"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":2,"value":"rqy"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"yel"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":2,"load":{"type":1,"at":2,"value":"yel"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":3,"load":{"type":0,"at":2,"value":"yel"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"84e9b430-537f-11e7-acea-9b6fa4c9a018","seqId":3,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1},"invClusterSize":2},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{},"invClusterSize":0},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"84ece880-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qee"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":2,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"84ebb000-537f-11e7-acea-9b6fa4c9a018","seqId":4,"context":{"vector":{"84ebb000-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"2":2,"3":3},"invClusterSize":2},"84e9b430-537f-11e7-acea-9b6fa4c9a018":{"seqId":3,"invCluster":{"1":2,"2":1,"3":1},"invClusterSize":3},"84ece880-537f-11e7-acea-9b6fa4c9a018":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ell"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});