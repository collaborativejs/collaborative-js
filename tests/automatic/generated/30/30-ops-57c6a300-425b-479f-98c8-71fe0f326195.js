var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/undo/redo/rm/ins/undo/rm/ins/undo/rm/ins/undo/rm/undo/ins/rm/rm/rm/ins/undo/undo/ins/ins/ins/ins/undo/undo/undo/ins/undo - 30-ops-57c6a300-425b-479f-98c8-71fe0f326195", function() {
  var doc1 = new clv.string.Document("632aad30-5380-11e7-9a5d-37774ae5d22d", 0, null);
  var doc2 = new clv.string.Document("632cd010-5380-11e7-9a5d-37774ae5d22d", 0, null);
  var doc3 = new clv.string.Document("632e2fa0-5380-11e7-9a5d-37774ae5d22d", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"cedd3c72-9419-4764-8728-523fd3dc6344","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 632aad30-5380-11e7-9a5d-37774ae5d22d operations should be executed without errors", function() {
    var update1 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":10,"value":"t"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"yw"},"execOrder":2},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"t"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var commitTuple3 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":4},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"t"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"t"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":4,"value":"lo "}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var commit5 = [{"type":0,"at":6,"value":"rtq"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":7},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update6 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"rtq"},"execOrder":9}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"rtq"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"we"},"execOrder":11}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"wq"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"wq"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"rw"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit7 = [{"type":1,"at":7,"value":"dt"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update13 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":16},{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"dt"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commit8 = [{"type":0,"at":5,"value":"t"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update15 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":19}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update16 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qy"},"execOrder":20},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":21}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":22}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commit10 = [{"type":1,"at":4,"value":"lwe"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update18 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"yw"},"execOrder":23}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":24},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lwe"},"execOrder":25}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var commit11 = [{"type":0,"at":2,"value":"t"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update20 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":26}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var commitTuple12 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update21 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":27},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":28}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"t"},"execOrder":29}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

    var update23 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"5":1,"6":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"qr"},"execOrder":30}];
    var updateTuple23 = doc1.update(update23);
    data1 = clv.string.exec(data1, updateTuple23.toExec);

  });

  it("Site 632cd010-5380-11e7-9a5d-37774ae5d22d operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":6,"value":"W"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"yw"},"execOrder":2},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"t"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":4},{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"t"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update4 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"t"},"execOrder":6}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"rtq"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commit3 = [{"type":0,"at":14,"value":"we"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update8 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"rtq"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"we"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var commit4 = [{"type":1,"at":4,"value":"o"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update10 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"wq"},"execOrder":12},{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":13}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var commit5 = [{"type":1,"at":6,"value":"rw"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var commit6 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update11 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"wq"},"execOrder":14},{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"rw"},"execOrder":15}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commit7 = [{"type":0,"at":4,"value":"qy"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update12 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":16}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":17}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"dt"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var commitTuple8 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update15 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":19},{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qy"},"execOrder":20}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":21}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":22}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"yw"},"execOrder":23}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var update19 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":24}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var commitTuple9 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple9.toExec);

    var update20 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lwe"},"execOrder":25}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var update21 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":26},{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":27}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":28}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var commit10 = [{"type":0,"at":1,"value":"qr"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = clv.string.exec(data2, commitTuple10.toExec);

    var update23 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"t"},"execOrder":29}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"5":1,"6":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"qr"},"execOrder":30}];
    var updateTuple24 = doc2.update(update24);
    data2 = clv.string.exec(data2, updateTuple24.toExec);

  });

  it("Site 632e2fa0-5380-11e7-9a5d-37774ae5d22d operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":8,"value":"yw"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"yw"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var commit2 = [{"type":0,"at":2,"value":"e"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update3 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"t"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"t"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"t"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"rtq"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"rtq"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var commit3 = [{"type":0,"at":8,"value":"wq"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update11 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"we"},"execOrder":11}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"wq"},"execOrder":12}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var commitTuple4 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update13 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":13}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"wq"},"execOrder":14}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"rw"},"execOrder":15}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

    var update16 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":16}];
    var updateTuple16 = doc3.update(update16);
    data3 = clv.string.exec(data3, updateTuple16.toExec);

    var update17 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":17}];
    var updateTuple17 = doc3.update(update17);
    data3 = clv.string.exec(data3, updateTuple17.toExec);

    var commitTuple5 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple5.toExec);

    var update18 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"dt"},"execOrder":18}];
    var updateTuple18 = doc3.update(update18);
    data3 = clv.string.exec(data3, updateTuple18.toExec);

    var update19 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":19}];
    var updateTuple19 = doc3.update(update19);
    data3 = clv.string.exec(data3, updateTuple19.toExec);

    var update20 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qy"},"execOrder":20}];
    var updateTuple20 = doc3.update(update20);
    data3 = clv.string.exec(data3, updateTuple20.toExec);

    var update21 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":21}];
    var updateTuple21 = doc3.update(update21);
    data3 = clv.string.exec(data3, updateTuple21.toExec);

    var commitTuple6 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple6.toExec);

    var update22 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":22}];
    var updateTuple22 = doc3.update(update22);
    data3 = clv.string.exec(data3, updateTuple22.toExec);

    var commit7 = [{"type":0,"at":4,"value":"w"}];
    var commitTuple7 = doc3.commit(commit7);
    data3 = clv.string.exec(data3, commitTuple7.toExec);

    var update23 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"yw"},"execOrder":23}];
    var updateTuple23 = doc3.update(update23);
    data3 = clv.string.exec(data3, updateTuple23.toExec);

    var update24 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":24}];
    var updateTuple24 = doc3.update(update24);
    data3 = clv.string.exec(data3, updateTuple24.toExec);

    var commitTuple8 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple8.toExec);

    var update25 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lwe"},"execOrder":25}];
    var updateTuple25 = doc3.update(update25);
    data3 = clv.string.exec(data3, updateTuple25.toExec);

    var update26 = [{"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":26}];
    var updateTuple26 = doc3.update(update26);
    data3 = clv.string.exec(data3, updateTuple26.toExec);

    var update27 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":27}];
    var updateTuple27 = doc3.update(update27);
    data3 = clv.string.exec(data3, updateTuple27.toExec);

    var update28 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":28}];
    var updateTuple28 = doc3.update(update28);
    data3 = clv.string.exec(data3, updateTuple28.toExec);

    var update29 = [{"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"t"},"execOrder":29}];
    var updateTuple29 = doc3.update(update29);
    data3 = clv.string.exec(data3, updateTuple29.toExec);

    var update30 = [{"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"5":1,"6":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"qr"},"execOrder":30}];
    var updateTuple30 = doc3.update(update30);
    data3 = clv.string.exec(data3, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"yw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"t"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"t"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":2,"load":{"type":0,"at":10,"value":"t"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lo "},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"rtq"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":6,"value":"rtq"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"we"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":8,"value":"wq"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":3,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":8,"value":"wq"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":6,"value":"rw"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":7,"value":"dt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":2,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":2,"invCluster":{},"invClusterSize":0},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"e"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"qy"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":3},"invCount":1,"load":{"type":1,"at":5,"value":"t"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":1,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"yw"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":4,"value":"w"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":6,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":3},"invCount":0,"load":{"type":1,"at":4,"value":"lwe"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"632e2fa0-5380-11e7-9a5d-37774ae5d22d","seqId":4,"context":{"vector":{"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":4,"value":"w"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":5,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{},"invClusterSize":0},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":3},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"632aad30-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"6":1},"invClusterSize":2},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":3},"invCount":1,"load":{"type":1,"at":2,"value":"t"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"632cd010-5380-11e7-9a5d-37774ae5d22d","seqId":7,"context":{"vector":{"632cd010-5380-11e7-9a5d-37774ae5d22d":{"seqId":6,"invCluster":{"1":1,"5":1,"6":1},"invClusterSize":3},"632e2fa0-5380-11e7-9a5d-37774ae5d22d":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"632aad30-5380-11e7-9a5d-37774ae5d22d":{"seqId":7,"invCluster":{"1":2,"3":1,"5":1},"invClusterSize":3}},"size":3},"invCount":0,"load":{"type":0,"at":1,"value":"qr"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});
