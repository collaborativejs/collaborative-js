var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/undo/ins/undo/redo/rm/ins/undo/rm/ins/undo/undo/ins/rm/rm/rm/ins/rm/rm/undo - 20-ops-f778ae0b-fc75-4d1a-85cd-783d5fa776fd", function() {
  var doc1 = new clv.string.Document("6a7f7760-537f-11e7-8340-fb94527ecdb6", 0, null);
  var doc2 = new clv.string.Document("6a814c20-537f-11e7-8340-fb94527ecdb6", 0, null);
  var doc3 = new clv.string.Document("6a825d90-537f-11e7-8340-fb94527ecdb6", 0, null);
  var doc4 = new clv.string.Document("6a836f00-537f-11e7-8340-fb94527ecdb6", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"76205ae5-07f6-46df-a2a2-0226643c7e72","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 6a7f7760-537f-11e7-8340-fb94527ecdb6 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":0,"value":"He"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"yyq"},"execOrder":1},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"lo "},"execOrder":3},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":10,"value":"ww"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":6},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"ww"},"execOrder":7}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":8}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"l"},"execOrder":9}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"l"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update8 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":11},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"ww"},"execOrder":12}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commitTuple5 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update9 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"rtt"},"execOrder":13}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"W"},"execOrder":14},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"ww"},"execOrder":15}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":4,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ol"},"execOrder":16}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":5,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":4,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":17},{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"rtt"},"execOrder":18}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit6 = [{"type":1,"at":8,"value":"ww"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update13 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"l"},"execOrder":19},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":5,"invCluster":{},"invClusterSize":0},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":8,"value":"ww"},"execOrder":20}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

  });

  it("Site 6a814c20-537f-11e7-8340-fb94527ecdb6 operations should be executed without errors", function() {
    var update1 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"yyq"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"lo "},"execOrder":3},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":0,"at":2,"value":"e"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":5},{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"ww"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update6 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":5,"value":"l"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update7 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"l"},"execOrder":9},{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"l"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commit4 = [{"type":0,"at":10,"value":"rtt"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update8 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":11},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"ww"},"execOrder":12}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"rtt"},"execOrder":13}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"W"},"execOrder":14}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"ww"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update12 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":4,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ol"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commitTuple6 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update13 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":5,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":4,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":17},{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"rtt"},"execOrder":18}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"l"},"execOrder":19}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":5,"invCluster":{},"invClusterSize":0},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":8,"value":"ww"},"execOrder":20}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

  });

  it("Site 6a825d90-537f-11e7-8340-fb94527ecdb6 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"yyq"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"yyq"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":6,"value":"lo "}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update2 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"lo "},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var commit3 = [{"type":1,"at":3,"value":"r"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update4 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"ww"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"l"},"execOrder":9},{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"l"},"execOrder":10}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":11},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"ww"},"execOrder":12}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"rtt"},"execOrder":13}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var commit4 = [{"type":1,"at":5,"value":"ol"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update12 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"W"},"execOrder":14},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"ww"},"execOrder":15}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var commit5 = [{"type":0,"at":6,"value":"ye"}];
    var commitTuple5 = doc3.commit(commit5);
    data3 = clv.string.exec(data3, commitTuple5.toExec);

    var update13 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":4,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ol"},"execOrder":16}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":5,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":4,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":17}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"rtt"},"execOrder":18}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"l"},"execOrder":19}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":5,"invCluster":{},"invClusterSize":0},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":8,"value":"ww"},"execOrder":20}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.string.exec(data3, updateTuple17.toExec);

  });

  it("Site 6a836f00-537f-11e7-8340-fb94527ecdb6 operations should be executed without errors", function() {
    var update1 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"yyq"},"execOrder":1},{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":2}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"lo "},"execOrder":3}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":4}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":5}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"ww"},"execOrder":7}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var commit1 = [{"type":1,"at":6,"value":"l"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update7 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":8}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"l"},"execOrder":9}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var commit2 = [{"type":1,"at":5,"value":"W"}];
    var commitTuple2 = doc4.commit(commit2);
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update9 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"l"},"execOrder":10}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var update10 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":11}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"ww"},"execOrder":12}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var commitTuple3 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update12 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"rtt"},"execOrder":13}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var update13 = [{"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"W"},"execOrder":14}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"ww"},"execOrder":15}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":4,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ol"},"execOrder":16}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":5,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":4,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":17}];
    var updateTuple16 = doc4.update(update16);
    data4 = clv.string.exec(data4, updateTuple16.toExec);

    var update17 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"rtt"},"execOrder":18}];
    var updateTuple17 = doc4.update(update17);
    data4 = clv.string.exec(data4, updateTuple17.toExec);

    var update18 = [{"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"l"},"execOrder":19}];
    var updateTuple18 = doc4.update(update18);
    data4 = clv.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":5,"invCluster":{},"invClusterSize":0},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":8,"value":"ww"},"execOrder":20}];
    var updateTuple19 = doc4.update(update19);
    data4 = clv.string.exec(data4, updateTuple19.toExec);

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

    var serverUpdate0 = {"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"yyq"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"lo "},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"ww"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":1,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"l"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"l"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"ww"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":10,"value":"rtt"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"6a836f00-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":0,"at":5,"value":"W"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"ww"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":4,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"ol"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"6a825d90-537f-11e7-8340-fb94527ecdb6","seqId":5,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":4,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"ye"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":10,"value":"rtt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"6a814c20-537f-11e7-8340-fb94527ecdb6","seqId":2,"context":{"vector":{"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{},"invClusterSize":0},"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":0,"at":5,"value":"l"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"6a7f7760-537f-11e7-8340-fb94527ecdb6","seqId":3,"context":{"vector":{"6a7f7760-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"6a825d90-537f-11e7-8340-fb94527ecdb6":{"seqId":5,"invCluster":{},"invClusterSize":0},"6a814c20-537f-11e7-8340-fb94527ecdb6":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2},"6a836f00-537f-11e7-8340-fb94527ecdb6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":8,"value":"ww"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});
