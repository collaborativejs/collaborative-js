var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/undo/redo/rm/rm/rm/rm/ins/rm/undo/rm/rm/ins/rm/ins/undo/rm/ins/ins/ins/rm/rm/undo/undo/ins/undo/ins/undo/undo - 30-ops-36225282-fba1-4cbf-8e0d-c5e67ef86771", function() {
  var doc1 = new clv.string.Document("e4180c30-5380-11e7-9a21-43a6c91962e2", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"fadcc11b-1fa7-4ee2-82c5-1719e9030440","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site e4180c30-5380-11e7-9a21-43a6c91962e2 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"r"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":12,"value":"r"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commitTuple3 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"r"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple4 = doc1.redo();
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":12,"value":"r"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":1,"at":8,"value":"or"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":12,"value":"r"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commit6 = [{"type":1,"at":9,"value":"d"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":3,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"or"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":1,"at":6,"value":" "}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":4,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":9,"value":"d"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":1,"at":2,"value":"ll"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":5,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":4,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":" "},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var commit9 = [{"type":0,"at":6,"value":"err"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.ops.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":6,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":5,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":1,"at":2,"value":"roW"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.ops.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":7,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":6,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"err"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple11 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":8,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":7,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"roW"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var commit12 = [{"type":1,"at":3,"value":"o"}];
    var commitTuple12 = doc1.commit(commit12);
    data1 = clv.ops.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":8,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":8,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"roW"},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var commit13 = [{"type":1,"at":2,"value":"r"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.ops.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":9,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":8,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"o"},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var commit14 = [{"type":0,"at":3,"value":"et"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = clv.ops.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":10,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":9,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"r"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

    var commit15 = [{"type":1,"at":6,"value":"err"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = clv.ops.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":11,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":10,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"et"},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.ops.string.exec(data1, updateTuple14.toExec);

    var commit16 = [{"type":0,"at":6,"value":"yrq"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = clv.ops.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":12,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":11,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"err"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.ops.string.exec(data1, updateTuple15.toExec);

    var commitTuple17 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":13,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":12,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"yrq"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.ops.string.exec(data1, updateTuple16.toExec);

    var commit18 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = clv.ops.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":13,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":13,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yrq"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.ops.string.exec(data1, updateTuple17.toExec);

    var commit19 = [{"type":0,"at":5,"value":"wy"}];
    var commitTuple19 = doc1.commit(commit19);
    data1 = clv.ops.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":14,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":13,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.ops.string.exec(data1, updateTuple18.toExec);

    var commit20 = [{"type":0,"at":6,"value":"rww"}];
    var commitTuple20 = doc1.commit(commit20);
    data1 = clv.ops.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":15,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":14,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"wy"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.ops.string.exec(data1, updateTuple19.toExec);

    var commit21 = [{"type":0,"at":9,"value":"r"}];
    var commitTuple21 = doc1.commit(commit21);
    data1 = clv.ops.string.exec(data1, commitTuple21.toExec);

    var update20 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":16,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":15,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"rww"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.ops.string.exec(data1, updateTuple20.toExec);

    var commit22 = [{"type":1,"at":10,"value":"yr"}];
    var commitTuple22 = doc1.commit(commit22);
    data1 = clv.ops.string.exec(data1, commitTuple22.toExec);

    var update21 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":17,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":16,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"r"},"execOrder":21}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.ops.string.exec(data1, updateTuple21.toExec);

    var commit23 = [{"type":1,"at":0,"value":"HWe"}];
    var commitTuple23 = doc1.commit(commit23);
    data1 = clv.ops.string.exec(data1, commitTuple23.toExec);

    var update22 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":18,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":17,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":10,"value":"yr"},"execOrder":22}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.ops.string.exec(data1, updateTuple22.toExec);

    var commitTuple24 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple24.toExec);

    var update23 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":19,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":18,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"HWe"},"execOrder":23}];
    var updateTuple23 = doc1.update(update23);
    data1 = clv.ops.string.exec(data1, updateTuple23.toExec);

    var commitTuple25 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple25.toExec);

    var update24 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":19,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":19,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"HWe"},"execOrder":24}];
    var updateTuple24 = doc1.update(update24);
    data1 = clv.ops.string.exec(data1, updateTuple24.toExec);

    var commit26 = [{"type":0,"at":4,"value":"wrq"}];
    var commitTuple26 = doc1.commit(commit26);
    data1 = clv.ops.string.exec(data1, commitTuple26.toExec);

    var update25 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":18,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":18,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":10,"value":"yr"},"execOrder":25}];
    var updateTuple25 = doc1.update(update25);
    data1 = clv.ops.string.exec(data1, updateTuple25.toExec);

    var commitTuple27 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple27.toExec);

    var update26 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":20,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":19,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"wrq"},"execOrder":26}];
    var updateTuple26 = doc1.update(update26);
    data1 = clv.ops.string.exec(data1, updateTuple26.toExec);

    var commit28 = [{"type":0,"at":9,"value":"q"}];
    var commitTuple28 = doc1.commit(commit28);
    data1 = clv.ops.string.exec(data1, commitTuple28.toExec);

    var update27 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":20,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":20,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"wrq"},"execOrder":27}];
    var updateTuple27 = doc1.update(update27);
    data1 = clv.ops.string.exec(data1, updateTuple27.toExec);

    var commitTuple29 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple29.toExec);

    var update28 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":21,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":20,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1,"20":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"q"},"execOrder":28}];
    var updateTuple28 = doc1.update(update28);
    data1 = clv.ops.string.exec(data1, updateTuple28.toExec);

    var commitTuple30 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple30.toExec);

    var update29 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":21,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":21,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1,"20":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"q"},"execOrder":29}];
    var updateTuple29 = doc1.update(update29);
    data1 = clv.ops.string.exec(data1, updateTuple29.toExec);

    var update30 = [{"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":17,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":17,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"r"},"execOrder":30}];
    var updateTuple30 = doc1.update(update30);
    data1 = clv.ops.string.exec(data1, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"r"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":12,"value":"r"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":2,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":12,"value":"r"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":3,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"or"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":4,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":9,"value":"d"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":5,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":4,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":" "},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":6,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":5,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":7,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":6,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"err"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":8,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":7,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"roW"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":8,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":8,"invCluster":{"2":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"roW"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":9,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":8,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"o"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":10,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":9,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"r"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":11,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":10,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"et"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":12,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":11,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":6,"value":"err"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":13,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":12,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"yrq"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":13,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":13,"invCluster":{"2":2,"8":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":1,"at":6,"value":"yrq"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":14,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":13,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":15,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":14,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"wy"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":16,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":15,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"rww"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":17,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":16,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"r"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":18,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":17,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":10,"value":"yr"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":19,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":18,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"HWe"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":19,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":19,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"HWe"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":18,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":18,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":0,"at":10,"value":"yr"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":20,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":19,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"wrq"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":20,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":20,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"wrq"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":21,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":20,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1,"20":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"q"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":21,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":21,"invCluster":{"2":2,"8":1,"13":1,"18":1,"19":1,"20":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"q"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"e4180c30-5380-11e7-9a21-43a6c91962e2","seqId":17,"context":{"vector":{"e4180c30-5380-11e7-9a21-43a6c91962e2":{"seqId":17,"invCluster":{"2":2,"8":1,"13":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"r"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
