var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/ins/ins/rm/undo/ins/rm/ins/ins/undo - 10-ops-af2e0978-afee-4b6d-8cc3-b78516be5009", function() {
  var doc1 = new cljs.StringDocument("71d00e60-5327-11e7-a7a6-57ac7a47bd53", 0, null);
  var doc2 = new cljs.StringDocument("71d20a30-5327-11e7-a7a6-57ac7a47bd53", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"fa27b03e-1a5e-4c80-8983-5fe038508e0e","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 71d00e60-5327-11e7-a7a6-57ac7a47bd53 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":8,"value":"wwt"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":4,"value":"yw"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"wwt"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":5,"value":"wWo"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"wWo"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"orl"},"execOrder":5},{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ye"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commitTuple5 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update6 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commit6 = [{"type":0,"at":12,"value":"ey"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update7 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"w"},"execOrder":8},{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"wWo"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":5,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ey"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

  });

  it("Site 71d20a30-5327-11e7-a7a6-57ac7a47bd53 operations should be executed without errors", function() {
    var update1 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"wwt"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":1,"at":7,"value":"orl"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"wWo"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":3,"value":"ye"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"orl"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commit3 = [{"type":0,"at":5,"value":"w"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update6 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ye"},"execOrder":6}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":7}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"w"},"execOrder":8}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"wWo"},"execOrder":9}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":5,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ey"},"execOrder":10}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"wwt"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"yw"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"wWo"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":1,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"orl"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":2,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"ye"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"71d20a30-5327-11e7-a7a6-57ac7a47bd53","seqId":3,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"w"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":4,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"wWo"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"71d00e60-5327-11e7-a7a6-57ac7a47bd53","seqId":5,"context":{"vector":{"71d00e60-5327-11e7-a7a6-57ac7a47bd53":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1},"71d20a30-5327-11e7-a7a6-57ac7a47bd53":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"ey"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});