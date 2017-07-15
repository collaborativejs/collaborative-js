var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/ins/ins/ins/undo/ins/ins/undo/undo/redo/ins/rm/rm/undo/rm/rm/rm/rm/ins - 20-ops-1c0a59b3-642b-4f0e-8133-fffe319d346f", function() {
  var doc1 = new clv.string.Document("16a9e640-5328-11e7-9a2a-d54e98f659b7", 0, null);
  var doc2 = new clv.string.Document("16abbb00-5328-11e7-9a2a-d54e98f659b7", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"bd2034f2-42b6-4fce-bb4e-25be2244345c","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 16a9e640-5328-11e7-9a2a-d54e98f659b7 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"y"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tqw"},"execOrder":1},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"rtq"},"execOrder":3},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"y"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":9,"value":"q"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var commit4 = [{"type":0,"at":12,"value":"yt"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":" Wo"},"execOrder":5},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"q"},"execOrder":6}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yt"},"execOrder":7}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit5 = [{"type":0,"at":6,"value":"wee"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":" Wo"},"execOrder":8},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wee"},"execOrder":9}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":0,"at":4,"value":"rr"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wee"},"execOrder":10}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":0,"at":3,"value":"et"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rr"},"execOrder":11}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"et"},"execOrder":12}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple9.toExec);

    var update9 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ow"},"execOrder":13},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"et"},"execOrder":14}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple10.toExec);

    var update10 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"lrr"},"execOrder":15},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"rr"},"execOrder":16}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":17}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var commitTuple11 = doc1.redo();
    data1 = clv.ops.string.exec(data1, commitTuple11.toExec);

    var update12 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":7,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"y"},"execOrder":18}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":8,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":19},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"rr"},"execOrder":20}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

  });

  it("Site 16abbb00-5328-11e7-9a2a-d54e98f659b7 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"tqw"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tqw"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":8,"value":"rtq"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"rtq"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit3 = [{"type":1,"at":6,"value":" Wo"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"y"},"execOrder":4},{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":" Wo"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"q"},"execOrder":6},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yt"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":" Wo"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wee"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wee"},"execOrder":10},{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rr"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var commit5 = [{"type":1,"at":9,"value":"ow"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.ops.string.exec(data2, commitTuple5.toExec);

    var update9 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"et"},"execOrder":12},{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ow"},"execOrder":13}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

    var commit6 = [{"type":1,"at":5,"value":"lrr"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.ops.string.exec(data2, commitTuple6.toExec);

    var update10 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"et"},"execOrder":14}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"lrr"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.ops.string.exec(data2, updateTuple11.toExec);

    var commit7 = [{"type":1,"at":0,"value":"He"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.ops.string.exec(data2, commitTuple7.toExec);

    var update12 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"rr"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.ops.string.exec(data2, updateTuple12.toExec);

    var commit8 = [{"type":1,"at":7,"value":"y"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.ops.string.exec(data2, commitTuple8.toExec);

    var update13 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.ops.string.exec(data2, updateTuple13.toExec);

    var commit9 = [{"type":0,"at":5,"value":"q"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.ops.string.exec(data2, commitTuple9.toExec);

    var update14 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":7,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"y"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.ops.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":8,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.ops.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"rr"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.ops.string.exec(data2, updateTuple16.toExec);

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

    var serverUpdate0 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tqw"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"rtq"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":1,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"y"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":" Wo"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":2,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"q"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yt"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":3,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":" Wo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wee"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wee"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rr"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"et"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":4,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ow"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"et"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"lrr"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1},"invClusterSize":2},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"rr"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":6,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":7,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"y"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"16abbb00-5328-11e7-9a2a-d54e98f659b7","seqId":8,"context":{"vector":{"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":7,"invCluster":{"3":1},"invClusterSize":1},"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":6,"invCluster":{"1":1,"4":1,"5":1,"6":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"q"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"16a9e640-5328-11e7-9a2a-d54e98f659b7","seqId":5,"context":{"vector":{"16a9e640-5328-11e7-9a2a-d54e98f659b7":{"seqId":5,"invCluster":{"1":1,"4":1,"5":1},"invClusterSize":3},"16abbb00-5328-11e7-9a2a-d54e98f659b7":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":4,"value":"rr"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
