var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/ins/undo/redo/undo/undo/rm/ins/rm/ins/ins/ins/undo/ins/rm/rm/rm/undo/undo - 20-ops-1c7de2c3-43ed-4dab-9df2-db660c2a6294", function() {
  var doc1 = new clv.string.Document("3a81dad0-532a-11e7-b894-6305795853ed", 0, null);
  var doc2 = new clv.string.Document("3a838880-532a-11e7-b894-6305795853ed", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"bd47cc15-264f-47b5-af8d-31c9e422562a","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 3a81dad0-532a-11e7-b894-6305795853ed operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":6,"value":"t"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":6,"value":"yqw"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":10,"value":"y"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"yqw"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update4 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple5 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update6 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":10,"value":"y"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":10,"value":"y"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var commit8 = [{"type":1,"at":10,"value":"lew"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update8 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":8},{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yqw"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"lew"},"execOrder":10}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commit9 = [{"type":0,"at":5,"value":"w"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update10 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":11}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":5,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":12}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit10 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var commit11 = [{"type":0,"at":7,"value":"wtq"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update12 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wod"},"execOrder":13},{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":6,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":5,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":14}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit12 = [{"type":0,"at":3,"value":"eew"}];
    var commitTuple12 = doc1.commit(commit12);
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update13 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":7,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":6,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"wtq"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":8,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":7,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"eew"},"execOrder":16}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commit13 = [{"type":0,"at":2,"value":"wt"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.string.exec(data1, commitTuple13.toExec);

    var update15 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"Wod"},"execOrder":17}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commitTuple14 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple14.toExec);

    var update16 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":8,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"wt"},"execOrder":18}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":9,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"wt"},"execOrder":19}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r"},"execOrder":20}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

  });

  it("Site 3a838880-532a-11e7-b894-6305795853ed operations should be executed without errors", function() {
    var update1 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":11,"value":"ew"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update2 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"yqw"},"execOrder":2},{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"y"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":1,"at":2,"value":"llo"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":10,"value":"y"},"execOrder":6},{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":10,"value":"y"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yqw"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commit3 = [{"type":1,"at":6,"value":"r"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update8 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"lew"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":4,"value":"Wod"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update10 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":5,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wod"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":6,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":5,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":14},{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":7,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":6,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"wtq"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update13 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":8,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":7,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"eew"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"Wod"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":8,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"wt"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var commitTuple6 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update16 = [{"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":9,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"wt"},"execOrder":19}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r"},"execOrder":20}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

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

    var serverUpdate0 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"yqw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"y"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":1,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"ew"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"y"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":10,"value":"y"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":1,"at":10,"value":"y"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":2,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yqw"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"lew"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":5,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wod"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":6,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":5,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":7,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":6,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"wtq"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":8,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":7,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"eew"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":4,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"Wod"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":8,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"wt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"3a81dad0-532a-11e7-b894-6305795853ed","seqId":9,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":9,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"wt"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"3a838880-532a-11e7-b894-6305795853ed","seqId":3,"context":{"vector":{"3a81dad0-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2},"3a838880-532a-11e7-b894-6305795853ed":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
