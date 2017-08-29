var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/undo/ins/ins/ins/rm/undo/ins/undo - 10-ops-348d8092-9035-4181-8d09-022bddcef42f", function() {
  var doc1 = new clv.string.Document("0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e", 0, null);
  var doc2 = new clv.string.Document("0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"5c4d84cc-48d3-4edb-8834-62a01fc79f08","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"yqt"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":1},{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yqt"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":3,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"q"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":3,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":16,"value":"ld"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":16,"value":"ld"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commit2 = [{"type":0,"at":6,"value":"ee"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var commitTuple3 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update6 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"yr"},"execOrder":7},{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ee"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ee"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":14,"value":"yr"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":6,"value":"tq"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":2,"value":"r"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var commit3 = [{"type":0,"at":7,"value":"q"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update2 = [{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yqt"},"execOrder":2},{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":16,"value":"ld"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update3 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":3,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"q"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update4 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":3,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":16,"value":"ld"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit6 = [{"type":0,"at":14,"value":"yr"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update5 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":16,"value":"ld"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"yr"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commitTuple7 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update7 = [{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ee"},"execOrder":8},{"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ee"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":14,"value":"yr"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

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

    var serverUpdate0 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yqt"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":3,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"q"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":3,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":16,"value":"ld"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":4,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{},"invClusterSize":0},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":16,"value":"ld"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"yr"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ee"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":2,"context":{"vector":{"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":2,"invCluster":{},"invClusterSize":0},"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"ee"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e","seqId":5,"context":{"vector":{"0ebbe8b0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":5,"invCluster":{"4":1},"invClusterSize":1},"0eb9ece0-537e-11e7-9eb4-1b8ccd4cc63e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":14,"value":"yr"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
