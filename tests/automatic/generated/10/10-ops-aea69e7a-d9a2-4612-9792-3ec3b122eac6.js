var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/ins/ins/ins/ins/ins/rm/rm/ins - 10-ops-aea69e7a-d9a2-4612-9792-3ec3b122eac6", function() {
  var doc1 = new clv.string.Document("575bace0-537e-11e7-b255-c5ddd41cf916", 0, null);
  var doc2 = new clv.string.Document("575da8b0-537e-11e7-b255-c5ddd41cf916", 0, null);
  var doc3 = new clv.string.Document("575f2f50-537e-11e7-b255-c5ddd41cf916", 0, null);
  var doc4 = new clv.string.Document("576067d0-537e-11e7-b255-c5ddd41cf916", 0, null);
  var doc5 = new clv.string.Document("5761c760-537e-11e7-b255-c5ddd41cf916", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"b7abe426-668e-4bf5-94de-a9afe67bc802","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 575bace0-537e-11e7-b255-c5ddd41cf916 operations should be executed without errors", function() {
    var update1 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":11,"value":"rld"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update4 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4},{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commit2 = [{"type":1,"at":4,"value":"otq"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update5 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit3 = [{"type":0,"at":1,"value":"r"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update7 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9},{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 575da8b0-537e-11e7-b255-c5ddd41cf916 operations should be executed without errors", function() {
    var update1 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4},{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

  });

  it("Site 575f2f50-537e-11e7-b255-c5ddd41cf916 operations should be executed without errors", function() {
    var update1 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var commit1 = [{"type":0,"at":10,"value":"eew"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update6 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

  });

  it("Site 576067d0-537e-11e7-b255-c5ddd41cf916 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":5,"value":"tqq"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update1 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commit2 = [{"type":0,"at":12,"value":"e"}];
    var commitTuple2 = doc4.commit(commit2);
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update3 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

  });

  it("Site 5761c760-537e-11e7-b255-c5ddd41cf916 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"w"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var update1 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":4,"value":"l"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = clv.string.exec(data5, commitTuple2.toExec);

    var update2 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var update4 = [{"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4},{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":6,"value":"Wo"}];
    var commitTuple3 = doc5.commit(commit3);
    data5 = clv.string.exec(data5, commitTuple3.toExec);

    var commit4 = [{"type":0,"at":6,"value":"ye"}];
    var commitTuple4 = doc5.commit(commit4);
    data5 = clv.string.exec(data5, commitTuple4.toExec);

    var update6 = [{"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7},{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var update8 = [{"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

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

    var serverUpdate0 = {"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"tqq"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"l"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"576067d0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"e"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"rld"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":2,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"otq"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"575f2f50-537e-11e7-b255-c5ddd41cf916","seqId":1,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":10,"value":"eew"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"5761c760-537e-11e7-b255-c5ddd41cf916","seqId":4,"context":{"vector":{"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":3,"invCluster":{},"invClusterSize":0},"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"575bace0-537e-11e7-b255-c5ddd41cf916","seqId":3,"context":{"vector":{"576067d0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"5761c760-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575bace0-537e-11e7-b255-c5ddd41cf916":{"seqId":2,"invCluster":{},"invClusterSize":0},"575f2f50-537e-11e7-b255-c5ddd41cf916":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":10};
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
