var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/rm/rm/rm/undo/ins/rm/undo/redo/undo - 10-ops-8a813211-12ff-4835-94ce-f5dd8ef6a375", function() {
  var doc1 = new clv.string.Document("074497d0-537e-11e7-a8d9-31dd9bc51397", 0, null);
  var doc2 = new clv.string.Document("074693a0-537e-11e7-a8d9-31dd9bc51397", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"1eb9eea5-6197-419c-a48c-490be6aa895b","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 074497d0-537e-11e7-a8d9-31dd9bc51397 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":5,"value":"r"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":3,"value":"lo"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":9,"value":"ld"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":1,"at":5,"value":"W"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":2,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":3,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":2,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":3,"value":"r "}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":9,"value":"ld"},"execOrder":5},{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":3,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r "},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"r "},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit6 = [{"type":0,"at":4,"value":"qy"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update7 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":9,"value":"ld"},"execOrder":8},{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":5,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":0,"at":9,"value":"ld"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 074693a0-537e-11e7-a8d9-31dd9bc51397 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":9,"value":"ld"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":1},{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":9,"value":"ld"},"execOrder":2}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var commitTuple2 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":2,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":3,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":2,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":4},{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":9,"value":"ld"},"execOrder":5}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commitTuple3 = doc2.redo();
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":3,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r "},"execOrder":6},{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"r "},"execOrder":7}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":9,"value":"ld"},"execOrder":8}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var update6 = [{"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":5,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":9}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":0,"at":9,"value":"ld"},"execOrder":10}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

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

    var serverUpdate0 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":9,"value":"ld"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":2,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":3,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":2,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"W"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":9,"value":"ld"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":3,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"r "},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":4,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{},"invClusterSize":0},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"r "},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":9,"value":"ld"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"074497d0-537e-11e7-a8d9-31dd9bc51397","seqId":5,"context":{"vector":{"074497d0-537e-11e7-a8d9-31dd9bc51397":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qy"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"074693a0-537e-11e7-a8d9-31dd9bc51397","seqId":1,"context":{"vector":{"074693a0-537e-11e7-a8d9-31dd9bc51397":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":3,"load":{"type":0,"at":9,"value":"ld"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
