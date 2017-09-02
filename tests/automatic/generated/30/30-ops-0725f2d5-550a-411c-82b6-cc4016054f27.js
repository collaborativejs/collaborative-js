var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/ins/rm/ins/undo/ins/rm/undo/undo/redo/ins/ins/undo/rm/undo/rm/rm/rm/rm/ins/undo/rm/ins/ins/undo/rm/ins/ins/rm/ins - 30-ops-0725f2d5-550a-411c-82b6-cc4016054f27", function() {
  var doc1 = new clv.string.Document("f49aaa50-5352-11e7-99f7-ad8cd0bfe12e", 0, null);
  var doc2 = new clv.string.Document("f49d6970-5352-11e7-99f7-ad8cd0bfe12e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"e433c5e7-2243-4f14-9970-558aa7544b73","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site f49aaa50-5352-11e7-99f7-ad8cd0bfe12e operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":4,"value":"o "}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"yye"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":2,"value":"ty"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"yye"},"execOrder":2},{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":5},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yl"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":6,"value":"rld"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update6 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"or"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit4 = [{"type":0,"at":3,"value":"r"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update7 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"rld"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"t"},"execOrder":11},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var commit6 = [{"type":0,"at":1,"value":"wt"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update10 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":13},{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":14}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wt"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit7 = [{"type":1,"at":3,"value":"wr"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update12 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commitTuple8 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update13 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":8,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"W"},"execOrder":17},{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wr"},"execOrder":18}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"wr"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":9,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":8,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update16 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":9,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"eq"},"execOrder":21},{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wt"},"execOrder":22}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"eq"},"execOrder":23},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":11,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":24}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commitTuple10 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update18 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":12,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":11,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":25}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"wt"},"execOrder":26}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":13,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":12,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":27},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":14,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":13,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"et"},"execOrder":28}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var commit11 = [{"type":0,"at":0,"value":"qq"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update21 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":15,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"ett"},"execOrder":29},{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qq"},"execOrder":30}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

  });

  it("Site f49d6970-5352-11e7-99f7-ad8cd0bfe12e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"yye"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update1 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"yye"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"yye"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit3 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update3 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update4 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":4},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit5 = [{"type":1,"at":3,"value":"yl"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update5 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commit6 = [{"type":1,"at":5,"value":"or"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update6 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yl"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"or"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"rld"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var commit7 = [{"type":1,"at":2,"value":"t"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var commit8 = [{"type":1,"at":0,"value":"Hel"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update9 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":10},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"t"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commit9 = [{"type":0,"at":1,"value":"wr"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.string.exec(data2, commitTuple9.toExec);

    var update10 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":14}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commitTuple10 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple10.toExec);

    var commit11 = [{"type":1,"at":0,"value":"W"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = clv.string.exec(data2, commitTuple11.toExec);

    var update13 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wt"},"execOrder":15},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":8,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"W"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var commit12 = [{"type":0,"at":0,"value":"w"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = clv.string.exec(data2, commitTuple12.toExec);

    var update15 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wr"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var commit13 = [{"type":0,"at":1,"value":"eq"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = clv.string.exec(data2, commitTuple13.toExec);

    var update16 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"wr"},"execOrder":19},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":9,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":8,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":9,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"eq"},"execOrder":21}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var commitTuple14 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple14.toExec);

    var commit15 = [{"type":1,"at":0,"value":"w"}];
    var commitTuple15 = doc2.commit(commit15);
    data2 = clv.string.exec(data2, commitTuple15.toExec);

    var update18 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wt"},"execOrder":22},{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"eq"},"execOrder":23}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var commit16 = [{"type":0,"at":0,"value":"e"}];
    var commitTuple16 = doc2.commit(commit16);
    data2 = clv.string.exec(data2, commitTuple16.toExec);

    var update19 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":11,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":24}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":12,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":11,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":25}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var commit17 = [{"type":0,"at":1,"value":"t"}];
    var commitTuple17 = doc2.commit(commit17);
    data2 = clv.string.exec(data2, commitTuple17.toExec);

    var update21 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"wt"},"execOrder":26}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var commit18 = [{"type":1,"at":0,"value":"et"}];
    var commitTuple18 = doc2.commit(commit18);
    data2 = clv.string.exec(data2, commitTuple18.toExec);

    var update22 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":13,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":12,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":27}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var commit19 = [{"type":0,"at":0,"value":"ett"}];
    var commitTuple19 = doc2.commit(commit19);
    data2 = clv.string.exec(data2, commitTuple19.toExec);

    var update23 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":14,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":13,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"et"},"execOrder":28}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":15,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"ett"},"execOrder":29}];
    var updateTuple24 = doc2.update(update24);
    data2 = clv.string.exec(data2, updateTuple24.toExec);

    var update25 = [{"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qq"},"execOrder":30}];
    var updateTuple25 = doc2.update(update25);
    data2 = clv.string.exec(data2, updateTuple25.toExec);

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

    var serverUpdate0 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"yye"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"yye"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":2,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yl"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"or"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":3,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"rld"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"t"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wr"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":4,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"wt"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wr"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":8,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"W"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wr"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":6,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":7,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"wr"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":9,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":8,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"w"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":9,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"eq"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"wt"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":10,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1},"invClusterSize":3},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"eq"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":11,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":10,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"w"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":12,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":11,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"e"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":5,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":5,"invCluster":{"4":1,"5":1},"invClusterSize":2},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"wt"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":13,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":12,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":14,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":13,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"et"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"f49d6970-5352-11e7-99f7-ad8cd0bfe12e","seqId":15,"context":{"vector":{"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4},"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"ett"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e","seqId":7,"context":{"vector":{"f49aaa50-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":6,"invCluster":{"4":1,"5":2,"6":1},"invClusterSize":3},"f49d6970-5352-11e7-99f7-ad8cd0bfe12e":{"seqId":14,"invCluster":{"1":1,"2":1,"7":1,"10":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qq"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
