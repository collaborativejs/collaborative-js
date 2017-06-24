var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/undo/ins/undo/ins/rm/ins/ins/ins - 10-ops-19d22e02-a2aa-493a-90c5-343aa0eea7ef", function() {
  var doc1 = new cljs.StringDocument("f2813c30-537e-11e7-adc6-6fcebf199f5e", 0, null);
  var doc2 = new cljs.StringDocument("f283ad30-537e-11e7-adc6-6fcebf199f5e", 0, null);
  var doc3 = new cljs.StringDocument("f28533d0-537e-11e7-adc6-6fcebf199f5e", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"34870248-d285-4ad5-a988-cd14b29ddc5f","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site f2813c30-537e-11e7-adc6-6fcebf199f5e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"twq"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"yy"},"execOrder":1},{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"twq"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":8,"value":"ee"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yy"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple3 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":4},{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ee"},"execOrder":5}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ee"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"ye"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"t"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"ye"},"execOrder":9},{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":14,"value":"rld"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

  });

  it("Site f283ad30-537e-11e7-adc6-6fcebf199f5e operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":6,"value":"yy"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"yy"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commitTuple2 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"twq"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yy"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":4},{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ee"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ee"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commit3 = [{"type":0,"at":15,"value":"ye"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update6 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"ye"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commit4 = [{"type":1,"at":14,"value":"rld"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"t"},"execOrder":8},{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"ye"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":14,"value":"rld"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

  });

  it("Site f28533d0-537e-11e7-adc6-6fcebf199f5e operations should be executed without errors", function() {
    var update1 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"yy"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = cljs.ops.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"twq"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = cljs.ops.string.exec(data3, updateTuple2.toExec);

    var commit1 = [{"type":0,"at":3,"value":"e"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = cljs.ops.string.exec(data3, commitTuple1.toExec);

    var update3 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yy"},"execOrder":3},{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":4}];
    var updateTuple3 = doc3.update(update3);
    data3 = cljs.ops.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ee"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = cljs.ops.string.exec(data3, updateTuple4.toExec);

    var commit2 = [{"type":0,"at":12,"value":"ye"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = cljs.ops.string.exec(data3, commitTuple2.toExec);

    var update5 = [{"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ee"},"execOrder":6}];
    var updateTuple5 = doc3.update(update5);
    data3 = cljs.ops.string.exec(data3, updateTuple5.toExec);

    var commit3 = [{"type":0,"at":14,"value":"t"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = cljs.ops.string.exec(data3, commitTuple3.toExec);

    var update6 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"ye"},"execOrder":7}];
    var updateTuple6 = doc3.update(update6);
    data3 = cljs.ops.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"t"},"execOrder":8}];
    var updateTuple7 = doc3.update(update7);
    data3 = cljs.ops.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"ye"},"execOrder":9},{"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":14,"value":"rld"},"execOrder":10}];
    var updateTuple8 = doc3.update(update8);
    data3 = cljs.ops.string.exec(data3, updateTuple8.toExec);

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

    var serverUpdate0 = {"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"yy"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"twq"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yy"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":1,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"e"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ee"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"f2813c30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ee"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":12,"value":"ye"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"f28533d0-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":14,"value":"t"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":2,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":15,"value":"ye"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"f283ad30-537e-11e7-adc6-6fcebf199f5e","seqId":3,"context":{"vector":{"f283ad30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"f2813c30-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"f28533d0-537e-11e7-adc6-6fcebf199f5e":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":1,"at":14,"value":"rld"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});