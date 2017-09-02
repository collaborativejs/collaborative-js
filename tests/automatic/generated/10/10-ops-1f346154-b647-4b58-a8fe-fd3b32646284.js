var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/undo/rm/undo/redo/undo/rm/undo/undo - 10-ops-1f346154-b647-4b58-a8fe-fd3b32646284", function() {
  var doc1 = new clv.string.Document("58d9c160-537e-11e7-b31b-4d910f8e09d6", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"ecca50c5-ac15-4ede-b12f-0375add82dd0","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 58d9c160-537e-11e7-b31b-4d910f8e09d6 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":9,"value":"ld"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":9,"value":"ld"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commitTuple3 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":2,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":7,"value":"or"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":2,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple6 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":7,"value":"or"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":1,"at":7,"value":"or"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":1,"at":5,"value":" "}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":2},"invClusterSize":2}},"size":1},"invCount":3,"load":{"type":0,"at":7,"value":"or"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":4,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" "},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":4,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" "},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":1,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":9,"value":"ld"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":9,"value":"ld"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":2,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":2,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":7,"value":"or"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":1,"at":7,"value":"or"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":3,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":2},"invClusterSize":2}},"size":1},"invCount":3,"load":{"type":0,"at":7,"value":"or"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":4,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":3,"invCluster":{"2":1,"3":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":" "},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":4,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":4,"invCluster":{"2":1,"3":3},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" "},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"58d9c160-537e-11e7-b31b-4d910f8e09d6","seqId":1,"context":{"vector":{"58d9c160-537e-11e7-b31b-4d910f8e09d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":9,"value":"ld"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
