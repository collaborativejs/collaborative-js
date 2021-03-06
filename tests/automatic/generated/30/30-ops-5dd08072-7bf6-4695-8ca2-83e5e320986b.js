var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/undo/redo/ins/rm/ins/undo/redo/undo/ins/ins/rm/rm/rm/rm/rm/rm/undo/ins/undo/ins/rm/undo/redo/undo/rm/undo/ins/ins/ins - 30-ops-5dd08072-7bf6-4695-8ca2-83e5e320986b", function() {
  var doc1 = new clv.string.Document("a27bef80-5380-11e7-b10b-2f562d5a6981", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"ae993830-8988-4280-97a4-6fa904a11d55","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site a27bef80-5380-11e7-b10b-2f562d5a6981 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commitTuple3 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"e"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":0,"at":2,"value":"t"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":1,"value":"e"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":1,"at":8,"value":"rl"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":2,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commit6 = [{"type":0,"at":9,"value":"qt"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":3,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qt"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commitTuple8 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"qt"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":0,"at":9,"value":"qt"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":0,"at":3,"value":"qr"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":2},"invClusterSize":2}},"size":1},"invCount":3,"load":{"type":1,"at":9,"value":"qt"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commit11 = [{"type":0,"at":6,"value":"eey"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":5,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"qr"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var commit12 = [{"type":1,"at":4,"value":"r"}];
    var commitTuple12 = doc1.commit(commit12);
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":6,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":5,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"eey"},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit13 = [{"type":1,"at":10,"value":"Wo"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":7,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":6,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit14 = [{"type":1,"at":8,"value":"o "}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = clv.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":8,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":7,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":10,"value":"Wo"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var commit15 = [{"type":1,"at":3,"value":"qle"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = clv.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":9,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":8,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"o "},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commit16 = [{"type":1,"at":4,"value":"yd"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = clv.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":10,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":9,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"qle"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commit17 = [{"type":1,"at":2,"value":"te"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = clv.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":11,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":10,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"yd"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var commitTuple18 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":12,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":11,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"te"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commit19 = [{"type":0,"at":4,"value":"eqw"}];
    var commitTuple19 = doc1.commit(commit19);
    data1 = clv.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":12,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":12,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"te"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var commitTuple20 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":13,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":12,"invCluster":{"1":2,"4":3,"12":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"eqw"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var commit21 = [{"type":0,"at":1,"value":"q"}];
    var commitTuple21 = doc1.commit(commit21);
    data1 = clv.string.exec(data1, commitTuple21.toExec);

    var update20 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":13,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":13,"invCluster":{"1":2,"4":3,"12":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"eqw"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var commit22 = [{"type":1,"at":3,"value":"te"}];
    var commitTuple22 = doc1.commit(commit22);
    data1 = clv.string.exec(data1, commitTuple22.toExec);

    var update21 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":14,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":13,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"q"},"execOrder":21}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var commitTuple23 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple23.toExec);

    var update22 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":14,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"te"},"execOrder":22}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

    var commitTuple24 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple24.toExec);

    var update23 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"te"},"execOrder":23}];
    var updateTuple23 = doc1.update(update23);
    data1 = clv.string.exec(data1, updateTuple23.toExec);

    var commitTuple25 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple25.toExec);

    var update24 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":3,"value":"te"},"execOrder":24}];
    var updateTuple24 = doc1.update(update24);
    data1 = clv.string.exec(data1, updateTuple24.toExec);

    var commit26 = [{"type":1,"at":3,"value":"t"}];
    var commitTuple26 = doc1.commit(commit26);
    data1 = clv.string.exec(data1, commitTuple26.toExec);

    var update25 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":2},"invClusterSize":5}},"size":1},"invCount":3,"load":{"type":0,"at":3,"value":"te"},"execOrder":25}];
    var updateTuple25 = doc1.update(update25);
    data1 = clv.string.exec(data1, updateTuple25.toExec);

    var commitTuple27 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple27.toExec);

    var update26 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":16,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"t"},"execOrder":26}];
    var updateTuple26 = doc1.update(update26);
    data1 = clv.string.exec(data1, updateTuple26.toExec);

    var commit28 = [{"type":0,"at":5,"value":"tw"}];
    var commitTuple28 = doc1.commit(commit28);
    data1 = clv.string.exec(data1, commitTuple28.toExec);

    var update27 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":16,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":16,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"t"},"execOrder":27}];
    var updateTuple27 = doc1.update(update27);
    data1 = clv.string.exec(data1, updateTuple27.toExec);

    var commit29 = [{"type":0,"at":5,"value":"w"}];
    var commitTuple29 = doc1.commit(commit29);
    data1 = clv.string.exec(data1, commitTuple29.toExec);

    var update28 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":17,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":16,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tw"},"execOrder":28}];
    var updateTuple28 = doc1.update(update28);
    data1 = clv.string.exec(data1, updateTuple28.toExec);

    var commit30 = [{"type":0,"at":8,"value":"q"}];
    var commitTuple30 = doc1.commit(commit30);
    data1 = clv.string.exec(data1, commitTuple30.toExec);

    var update29 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":18,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":17,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":29}];
    var updateTuple29 = doc1.update(update29);
    data1 = clv.string.exec(data1, updateTuple29.toExec);

    var update30 = [{"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":19,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":18,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"q"},"execOrder":30}];
    var updateTuple30 = doc1.update(update30);
    data1 = clv.string.exec(data1, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"e"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":1,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":1,"value":"e"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":2,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"t"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":3,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"qt"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"qt"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":1},"invClusterSize":2}},"size":1},"invCount":2,"load":{"type":0,"at":9,"value":"qt"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":4,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":2},"invClusterSize":2}},"size":1},"invCount":3,"load":{"type":1,"at":9,"value":"qt"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":5,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":4,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"qr"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":6,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":5,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"eey"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":7,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":6,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":8,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":7,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":10,"value":"Wo"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":9,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":8,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":8,"value":"o "},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":10,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":9,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"qle"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":11,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":10,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"yd"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":12,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":11,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"te"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":12,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":12,"invCluster":{"1":2,"4":3},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"te"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":13,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":12,"invCluster":{"1":2,"4":3,"12":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"eqw"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":13,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":13,"invCluster":{"1":2,"4":3,"12":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"eqw"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":14,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":13,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"q"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":14,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"te"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"te"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":3,"value":"te"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":15,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":2},"invClusterSize":5}},"size":1},"invCount":3,"load":{"type":0,"at":3,"value":"te"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":16,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":15,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"t"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":16,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":16,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"t"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":17,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":16,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"tw"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":18,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":17,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"w"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"a27bef80-5380-11e7-b10b-2f562d5a6981","seqId":19,"context":{"vector":{"a27bef80-5380-11e7-b10b-2f562d5a6981":{"seqId":18,"invCluster":{"1":2,"4":3,"12":1,"13":1,"15":3,"16":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"q"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
