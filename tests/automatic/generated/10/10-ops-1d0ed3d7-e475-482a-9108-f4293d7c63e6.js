var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/ins/rm/rm/rm/rm/rm/undo/redo/undo - 10-ops-1d0ed3d7-e475-482a-9108-f4293d7c63e6", function() {
  var doc1 = new clv.string.Document("43d7cb90-537e-11e7-ab8d-198911cef3c0", 0, null);
  var doc2 = new clv.string.Document("43d9a050-537e-11e7-ab8d-198911cef3c0", 0, null);
  var doc3 = new clv.string.Document("43db26f0-537e-11e7-ab8d-198911cef3c0", 0, null);
  var doc4 = new clv.string.Document("43dc5f70-537e-11e7-ab8d-198911cef3c0", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"065883cc-b9b3-43d8-80c0-d31d92365a71","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 43d7cb90-537e-11e7-ab8d-198911cef3c0 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"rl"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":5},{"siteId":"43d9a050-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commit2 = [{"type":0,"at":6,"value":"qwy"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update6 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update7 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":0,"at":8,"value":"ld"},"execOrder":8},{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"qwy"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":3,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 43d9a050-537e-11e7-ab8d-198911cef3c0 operations should be executed without errors", function() {
    var update1 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"rl"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":5,"value":"Wo"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":5},{"siteId":"43d9a050-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":0,"at":8,"value":"ld"},"execOrder":8},{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"qwy"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":3,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

  });

  it("Site 43db26f0-537e-11e7-ab8d-198911cef3c0 operations should be executed without errors", function() {
    var update1 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit1 = [{"type":1,"at":7,"value":"rl"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":5,"value":"Wo"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update2 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":2},{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"rl"},"execOrder":3}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"43d9a050-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":0,"at":8,"value":"ld"},"execOrder":8},{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"qwy"},"execOrder":9}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":3,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

  });

  it("Site 43dc5f70-537e-11e7-ab8d-198911cef3c0 operations should be executed without errors", function() {
    var update1 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var commit1 = [{"type":1,"at":8,"value":"ld"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update2 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update3 = [{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"rl"},"execOrder":3},{"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":4}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":5}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var commitTuple3 = doc4.redo();
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update5 = [{"siteId":"43d9a050-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":6}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var commitTuple4 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var update6 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":7}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":0,"at":8,"value":"ld"},"execOrder":8}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var update8 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"qwy"},"execOrder":9}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":3,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":10}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

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

    var serverUpdate0 = {"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"rl"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"43db26f0-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"43d9a050-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"Wo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"43dc5f70-537e-11e7-ab8d-198911cef3c0","seqId":1,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":2},"invCount":3,"load":{"type":0,"at":8,"value":"ld"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":2,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":6,"value":"qwy"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"43d7cb90-537e-11e7-ab8d-198911cef3c0","seqId":3,"context":{"vector":{"43d7cb90-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43dc5f70-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"43db26f0-537e-11e7-ab8d-198911cef3c0":{"seqId":2,"invCluster":{},"invClusterSize":0},"43d9a050-537e-11e7-ab8d-198911cef3c0":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});
