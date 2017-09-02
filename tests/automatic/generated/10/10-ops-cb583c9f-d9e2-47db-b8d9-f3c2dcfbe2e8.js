var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/ins/ins/ins/undo/ins/ins/rm/ins - 10-ops-cb583c9f-d9e2-47db-b8d9-f3c2dcfbe2e8", function() {
  var doc1 = new clv.string.Document("14bbdbd0-537e-11e7-b4bc-5be99476f6b8", 0, null);
  var doc2 = new clv.string.Document("14bdd7a0-537e-11e7-b4bc-5be99476f6b8", 0, null);
  var doc3 = new clv.string.Document("14bf5e40-537e-11e7-b4bc-5be99476f6b8", 0, null);
  var doc4 = new clv.string.Document("14c096c0-537e-11e7-b4bc-5be99476f6b8", 0, null);
  var doc5 = new clv.string.Document("14c1f650-537e-11e7-b4bc-5be99476f6b8", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"52c1ab6b-177b-4eda-a63b-0cb3ce670c31","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 14bbdbd0-537e-11e7-b4bc-5be99476f6b8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6},{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit1 = [{"type":0,"at":3,"value":"qye"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update7 = [{"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8},{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commit2 = [{"type":0,"at":2,"value":"qet"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update8 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 14bdd7a0-537e-11e7-b4bc-5be99476f6b8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":4,"value":"w"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update3 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3},{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":12,"value":"q"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6},{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

  });

  it("Site 14bf5e40-537e-11e7-b4bc-5be99476f6b8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":1,"value":"qt"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update2 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2},{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var commitTuple2 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update4 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commit3 = [{"type":0,"at":11,"value":"te"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update5 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8},{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

  });

  it("Site 14c096c0-537e-11e7-b4bc-5be99476f6b8 operations should be executed without errors", function() {
    var update1 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2},{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":6,"value":"tww"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update5 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6},{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

  });

  it("Site 14c1f650-537e-11e7-b4bc-5be99476f6b8 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":9,"value":"qy"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = clv.string.exec(data5, commitTuple2.toExec);

    var update1 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var update2 = [{"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.string.exec(data5, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"14c1f650-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qt"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"qt"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"14bf5e40-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":11,"value":"te"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"14bdd7a0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"q"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"14c096c0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"tww"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":1,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":3,"value":"qye"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"14bbdbd0-537e-11e7-b4bc-5be99476f6b8","seqId":2,"context":{"vector":{"14c1f650-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bf5e40-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"14bdd7a0-537e-11e7-b4bc-5be99476f6b8":{"seqId":2,"invCluster":{},"invClusterSize":0},"14bbdbd0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0},"14c096c0-537e-11e7-b4bc-5be99476f6b8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":2,"value":"qet"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});
