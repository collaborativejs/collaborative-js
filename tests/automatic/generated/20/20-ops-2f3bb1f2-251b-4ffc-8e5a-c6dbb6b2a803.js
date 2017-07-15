var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/ins/rm/rm/undo/rm/ins/undo/ins/ins/rm/ins/undo/rm/undo/ins/undo/redo/ins/undo - 20-ops-2f3bb1f2-251b-4ffc-8e5a-c6dbb6b2a803", function() {
  var doc1 = new clv.string.Document("c927ace0-5327-11e7-a207-95b81e487fae", 0, null);
  var doc2 = new clv.string.Document("c92aba20-5327-11e7-a207-95b81e487fae", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"0f464fd2-ac24-4375-8cb5-f2e28a98c559","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site c927ace0-5327-11e7-a207-95b81e487fae operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":6,"value":"Wo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":4,"value":"t"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":1,"at":5,"value":"o "}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lt"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Hel"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eww"},"execOrder":5},{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update6 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit6 = [{"type":1,"at":0,"value":"Hee"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update7 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hee"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"eww"},"execOrder":9},{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"yer"},"execOrder":12},{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"yer"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"yer"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var commit7 = [{"type":0,"at":2,"value":"qr"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update12 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ewq"},"execOrder":15},{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qr"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ewq"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

    var commitTuple8 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple8.toExec);

    var update14 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"qr"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.ops.string.exec(data1, updateTuple14.toExec);

    var commit9 = [{"type":0,"at":5,"value":"t"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.ops.string.exec(data1, commitTuple9.toExec);

    var update15 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":7,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":19}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.ops.string.exec(data1, updateTuple15.toExec);

    var commit10 = [{"type":0,"at":7,"value":"y"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.ops.string.exec(data1, commitTuple10.toExec);

    var update16 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":8,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":7,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"y"},"execOrder":20}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.ops.string.exec(data1, updateTuple16.toExec);

  });

  it("Site c92aba20-5327-11e7-a207-95b81e487fae operations should be executed without errors", function() {
    var update1 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":3,"value":"lt"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lt"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":2,"value":"eww"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eww"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":6}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":7}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hee"},"execOrder":8}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var commitTuple3 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update9 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"eww"},"execOrder":9}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":1,"value":"r"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var update10 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":10}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.ops.string.exec(data2, updateTuple10.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple5.toExec);

    var update11 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":11}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.ops.string.exec(data2, updateTuple11.toExec);

    var commit6 = [{"type":0,"at":1,"value":"yer"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.ops.string.exec(data2, commitTuple6.toExec);

    var update12 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"yer"},"execOrder":12}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.ops.string.exec(data2, updateTuple12.toExec);

    var commitTuple7 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple7.toExec);

    var update13 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"yer"},"execOrder":13}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.ops.string.exec(data2, updateTuple13.toExec);

    var commitTuple8 = doc2.redo();
    data2 = clv.ops.string.exec(data2, commitTuple8.toExec);

    var update14 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"yer"},"execOrder":14}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.ops.string.exec(data2, updateTuple14.toExec);

    var commit9 = [{"type":0,"at":6,"value":"ewq"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.ops.string.exec(data2, commitTuple9.toExec);

    var update15 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ewq"},"execOrder":15}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.ops.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qr"},"execOrder":16}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.ops.string.exec(data2, updateTuple16.toExec);

    var commitTuple10 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple10.toExec);

    var update17 = [{"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ewq"},"execOrder":17}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.ops.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"qr"},"execOrder":18}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.ops.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":7,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":19}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.ops.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":8,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":7,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"y"},"execOrder":20}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.ops.string.exec(data2, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"o "},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":1,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lt"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eww"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hee"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":2,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{},"invClusterSize":0},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"eww"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":3,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"yer"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"yer"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":4,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":2},"invCount":2,"load":{"type":0,"at":1,"value":"yer"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ewq"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qr"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"c92aba20-5327-11e7-a207-95b81e487fae","seqId":5,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ewq"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":6,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1},"invClusterSize":1},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":4,"invCluster":{"2":1,"3":1,"4":2},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"qr"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":7,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":6,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"c927ace0-5327-11e7-a207-95b81e487fae","seqId":8,"context":{"vector":{"c927ace0-5327-11e7-a207-95b81e487fae":{"seqId":7,"invCluster":{"4":1,"6":1},"invClusterSize":2},"c92aba20-5327-11e7-a207-95b81e487fae":{"seqId":5,"invCluster":{"2":1,"3":1,"4":2,"5":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"y"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
