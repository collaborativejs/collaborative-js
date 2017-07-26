var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/rm/ins/undo/rm/undo/undo/rm/rm/ins - 10-ops-41824b4e-c0b0-4aea-bcfc-bf56dc3b79b4", function() {
  var doc1 = new clv.string.Document("d5029370-537e-11e7-96de-bd28cef87223", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"3668594c-7bc5-4678-a506-e66fd32fe968","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site d5029370-537e-11e7-96de-bd28cef87223 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":5,"value":"r"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":3,"value":"r"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":2,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":3,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":1,"at":6,"value":"Wo"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":3,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":4,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":4,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"Wo"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":1,"at":3,"value":"lo"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":2,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commit9 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":5,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":0,"at":5,"value":"t"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":6,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":7,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":10}];
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

    var serverUpdate0 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":2,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":3,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":3,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"r"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":4,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"Wo"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":4,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":6,"value":"Wo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":2,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"l"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":5,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":6,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"d5029370-537e-11e7-96de-bd28cef87223","seqId":7,"context":{"vector":{"d5029370-537e-11e7-96de-bd28cef87223":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"t"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
