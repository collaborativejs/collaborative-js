var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/undo/redo/ins/ins/rm/ins/undo/rm - 10-ops-94fcdd82-c373-4f1a-8adb-83a0e3bfedb5", function() {
  var doc1 = new cljs.StringDocument("ee0529f0-537e-11e7-aaa4-71a6f1a446c7", 0, null);
  var doc2 = new cljs.StringDocument("ee074cd0-537e-11e7-aaa4-71a6f1a446c7", 0, null);
  var doc3 = new cljs.StringDocument("ee088550-537e-11e7-aaa4-71a6f1a446c7", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"4c64ed36-7f1a-4f22-8117-c63575126f38","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site ee0529f0-537e-11e7-aaa4-71a6f1a446c7 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"yw"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"twt"},"execOrder":1},{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yw"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":5,"value":"qq"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"qq"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":16,"value":"eqr"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple3 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":16,"value":"eqr"},"execOrder":5},{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"qq"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":16,"value":"wwt"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commitTuple4 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update7 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":3,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":16,"value":"tl"},"execOrder":9},{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":5,"value":"qq"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

  });

  it("Site ee074cd0-537e-11e7-aaa4-71a6f1a446c7 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"twt"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"twt"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yw"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"qq"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":16,"value":"eqr"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":16,"value":"eqr"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commit2 = [{"type":0,"at":16,"value":"wwt"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update6 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"qq"},"execOrder":6},{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":16,"value":"wwt"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":16,"value":"tl"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update7 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":8},{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":3,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":16,"value":"tl"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":5,"value":"qq"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

  });

  it("Site ee088550-537e-11e7-aaa4-71a6f1a446c7 operations should be executed without errors", function() {
    var update1 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"twt"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yw"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":16,"value":"eqr"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update3 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"qq"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var commitTuple2 = doc3.undo();
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update4 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":16,"value":"eqr"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var update5 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":16,"value":"eqr"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"qq"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var commit3 = [{"type":1,"at":10,"value":"r"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update7 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":16,"value":"wwt"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":3,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":16,"value":"tl"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = cljs.ops.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":5,"value":"qq"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = cljs.ops.string.exec(data3, updateTuple10.toExec);

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

    var serverUpdate0 = {"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"twt"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"yw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"qq"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":16,"value":"eqr"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":1,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":16,"value":"eqr"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":5,"value":"qq"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":0,"at":16,"value":"wwt"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"ee088550-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":10,"value":"r"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"ee074cd0-537e-11e7-aaa4-71a6f1a446c7","seqId":3,"context":{"vector":{"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{},"invClusterSize":0},"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee088550-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":3},"invCount":0,"load":{"type":1,"at":16,"value":"tl"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"ee0529f0-537e-11e7-aaa4-71a6f1a446c7","seqId":2,"context":{"vector":{"ee0529f0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"ee074cd0-537e-11e7-aaa4-71a6f1a446c7":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":0,"at":5,"value":"qq"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});