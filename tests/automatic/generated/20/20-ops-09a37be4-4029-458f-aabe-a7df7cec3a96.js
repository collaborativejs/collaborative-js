var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/rm/ins/rm/ins/ins/rm/rm/rm/rm/undo/ins/rm/undo/ins/undo/rm/undo/redo - 20-ops-09a37be4-4029-458f-aabe-a7df7cec3a96", function() {
  var doc1 = new clv.string.Document("a0310a90-537f-11e7-a48b-5fb2a9025e8f", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"debfb2e8-87be-466b-a097-f6eb6d6dd2f0","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site a0310a90-537f-11e7-a48b-5fb2a9025e8f operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"lo "}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":1,"at":7,"value":"or"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":1,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo "},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":0,"at":2,"value":"tt"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":2,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":1,"at":8,"value":"W"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":3,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"tt"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit6 = [{"type":0,"at":3,"value":"r"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":4,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"W"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":0,"at":10,"value":"w"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":5,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":1,"at":9,"value":"lwd"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":6,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"w"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var commit9 = [{"type":1,"at":5,"value":"ll"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.ops.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":7,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":9,"value":"lwd"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":1,"at":1,"value":"et"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.ops.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":8,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var commit11 = [{"type":1,"at":2,"value":"to "}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.ops.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":9,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"et"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var commitTuple12 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":10,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"to "},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var commit13 = [{"type":0,"at":2,"value":"ey"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.ops.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":10,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":10,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"to "},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var commit14 = [{"type":1,"at":4,"value":"t"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = clv.ops.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":11,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":10,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"ey"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

    var commitTuple15 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":12,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":11,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"t"},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.ops.string.exec(data1, updateTuple14.toExec);

    var commit16 = [{"type":0,"at":5,"value":"qw"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = clv.ops.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":12,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":12,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"t"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.ops.string.exec(data1, updateTuple15.toExec);

    var commitTuple17 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":13,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":12,"invCluster":{"1":1,"10":1,"12":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qw"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.ops.string.exec(data1, updateTuple16.toExec);

    var commit18 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = clv.ops.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":13,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":13,"invCluster":{"1":1,"10":1,"12":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"qw"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.ops.string.exec(data1, updateTuple17.toExec);

    var commitTuple19 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":13,"invCluster":{"1":1,"10":1,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.ops.string.exec(data1, updateTuple18.toExec);

    var commitTuple20 = doc1.redo();
    data1 = clv.ops.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":14,"invCluster":{"1":1,"10":1,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.ops.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":14,"invCluster":{"1":1,"10":1,"12":1,"13":1,"14":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":0,"value":"H"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.ops.string.exec(data1, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":1,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo "},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":2,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"or"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":3,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"tt"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":4,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"W"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":5,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"r"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":6,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"w"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":7,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":9,"value":"lwd"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":8,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"ll"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":9,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"et"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":10,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"to "},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":10,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":10,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"to "},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":11,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":10,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"ey"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":12,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":11,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"t"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":12,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":12,"invCluster":{"1":1,"10":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"t"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":13,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":12,"invCluster":{"1":1,"10":1,"12":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"qw"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":13,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":13,"invCluster":{"1":1,"10":1,"12":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"qw"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":13,"invCluster":{"1":1,"10":1,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":14,"invCluster":{"1":1,"10":1,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"a0310a90-537f-11e7-a48b-5fb2a9025e8f","seqId":14,"context":{"vector":{"a0310a90-537f-11e7-a48b-5fb2a9025e8f":{"seqId":14,"invCluster":{"1":1,"10":1,"12":1,"13":1,"14":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":0,"value":"H"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
