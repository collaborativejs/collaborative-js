var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/ins/rm/ins/ins/ins/rm/rm/ins - 10-ops-8abbfdb0-cd6f-481d-89d4-35aa6da34db2", function() {
  var doc1 = new clv.string.Document("1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd", 0, null);
  var doc2 = new clv.string.Document("1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd", 0, null);
  var doc3 = new clv.string.Document("1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd", 0, null);
  var doc4 = new clv.string.Document("1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"817925aa-aeb4-4c9b-992e-1ae93be72f6b","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"wt"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wt"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":13,"value":"t"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"ww"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"e"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":3,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wtl"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":4,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":13,"value":"et"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":" "},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":5,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":4,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0},"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"y"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

  });

  it("Site 1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd operations should be executed without errors", function() {
    var update1 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wt"},"execOrder":1},{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":2}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"ww"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":10,"value":"y"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update3 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"e"},"execOrder":4},{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":3,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wtl"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":1,"at":4,"value":" "}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":4,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":13,"value":"et"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":8},{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":" "},"execOrder":9}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":5,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":4,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0},"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"y"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

  });

  it("Site 1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd operations should be executed without errors", function() {
    var update1 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wt"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"ww"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"e"},"execOrder":4},{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":9,"value":"qy"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update5 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":3,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wtl"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":4,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":13,"value":"et"},"execOrder":7},{"siteId":"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":8}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":" "},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":5,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":4,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0},"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"y"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

  });

  it("Site 1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd operations should be executed without errors", function() {
    var update1 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wt"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":12,"value":"ww"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":15,"value":"e"}];
    var commitTuple2 = doc4.commit(commit2);
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update3 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"ww"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"e"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":3,"value":"wtl"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update5 = [{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var commit4 = [{"type":1,"at":13,"value":"et"}];
    var commitTuple4 = doc4.commit(commit4);
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var update6 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":3,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wtl"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":4,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":13,"value":"et"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var commit5 = [{"type":0,"at":14,"value":"y"}];
    var commitTuple5 = doc4.commit(commit5);
    data4 = clv.string.exec(data4, commitTuple5.toExec);

    var update9 = [{"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":" "},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":5,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":4,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0},"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"y"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wt"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"ww"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"e"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":3,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"wtl"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":4,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":13,"value":"et"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd","seqId":1,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":9,"value":"qy"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":2,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":3,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":" "},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd","seqId":5,"context":{"vector":{"1dbc8bd0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":2,"invCluster":{},"invClusterSize":0},"1dc146c0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":4,"invCluster":{},"invClusterSize":0},"1dbe87a0-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0},"1dbfe730-537e-11e7-ae0a-0d1cb52f8bcd":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":14,"value":"y"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});
