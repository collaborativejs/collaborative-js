var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/rm/undo/ins/rm/ins/undo/undo/undo - 10-ops-0a9cd81c-aafe-4f1a-ae8b-1c321df04fd9", function() {
  var doc1 = new clv.string.Document("0d3bd860-537e-11e7-8ec0-29393c2ac897", 0, null);
  var doc2 = new clv.string.Document("0d3dd430-537e-11e7-8ec0-29393c2ac897", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"ba13bfc1-18f0-4040-9c6d-239c2f2386e9","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 0d3bd860-537e-11e7-8ec0-29393c2ac897 operations should be executed without errors", function() {
    var update1 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":10,"value":"w"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":1,"value":"qrq"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update2 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2},{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qrq"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ewr"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var commit2 = [{"type":0,"at":4,"value":"rwr"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":11,"value":"ewr"},"execOrder":5},{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rwr"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit3 = [{"type":1,"at":5,"value":"wr"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"o"},"execOrder":7},{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"wr"},"execOrder":8}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"wr"},"execOrder":9}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"w"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

  });

  it("Site 0d3dd430-537e-11e7-8ec0-29393c2ac897 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":10,"value":"w"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":4,"value":"o"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var update1 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":10,"value":"w"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qrq"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":11,"value":"ewr"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ewr"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":11,"value":"ewr"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple5.toExec);

    var update6 = [{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rwr"},"execOrder":6},{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"o"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"wr"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var commitTuple6 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple6.toExec);

    var update8 = [{"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"wr"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"w"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

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

    var serverUpdate0 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":10,"value":"w"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"qrq"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"ewr"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":11,"value":"ewr"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rwr"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":2,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"o"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"wr"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"0d3bd860-537e-11e7-8ec0-29393c2ac897","seqId":3,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"0d3bd860-537e-11e7-8ec0-29393c2ac897":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"wr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"0d3dd430-537e-11e7-8ec0-29393c2ac897","seqId":1,"context":{"vector":{"0d3dd430-537e-11e7-8ec0-29393c2ac897":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":10,"value":"w"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
