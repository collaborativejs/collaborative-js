var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/ins/ins/rm/ins/rm/rm/ins/undo/rm - 10-ops-6d2a427f-b3c8-405d-82cd-f6215cabfa1f", function() {
  var doc1 = new clv.string.Document("6d61b7c0-5327-11e7-abb1-e767c5eb790b", 0, null);
  var doc2 = new clv.string.Document("6d636570-5327-11e7-abb1-e767c5eb790b", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"d32dc877-1623-4848-80c1-e9e30f0a3558","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 6d61b7c0-5327-11e7-abb1-e767c5eb790b operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":6,"value":"Wo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":3},{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":3,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"t"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":8,"value":"ytq"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":4,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":5},{"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":5,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":4,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"o "},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":5,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"tq"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":7,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"ly"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 6d636570-5327-11e7-abb1-e767c5eb790b operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":8,"value":"e"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update3 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":3,"value":"t"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":3,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"t"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":2,"value":"l"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":4,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commit5 = [{"type":1,"at":3,"value":"o "}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var commit6 = [{"type":0,"at":6,"value":"tq"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update6 = [{"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":6},{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":5,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":4,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"o "},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commitTuple7 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update7 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":5,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commit8 = [{"type":1,"at":4,"value":"ly"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update8 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"tq"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":7,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"ly"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

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

    var serverUpdate0 = {"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"e"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":3,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"t"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":4,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"6d61b7c0-5327-11e7-abb1-e767c5eb790b","seqId":2,"context":{"vector":{"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0},"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":5,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":4,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"o "},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":5,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"tq"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":6,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{},"invClusterSize":0},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"tq"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"6d636570-5327-11e7-abb1-e767c5eb790b","seqId":7,"context":{"vector":{"6d636570-5327-11e7-abb1-e767c5eb790b":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"6d61b7c0-5327-11e7-abb1-e767c5eb790b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"ly"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
