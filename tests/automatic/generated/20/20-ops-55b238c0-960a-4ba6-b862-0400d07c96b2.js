var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/redo/undo/rm/ins/ins/undo/rm/ins/ins/undo/redo/undo/undo/ins/ins/undo/ins/ins - 20-ops-55b238c0-960a-4ba6-b862-0400d07c96b2", function() {
  var doc1 = new clv.string.Document("a45a9000-537f-11e7-be63-5f8bb1381151", 0, null);
  var doc2 = new clv.string.Document("a45cb2e0-537f-11e7-be63-5f8bb1381151", 0, null);
  var doc3 = new clv.string.Document("a45deb60-537f-11e7-be63-5f8bb1381151", 0, null);
  var doc4 = new clv.string.Document("a45f4af0-537f-11e7-be63-5f8bb1381151", 0, null);
  var doc5 = new clv.string.Document("a4608370-537f-11e7-be63-5f8bb1381151", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"f9768f5e-9c59-4559-ae3c-5cc77cdc4026","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site a45a9000-537f-11e7-be63-5f8bb1381151 operations should be executed without errors", function() {
    var update1 = [{"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit1 = [{"type":1,"at":5,"value":"rl"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update3 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3},{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple3 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update6 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8},{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update7 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commit5 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update8 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var commit6 = [{"type":0,"at":6,"value":"tq"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update11 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

  });

  it("Site a45cb2e0-537f-11e7-be63-5f8bb1381151 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"tyr"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3},{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":4,"value":"lo "}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update5 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commit4 = [{"type":0,"at":8,"value":"yeq"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var commit5 = [{"type":0,"at":12,"value":"rtq"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var commitTuple6 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update9 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commitTuple7 = doc2.redo();
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update10 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commitTuple8 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update12 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commitTuple9 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple9.toExec);

    var update13 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

  });

  it("Site a45deb60-537f-11e7-be63-5f8bb1381151 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"t"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3},{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.string.exec(data3, updateTuple17.toExec);

    var update18 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20}];
    var updateTuple18 = doc3.update(update18);
    data3 = clv.string.exec(data3, updateTuple18.toExec);

  });

  it("Site a45f4af0-537f-11e7-be63-5f8bb1381151 operations should be executed without errors", function() {
    var update1 = [{"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":4,"value":"qw"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update3 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update5 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var update13 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var commit3 = [{"type":0,"at":7,"value":"wtt"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update15 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18}];
    var updateTuple16 = doc4.update(update16);
    data4 = clv.string.exec(data4, updateTuple16.toExec);

    var update17 = [{"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19}];
    var updateTuple17 = doc4.update(update17);
    data4 = clv.string.exec(data4, updateTuple17.toExec);

    var update18 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20}];
    var updateTuple18 = doc4.update(update18);
    data4 = clv.string.exec(data4, updateTuple18.toExec);

  });

  it("Site a4608370-537f-11e7-be63-5f8bb1381151 operations should be executed without errors", function() {
    var update1 = [{"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3},{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6},{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.string.exec(data5, updateTuple10.toExec);

    var update11 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13}];
    var updateTuple11 = doc5.update(update11);
    data5 = clv.string.exec(data5, updateTuple11.toExec);

    var update12 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14}];
    var updateTuple12 = doc5.update(update12);
    data5 = clv.string.exec(data5, updateTuple12.toExec);

    var update13 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15}];
    var updateTuple13 = doc5.update(update13);
    data5 = clv.string.exec(data5, updateTuple13.toExec);

    var update14 = [{"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16}];
    var updateTuple14 = doc5.update(update14);
    data5 = clv.string.exec(data5, updateTuple14.toExec);

    var update15 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17}];
    var updateTuple15 = doc5.update(update15);
    data5 = clv.string.exec(data5, updateTuple15.toExec);

    var commit1 = [{"type":0,"at":12,"value":"e"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var update16 = [{"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18}];
    var updateTuple16 = doc5.update(update16);
    data5 = clv.string.exec(data5, updateTuple16.toExec);

    var update17 = [{"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19}];
    var updateTuple17 = doc5.update(update17);
    data5 = clv.string.exec(data5, updateTuple17.toExec);

    var update18 = [{"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20}];
    var updateTuple18 = doc5.update(update18);
    data5 = clv.string.exec(data5, updateTuple18.toExec);

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

    var serverUpdate0 = {"siteId":"a45deb60-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"tyr"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"rl"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"rl"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qw"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"tyr"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":2,"load":{"type":1,"at":5,"value":"rl"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":3,"load":{"type":0,"at":5,"value":"rl"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":8,"value":"yeq"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":2,"load":{"type":0,"at":12,"value":"rtq"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"a45a9000-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":1},"invClusterSize":2},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":4,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":3,"load":{"type":1,"at":12,"value":"rtq"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"a45f4af0-537f-11e7-be63-5f8bb1381151","seqId":2,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":2},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":2,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":7,"value":"wtt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"a4608370-537f-11e7-be63-5f8bb1381151","seqId":1,"context":{"vector":{"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":4,"invCluster":{"1":1,"4":3},"invClusterSize":2},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":3},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"a45cb2e0-537f-11e7-be63-5f8bb1381151","seqId":3,"context":{"vector":{"a45cb2e0-537f-11e7-be63-5f8bb1381151":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a45deb60-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{},"invClusterSize":0},"a45f4af0-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a45a9000-537f-11e7-be63-5f8bb1381151":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":4},"invCount":1,"load":{"type":1,"at":8,"value":"yeq"},"execOrder":20};
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
