var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/ins/ins/ins/undo/ins/rm/ins/rm/rm/rm/ins/undo/rm/rm/rm/rm/ins/rm - 20-ops-1608bcfe-e0dd-4e51-ba84-5c2f8809d670", function() {
  var doc1 = new clv.string.Document("8b18cda0-537f-11e7-aec5-55580ccc84de", 0, null);
  var doc2 = new clv.string.Document("8b1aa260-537f-11e7-aec5-55580ccc84de", 0, null);
  var doc3 = new clv.string.Document("8b1bdae0-537f-11e7-aec5-55580ccc84de", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"c17b0774-bf99-469d-8b3e-d74d59b4ac19","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 8b18cda0-537f-11e7-aec5-55580ccc84de operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":8,"value":"rld"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rld"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"wye"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wye"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit2 = [{"type":1,"at":4,"value":" Wo"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update5 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":" Wo"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":8},{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Ho"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var commit3 = [{"type":0,"at":1,"value":"r"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update9 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var commit4 = [{"type":0,"at":0,"value":"rt"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update10 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":12},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var commit5 = [{"type":0,"at":0,"value":"rr"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update11 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rt"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update12 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rr"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":0,"value":"rr"},"execOrder":16}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"rt"},"execOrder":17}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.ops.string.exec(data1, updateTuple14.toExec);

    var commit7 = [{"type":0,"at":0,"value":"tqw"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update15 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"twy"},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":7,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"w"},"execOrder":19},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"tqw"},"execOrder":20}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.ops.string.exec(data1, updateTuple16.toExec);

  });

  it("Site 8b1aa260-537f-11e7-aec5-55580ccc84de operations should be executed without errors", function() {
    var update1 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rld"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"wye"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wye"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":6,"value":"Wo"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":4},{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":" Wo"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var commit2 = [{"type":0,"at":4,"value":"r"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update6 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update7 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":8},{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Ho"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var commit5 = [{"type":1,"at":0,"value":"r"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.ops.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Ho"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":12},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rt"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.ops.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rr"},"execOrder":15},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":0,"value":"rr"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"rt"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.ops.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"twy"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.ops.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":7,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"w"},"execOrder":19},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"tqw"},"execOrder":20}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.ops.string.exec(data2, updateTuple15.toExec);

  });

  it("Site 8b1bdae0-537f-11e7-aec5-55580ccc84de operations should be executed without errors", function() {
    var update1 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rld"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.ops.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":6,"value":"wye"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.ops.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"wye"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.ops.string.exec(data3, updateTuple2.toExec);

    var commitTuple2 = doc3.undo();
    data3 = clv.ops.string.exec(data3, commitTuple2.toExec);

    var update3 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wye"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.ops.string.exec(data3, updateTuple3.toExec);

    var commit3 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.ops.string.exec(data3, commitTuple3.toExec);

    var update4 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":" Wo"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.ops.string.exec(data3, updateTuple6.toExec);

    var commit4 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.ops.string.exec(data3, commitTuple4.toExec);

    var update7 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.ops.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Ho"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.ops.string.exec(data3, updateTuple10.toExec);

    var commit5 = [{"type":1,"at":0,"value":"r"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = clv.ops.string.exec(data3, commitTuple5.toExec);

    var update11 = [{"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":11}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.ops.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":12}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.ops.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":13}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.ops.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rt"},"execOrder":14}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.ops.string.exec(data3, updateTuple14.toExec);

    var commit6 = [{"type":1,"at":0,"value":"rt"}];
    var commitTuple6 = doc3.commit(commit6);
    data3 = clv.ops.string.exec(data3, commitTuple6.toExec);

    var update15 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rr"},"execOrder":15},{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":0,"value":"rr"},"execOrder":16}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.ops.string.exec(data3, updateTuple15.toExec);

    var commit7 = [{"type":0,"at":0,"value":"twy"}];
    var commitTuple7 = doc3.commit(commit7);
    data3 = clv.ops.string.exec(data3, commitTuple7.toExec);

    var update16 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"rt"},"execOrder":17}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.ops.string.exec(data3, updateTuple16.toExec);

    var commit8 = [{"type":1,"at":1,"value":"w"}];
    var commitTuple8 = doc3.commit(commit8);
    data3 = clv.ops.string.exec(data3, commitTuple8.toExec);

    var update17 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"twy"},"execOrder":18}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.ops.string.exec(data3, updateTuple17.toExec);

    var update18 = [{"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":7,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"w"},"execOrder":19}];
    var updateTuple18 = doc3.update(update18);
    data3 = clv.ops.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"tqw"},"execOrder":20}];
    var updateTuple19 = doc3.update(update19);
    data3 = clv.ops.string.exec(data3, updateTuple19.toExec);

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

    var serverUpdate0 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rld"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"wye"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wye"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":1,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":" Wo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":2,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"Ho"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"8b1aa260-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":3,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":2,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":4,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rt"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"rr"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":0,"value":"rr"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":5,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{},"invClusterSize":0},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"rt"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"twy"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"8b1bdae0-537f-11e7-aec5-55580ccc84de","seqId":7,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":1,"value":"w"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"8b18cda0-537f-11e7-aec5-55580ccc84de","seqId":6,"context":{"vector":{"8b18cda0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"5":1},"invClusterSize":1},"8b1bdae0-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"8b1aa260-537f-11e7-aec5-55580ccc84de":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":0,"value":"tqw"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});
