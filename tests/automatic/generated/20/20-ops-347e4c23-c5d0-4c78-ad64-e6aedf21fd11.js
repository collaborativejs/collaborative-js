var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/rm/undo/ins/ins/undo/rm/ins/undo/ins/rm/ins/undo/ins/undo/redo/rm/rm/rm - 20-ops-347e4c23-c5d0-4c78-ad64-e6aedf21fd11", function() {
  var doc1 = new clv.string.Document("b52c97c0-537f-11e7-86fa-0d0f5652f5a1", 0, null);
  var doc2 = new clv.string.Document("b52f08c0-537f-11e7-86fa-0d0f5652f5a1", 0, null);
  var doc3 = new clv.string.Document("b5308f60-537f-11e7-86fa-0d0f5652f5a1", 0, null);
  var doc4 = new clv.string.Document("b531c7e0-537f-11e7-86fa-0d0f5652f5a1", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";

  var serverData = {"id":"e60293b4-40bd-47a4-a15b-b79f73836958","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site b52c97c0-537f-11e7-86fa-0d0f5652f5a1 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":2,"value":"rqy"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"e"},"execOrder":1},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":7,"value":"rey"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"e"},"execOrder":3},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":4}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":1,"at":10,"value":"o"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"o"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"rty"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"e"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"rty"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":14,"value":"e"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"rty"},"execOrder":10},{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"wy"},"execOrder":11}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update10 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"wry"},"execOrder":14},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":10,"value":"o"},"execOrder":15}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit5 = [{"type":0,"at":2,"value":"yee"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update12 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"qyr"},"execOrder":16},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"yee"},"execOrder":17}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":5,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":9,"value":"W"},"execOrder":18},{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":5,"value":"wry"},"execOrder":19}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"rty"},"execOrder":20}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

  });

  it("Site b52f08c0-537f-11e7-86fa-0d0f5652f5a1 operations should be executed without errors", function() {
    var update1 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"e"},"execOrder":1},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":2}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"e"},"execOrder":3},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":4}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"o"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"rty"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"e"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"rty"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":14,"value":"e"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"rty"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"wy"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commit1 = [{"type":0,"at":5,"value":"wry"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update10 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":13},{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"wry"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":10,"value":"o"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"qyr"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update14 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"yee"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var commit3 = [{"type":1,"at":5,"value":"rty"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update15 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":5,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":9,"value":"W"},"execOrder":18},{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":5,"value":"wry"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"rty"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

  });

  it("Site b5308f60-537f-11e7-86fa-0d0f5652f5a1 operations should be executed without errors", function() {
    var update1 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"e"},"execOrder":1},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":2}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"e"},"execOrder":3},{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":4}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"o"},"execOrder":5}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var commit1 = [{"type":0,"at":14,"value":"e"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update4 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"rty"},"execOrder":6},{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"e"},"execOrder":7}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commitTuple2 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update5 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"rty"},"execOrder":8},{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":14,"value":"e"},"execOrder":9}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var commit3 = [{"type":0,"at":14,"value":"wy"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"rty"},"execOrder":10},{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"wy"},"execOrder":11}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":12}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":13},{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"wry"},"execOrder":14}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var commit4 = [{"type":1,"at":2,"value":"qyr"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update9 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":10,"value":"o"},"execOrder":15}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"qyr"},"execOrder":16}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var update11 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"yee"},"execOrder":17}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":5,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":9,"value":"W"},"execOrder":18},{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":5,"value":"wry"},"execOrder":19}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"rty"},"execOrder":20}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

  });

  it("Site b531c7e0-537f-11e7-86fa-0d0f5652f5a1 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"e"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update1 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"e"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update3 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"e"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":4}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var update5 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"o"},"execOrder":5}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var commit3 = [{"type":0,"at":10,"value":"rty"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var update6 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"rty"},"execOrder":6}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"e"},"execOrder":7}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var commitTuple4 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var update8 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"rty"},"execOrder":8}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":14,"value":"e"},"execOrder":9}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var commitTuple5 = doc4.redo();
    data4 = clv.string.exec(data4, commitTuple5.toExec);

    var update10 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"rty"},"execOrder":10}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"wy"},"execOrder":11}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var commit6 = [{"type":1,"at":5,"value":"ll"}];
    var commitTuple6 = doc4.commit(commit6);
    data4 = clv.string.exec(data4, commitTuple6.toExec);

    var update12 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":12}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var commit7 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple7 = doc4.commit(commit7);
    data4 = clv.string.exec(data4, commitTuple7.toExec);

    var update13 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":13}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"wry"},"execOrder":14}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":10,"value":"o"},"execOrder":15}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

    var update16 = [{"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"qyr"},"execOrder":16}];
    var updateTuple16 = doc4.update(update16);
    data4 = clv.string.exec(data4, updateTuple16.toExec);

    var commit8 = [{"type":1,"at":9,"value":"W"}];
    var commitTuple8 = doc4.commit(commit8);
    data4 = clv.string.exec(data4, commitTuple8.toExec);

    var update17 = [{"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"yee"},"execOrder":17}];
    var updateTuple17 = doc4.update(update17);
    data4 = clv.string.exec(data4, updateTuple17.toExec);

    var update18 = [{"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":5,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":9,"value":"W"},"execOrder":18}];
    var updateTuple18 = doc4.update(update18);
    data4 = clv.string.exec(data4, updateTuple18.toExec);

    var update19 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":5,"value":"wry"},"execOrder":19}];
    var updateTuple19 = doc4.update(update19);
    data4 = clv.string.exec(data4, updateTuple19.toExec);

    var update20 = [{"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"rty"},"execOrder":20}];
    var updateTuple20 = doc4.update(update20);
    data4 = clv.string.exec(data4, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"e"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":2,"value":"rqy"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"e"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"rey"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":10,"value":"o"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"rty"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"e"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"rty"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":14,"value":"e"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"rty"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"wy"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"wry"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":0,"at":10,"value":"o"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"b5308f60-537f-11e7-86fa-0d0f5652f5a1","seqId":3,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":2,"value":"qyr"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"b52c97c0-537f-11e7-86fa-0d0f5652f5a1","seqId":4,"context":{"vector":{"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":0,"at":2,"value":"yee"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"b531c7e0-537f-11e7-86fa-0d0f5652f5a1","seqId":5,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":0,"load":{"type":1,"at":9,"value":"W"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":1,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{},"invClusterSize":0},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":4},"invCount":1,"load":{"type":1,"at":5,"value":"wry"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"b52f08c0-537f-11e7-86fa-0d0f5652f5a1","seqId":2,"context":{"vector":{"b531c7e0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"1":1,"2":2},"invClusterSize":2},"b52c97c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"b5308f60-537f-11e7-86fa-0d0f5652f5a1":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b52f08c0-537f-11e7-86fa-0d0f5652f5a1":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":4},"invCount":0,"load":{"type":1,"at":5,"value":"rty"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
  });

});
