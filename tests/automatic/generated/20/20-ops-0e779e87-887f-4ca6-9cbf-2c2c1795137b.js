var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/rm/undo/rm/ins/ins/rm/rm/rm/ins/rm/rm/undo/rm/rm/ins/rm/undo/redo/rm - 20-ops-0e779e87-887f-4ca6-9cbf-2c2c1795137b", function() {
  var doc1 = new cljs.StringDocument("7f10ee30-5329-11e7-9fd9-052bcf759f51", 0, null);
  var doc2 = new cljs.StringDocument("7f12ea00-5329-11e7-9fd9-052bcf759f51", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"71f3a68d-a58c-4bd5-ae3e-0903ee8c417f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 7f10ee30-5329-11e7-9fd9-052bcf759f51 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":11,"value":"y"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rwq"},"execOrder":1},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"y"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"q"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple3 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":5},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":7,"value":"Wo"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":7},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"Wo"},"execOrder":8}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commit5 = [{"type":0,"at":4,"value":"wr"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var commit6 = [{"type":0,"at":9,"value":"wrr"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update6 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wo"},"execOrder":9},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wr"},"execOrder":10}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wrr"},"execOrder":11}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit7 = [{"type":1,"at":10,"value":"rr "}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update8 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"erw"},"execOrder":12}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commit8 = [{"type":1,"at":2,"value":"r"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update9 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"rqt"},"execOrder":13},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"rr "},"execOrder":14}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"r"},"execOrder":15}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"w"},"execOrder":16}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var commit9 = [{"type":1,"at":4,"value":"llo"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update12 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"w"},"execOrder":17}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":1},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":4,"value":"w"},"execOrder":18},{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"llo"},"execOrder":19}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":2},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"owr"},"execOrder":20}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

  });

  it("Site 7f12ea00-5329-11e7-9fd9-052bcf759f51 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"rwq"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rwq"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":4,"value":"q"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var commit3 = [{"type":1,"at":6,"value":"o"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update3 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":3},{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"q"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6},{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commit5 = [{"type":1,"at":8,"value":"Wo"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update6 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"Wo"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wo"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wr"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var commit6 = [{"type":1,"at":1,"value":"erw"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var commit7 = [{"type":0,"at":1,"value":"rqt"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update9 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wrr"},"execOrder":11},{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"erw"},"execOrder":12}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"rqt"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commit8 = [{"type":1,"at":4,"value":"w"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update11 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"rr "},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commitTuple9 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update12 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"r"},"execOrder":15},{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"w"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commitTuple10 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update13 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"w"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":1},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":4,"value":"w"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commit11 = [{"type":1,"at":6,"value":"owr"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update15 = [{"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"llo"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":2},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"owr"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

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

    var serverUpdate0 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rwq"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"y"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"q"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":2,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":3,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"Wo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wo"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":4,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wr"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"wrr"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":5,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"erw"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"rqt"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":6,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"rr "},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"r"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"w"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"w"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":7,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":1},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":5,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":4,"value":"w"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"7f10ee30-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1},"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"llo"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"7f12ea00-5329-11e7-9fd9-052bcf759f51","seqId":8,"context":{"vector":{"7f12ea00-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"3":1,"7":2},"invClusterSize":2},"7f10ee30-5329-11e7-9fd9-052bcf759f51":{"seqId":7,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"owr"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});