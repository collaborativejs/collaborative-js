var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/undo/undo/ins/rm/rm/undo/redo/ins - 10-ops-cd9c733a-bc81-4cf5-bca0-467a409c023f", function() {
  var doc1 = new cljs.StringDocument("63653010-537e-11e7-8e30-9514328ff5b2", 0, null);
  var doc2 = new cljs.StringDocument("63677a00-537e-11e7-8e30-9514328ff5b2", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"2665da74-3706-46d9-98ab-6297d9af5cc7","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 63653010-537e-11e7-8e30-9514328ff5b2 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"tt"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tt"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":3,"value":"rqr"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple3 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3},{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"rqr"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rqr"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commitTuple4 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var commit5 = [{"type":0,"at":5,"value":"wqy"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":6},{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"tt"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"wqy"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rw"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 63677a00-537e-11e7-8e30-9514328ff5b2 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":1,"value":"ell"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tt"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":8,"value":"ld"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commitTuple3 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"rqr"},"execOrder":4},{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rqr"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"tt"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commitTuple4 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"wqy"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit5 = [{"type":0,"at":4,"value":"rw"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rw"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new cljs.StringDocument(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = cljs.ops.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"tt"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"ld"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"rqr"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"rqr"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"ld"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":1,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"tt"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"63653010-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"wqy"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":2,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":8,"value":"ld"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"63677a00-537e-11e7-8e30-9514328ff5b2","seqId":3,"context":{"vector":{"63677a00-537e-11e7-8e30-9514328ff5b2":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"63653010-537e-11e7-8e30-9514328ff5b2":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"rw"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});