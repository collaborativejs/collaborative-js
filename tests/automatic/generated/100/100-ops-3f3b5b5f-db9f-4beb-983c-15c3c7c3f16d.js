var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/ins/ins/rm/ins/ins/rm/rm/rm/ins/rm/undo/undo/rm/rm/rm/rm/rm/undo/rm/undo/redo/ins/rm/rm/undo/rm/undo/rm/undo/undo/rm/undo/redo/undo/rm/undo/ins/undo/ins/ins/ins/rm/ins/rm/ins/ins/ins/ins/undo/redo/undo/rm/ins/rm/ins/undo/ins/ins/undo/undo/ins/rm/undo/undo/ins/ins/rm/ins/rm/undo/redo/ins/ins/rm/undo/undo/rm/ins/ins/ins/rm/ins/undo/undo/undo/undo/rm/rm/undo/undo/redo/rm/rm/rm/ins/rm/undo/rm/undo - 100-ops-3f3b5b5f-db9f-4beb-983c-15c3c7c3f16d", function() {
  var doc1 = new cljs.StringDocument("c944c9a0-535a-11e7-9a54-0f552895e557", 0, null);
  var doc2 = new cljs.StringDocument("c946c570-535a-11e7-9a54-0f552895e557", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"01fa0fe9-653c-4907-a2ac-88c6d62ddc62","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site c944c9a0-535a-11e7-9a54-0f552895e557 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":3,"value":"lo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":3,"value":"er"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"wyw"},"execOrder":1},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"er"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":12,"value":"qw"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"et"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit4 = [{"type":1,"at":2,"value":"e"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update4 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qw"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit5 = [{"type":0,"at":9,"value":"rr"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"e"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rr"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commit6 = [{"type":0,"at":17,"value":"q"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update7 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"et"},"execOrder":8},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"q"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit7 = [{"type":1,"at":3,"value":"we"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update8 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"wyw"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qtw"},"execOrder":11},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"we"},"execOrder":12}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r W"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r W"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"qtw"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"qre"},"execOrder":16},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":17,"value":"ed"},"execOrder":18},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qr"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var commit8 = [{"type":1,"at":5,"value":"err"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update15 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var commit9 = [{"type":1,"at":5,"value":"r"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update16 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"err"},"execOrder":21}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var update17 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":22}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":15,"value":"qlq"},"execOrder":23}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var commit10 = [{"type":0,"at":13,"value":"t"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var commit11 = [{"type":1,"at":1,"value":"ly"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = cljs.ops.string.exec(data1, commitTuple11.toExec);

    var update19 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":24},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":25}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var commitTuple12 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple12.toExec);

    var update20 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"ly"},"execOrder":26}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var commitTuple13 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple13.toExec);

    var update21 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"ly"},"execOrder":27}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var commit14 = [{"type":1,"at":4,"value":"r "}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = cljs.ops.string.exec(data1, commitTuple14.toExec);

    var update22 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":28}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var commit15 = [{"type":1,"at":6,"value":"r"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = cljs.ops.string.exec(data1, commitTuple15.toExec);

    var update23 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"r "},"execOrder":29}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var commit16 = [{"type":1,"at":4,"value":"Wo"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = cljs.ops.string.exec(data1, commitTuple16.toExec);

    var update24 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":30}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

    var commit17 = [{"type":1,"at":1,"value":"l"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = cljs.ops.string.exec(data1, commitTuple17.toExec);

    var update25 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":31}];
    var updateTuple25 = doc1.update(update25);
    data1 = cljs.ops.string.exec(data1, updateTuple25.toExec);

    var commit18 = [{"type":1,"at":1,"value":"y"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = cljs.ops.string.exec(data1, commitTuple18.toExec);

    var update26 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":32}];
    var updateTuple26 = doc1.update(update26);
    data1 = cljs.ops.string.exec(data1, updateTuple26.toExec);

    var commitTuple19 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple19.toExec);

    var update27 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"y"},"execOrder":33}];
    var updateTuple27 = doc1.update(update27);
    data1 = cljs.ops.string.exec(data1, updateTuple27.toExec);

    var update28 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"y"},"execOrder":34}];
    var updateTuple28 = doc1.update(update28);
    data1 = cljs.ops.string.exec(data1, updateTuple28.toExec);

    var update29 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rq"},"execOrder":35}];
    var updateTuple29 = doc1.update(update29);
    data1 = cljs.ops.string.exec(data1, updateTuple29.toExec);

    var commit20 = [{"type":1,"at":6,"value":"wr"}];
    var commitTuple20 = doc1.commit(commit20);
    data1 = cljs.ops.string.exec(data1, commitTuple20.toExec);

    var update30 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"ryy"},"execOrder":36},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"qwr"},"execOrder":37}];
    var updateTuple30 = doc1.update(update30);
    data1 = cljs.ops.string.exec(data1, updateTuple30.toExec);

    var commitTuple21 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple21.toExec);

    var update31 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wr"},"execOrder":38}];
    var updateTuple31 = doc1.update(update31);
    data1 = cljs.ops.string.exec(data1, updateTuple31.toExec);

    var update32 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wr"},"execOrder":39}];
    var updateTuple32 = doc1.update(update32);
    data1 = cljs.ops.string.exec(data1, updateTuple32.toExec);

    var commitTuple22 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple22.toExec);

    var update33 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"qwr"},"execOrder":40}];
    var updateTuple33 = doc1.update(update33);
    data1 = cljs.ops.string.exec(data1, updateTuple33.toExec);

    var commit23 = [{"type":0,"at":3,"value":"qrr"}];
    var commitTuple23 = doc1.commit(commit23);
    data1 = cljs.ops.string.exec(data1, commitTuple23.toExec);

    var update34 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":1},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"wr"},"execOrder":41}];
    var updateTuple34 = doc1.update(update34);
    data1 = cljs.ops.string.exec(data1, updateTuple34.toExec);

    var update35 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qrr"},"execOrder":42}];
    var updateTuple35 = doc1.update(update35);
    data1 = cljs.ops.string.exec(data1, updateTuple35.toExec);

    var commit24 = [{"type":1,"at":5,"value":"ryy"}];
    var commitTuple24 = doc1.commit(commit24);
    data1 = cljs.ops.string.exec(data1, commitTuple24.toExec);

    var update36 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"ryy"},"execOrder":43}];
    var updateTuple36 = doc1.update(update36);
    data1 = cljs.ops.string.exec(data1, updateTuple36.toExec);

    var update37 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"ryy"},"execOrder":44}];
    var updateTuple37 = doc1.update(update37);
    data1 = cljs.ops.string.exec(data1, updateTuple37.toExec);

    var update38 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hyq"},"execOrder":45}];
    var updateTuple38 = doc1.update(update38);
    data1 = cljs.ops.string.exec(data1, updateTuple38.toExec);

    var commit25 = [{"type":1,"at":0,"value":"rqq"}];
    var commitTuple25 = doc1.commit(commit25);
    data1 = cljs.ops.string.exec(data1, commitTuple25.toExec);

    var update39 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":46},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rqq"},"execOrder":47}];
    var updateTuple39 = doc1.update(update39);
    data1 = cljs.ops.string.exec(data1, updateTuple39.toExec);

    var update40 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wt"},"execOrder":48}];
    var updateTuple40 = doc1.update(update40);
    data1 = cljs.ops.string.exec(data1, updateTuple40.toExec);

    var update41 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rer"},"execOrder":49}];
    var updateTuple41 = doc1.update(update41);
    data1 = cljs.ops.string.exec(data1, updateTuple41.toExec);

    var commitTuple26 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple26.toExec);

    var update42 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":50}];
    var updateTuple42 = doc1.update(update42);
    data1 = cljs.ops.string.exec(data1, updateTuple42.toExec);

    var update43 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":51},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"rqq"},"execOrder":52}];
    var updateTuple43 = doc1.update(update43);
    data1 = cljs.ops.string.exec(data1, updateTuple43.toExec);

    var commit27 = [{"type":1,"at":1,"value":"r"}];
    var commitTuple27 = doc1.commit(commit27);
    data1 = cljs.ops.string.exec(data1, commitTuple27.toExec);

    var update44 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":53}];
    var updateTuple44 = doc1.update(update44);
    data1 = cljs.ops.string.exec(data1, updateTuple44.toExec);

    var update45 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":54}];
    var updateTuple45 = doc1.update(update45);
    data1 = cljs.ops.string.exec(data1, updateTuple45.toExec);

    var commitTuple28 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple28.toExec);

    var commit29 = [{"type":1,"at":0,"value":"er"}];
    var commitTuple29 = doc1.commit(commit29);
    data1 = cljs.ops.string.exec(data1, commitTuple29.toExec);

    var update46 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"r"},"execOrder":55},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":56}];
    var updateTuple46 = doc1.update(update46);
    data1 = cljs.ops.string.exec(data1, updateTuple46.toExec);

    var commitTuple30 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple30.toExec);

    var update47 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":57}];
    var updateTuple47 = doc1.update(update47);
    data1 = cljs.ops.string.exec(data1, updateTuple47.toExec);

    var commitTuple31 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple31.toExec);

    var update48 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"er"},"execOrder":58}];
    var updateTuple48 = doc1.update(update48);
    data1 = cljs.ops.string.exec(data1, updateTuple48.toExec);

    var update49 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"ryy"},"execOrder":59}];
    var updateTuple49 = doc1.update(update49);
    data1 = cljs.ops.string.exec(data1, updateTuple49.toExec);

    var commit32 = [{"type":1,"at":3,"value":"yqq"}];
    var commitTuple32 = doc1.commit(commit32);
    data1 = cljs.ops.string.exec(data1, commitTuple32.toExec);

    var update50 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rer"},"execOrder":60}];
    var updateTuple50 = doc1.update(update50);
    data1 = cljs.ops.string.exec(data1, updateTuple50.toExec);

    var commitTuple33 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple33.toExec);

    var update51 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":61}];
    var updateTuple51 = doc1.update(update51);
    data1 = cljs.ops.string.exec(data1, updateTuple51.toExec);

    var commitTuple34 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple34.toExec);

    var update52 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":62}];
    var updateTuple52 = doc1.update(update52);
    data1 = cljs.ops.string.exec(data1, updateTuple52.toExec);

    var commitTuple35 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple35.toExec);

    var update53 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":1},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":63}];
    var updateTuple53 = doc1.update(update53);
    data1 = cljs.ops.string.exec(data1, updateTuple53.toExec);

    var update54 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":2},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":3,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":64}];
    var updateTuple54 = doc1.update(update54);
    data1 = cljs.ops.string.exec(data1, updateTuple54.toExec);

    var commit36 = [{"type":1,"at":6,"value":"wt"}];
    var commitTuple36 = doc1.commit(commit36);
    data1 = cljs.ops.string.exec(data1, commitTuple36.toExec);

    var update55 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wt"},"execOrder":65},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"qq"},"execOrder":66}];
    var updateTuple55 = doc1.update(update55);
    data1 = cljs.ops.string.exec(data1, updateTuple55.toExec);

    var commitTuple37 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple37.toExec);

    var update56 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wt"},"execOrder":67}];
    var updateTuple56 = doc1.update(update56);
    data1 = cljs.ops.string.exec(data1, updateTuple56.toExec);

    var update57 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wt"},"execOrder":68}];
    var updateTuple57 = doc1.update(update57);
    data1 = cljs.ops.string.exec(data1, updateTuple57.toExec);

    var commit38 = [{"type":0,"at":4,"value":"wq"}];
    var commitTuple38 = doc1.commit(commit38);
    data1 = cljs.ops.string.exec(data1, commitTuple38.toExec);

    var commitTuple39 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple39.toExec);

    var update58 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ry"},"execOrder":69},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wq"},"execOrder":70}];
    var updateTuple58 = doc1.update(update58);
    data1 = cljs.ops.string.exec(data1, updateTuple58.toExec);

    var commit40 = [{"type":0,"at":2,"value":"qq"}];
    var commitTuple40 = doc1.commit(commit40);
    data1 = cljs.ops.string.exec(data1, commitTuple40.toExec);

    var update59 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"wq"},"execOrder":71}];
    var updateTuple59 = doc1.update(update59);
    data1 = cljs.ops.string.exec(data1, updateTuple59.toExec);

    var commit41 = [{"type":0,"at":2,"value":"r"}];
    var commitTuple41 = doc1.commit(commit41);
    data1 = cljs.ops.string.exec(data1, commitTuple41.toExec);

    var update60 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qq"},"execOrder":72}];
    var updateTuple60 = doc1.update(update60);
    data1 = cljs.ops.string.exec(data1, updateTuple60.toExec);

    var commit42 = [{"type":0,"at":1,"value":"w"}];
    var commitTuple42 = doc1.commit(commit42);
    data1 = cljs.ops.string.exec(data1, commitTuple42.toExec);

    var update61 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":27,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":73}];
    var updateTuple61 = doc1.update(update61);
    data1 = cljs.ops.string.exec(data1, updateTuple61.toExec);

    var update62 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":28,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":27,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":74}];
    var updateTuple62 = doc1.update(update62);
    data1 = cljs.ops.string.exec(data1, updateTuple62.toExec);

    var update63 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ry"},"execOrder":75}];
    var updateTuple63 = doc1.update(update63);
    data1 = cljs.ops.string.exec(data1, updateTuple63.toExec);

    var commit43 = [{"type":1,"at":2,"value":"q"}];
    var commitTuple43 = doc1.commit(commit43);
    data1 = cljs.ops.string.exec(data1, commitTuple43.toExec);

    var update64 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"qq"},"execOrder":76}];
    var updateTuple64 = doc1.update(update64);
    data1 = cljs.ops.string.exec(data1, updateTuple64.toExec);

    var commit44 = [{"type":0,"at":2,"value":"e"}];
    var commitTuple44 = doc1.commit(commit44);
    data1 = cljs.ops.string.exec(data1, commitTuple44.toExec);

    var update65 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1},"invClusterSize":12},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":1,"value":"qq"},"execOrder":77},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":29,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":28,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"20":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"q"},"execOrder":78}];
    var updateTuple65 = doc1.update(update65);
    data1 = cljs.ops.string.exec(data1, updateTuple65.toExec);

    var commit45 = [{"type":1,"at":3,"value":"q"}];
    var commitTuple45 = doc1.commit(commit45);
    data1 = cljs.ops.string.exec(data1, commitTuple45.toExec);

    var update66 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":30,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":29,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":79}];
    var updateTuple66 = doc1.update(update66);
    data1 = cljs.ops.string.exec(data1, updateTuple66.toExec);

    var commit46 = [{"type":0,"at":6,"value":"ew"}];
    var commitTuple46 = doc1.commit(commit46);
    data1 = cljs.ops.string.exec(data1, commitTuple46.toExec);

    var update67 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":31,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":30,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"q"},"execOrder":80}];
    var updateTuple67 = doc1.update(update67);
    data1 = cljs.ops.string.exec(data1, updateTuple67.toExec);

    var update68 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":32,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ew"},"execOrder":81}];
    var updateTuple68 = doc1.update(update68);
    data1 = cljs.ops.string.exec(data1, updateTuple68.toExec);

    var commit47 = [{"type":0,"at":8,"value":"w"}];
    var commitTuple47 = doc1.commit(commit47);
    data1 = cljs.ops.string.exec(data1, commitTuple47.toExec);

    var commit48 = [{"type":0,"at":2,"value":"yrr"}];
    var commitTuple48 = doc1.commit(commit48);
    data1 = cljs.ops.string.exec(data1, commitTuple48.toExec);

    var update69 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ryw"},"execOrder":82},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":33,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":32,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"w"},"execOrder":83}];
    var updateTuple69 = doc1.update(update69);
    data1 = cljs.ops.string.exec(data1, updateTuple69.toExec);

    var commit49 = [{"type":0,"at":6,"value":"yww"}];
    var commitTuple49 = doc1.commit(commit49);
    data1 = cljs.ops.string.exec(data1, commitTuple49.toExec);

    var update70 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":34,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"yrr"},"execOrder":84}];
    var updateTuple70 = doc1.update(update70);
    data1 = cljs.ops.string.exec(data1, updateTuple70.toExec);

    var update71 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":34,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yww"},"execOrder":85}];
    var updateTuple71 = doc1.update(update71);
    data1 = cljs.ops.string.exec(data1, updateTuple71.toExec);

    var commitTuple50 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple50.toExec);

    var update72 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rq"},"execOrder":86},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yww"},"execOrder":87}];
    var updateTuple72 = doc1.update(update72);
    data1 = cljs.ops.string.exec(data1, updateTuple72.toExec);

    var commitTuple51 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple51.toExec);

    var update73 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yww"},"execOrder":88},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"yww"},"execOrder":89}];
    var updateTuple73 = doc1.update(update73);
    data1 = cljs.ops.string.exec(data1, updateTuple73.toExec);

    var commitTuple52 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple52.toExec);

    var update74 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":90}];
    var updateTuple74 = doc1.update(update74);
    data1 = cljs.ops.string.exec(data1, updateTuple74.toExec);

    var update75 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"yww"},"execOrder":91}];
    var updateTuple75 = doc1.update(update75);
    data1 = cljs.ops.string.exec(data1, updateTuple75.toExec);

    var commit53 = [{"type":1,"at":3,"value":"w"}];
    var commitTuple53 = doc1.commit(commit53);
    data1 = cljs.ops.string.exec(data1, commitTuple53.toExec);

    var commit54 = [{"type":0,"at":0,"value":"qe"}];
    var commitTuple54 = doc1.commit(commit54);
    data1 = cljs.ops.string.exec(data1, commitTuple54.toExec);

    var update76 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"wwr"},"execOrder":92},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":36,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"w"},"execOrder":93}];
    var updateTuple76 = doc1.update(update76);
    data1 = cljs.ops.string.exec(data1, updateTuple76.toExec);

    var commit55 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple55 = doc1.commit(commit55);
    data1 = cljs.ops.string.exec(data1, commitTuple55.toExec);

    var update77 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":37,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":36,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qe"},"execOrder":94}];
    var updateTuple77 = doc1.update(update77);
    data1 = cljs.ops.string.exec(data1, updateTuple77.toExec);

    var commit56 = [{"type":0,"at":3,"value":"q"}];
    var commitTuple56 = doc1.commit(commit56);
    data1 = cljs.ops.string.exec(data1, commitTuple56.toExec);

    var update78 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":38,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":37,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":95}];
    var updateTuple78 = doc1.update(update78);
    data1 = cljs.ops.string.exec(data1, updateTuple78.toExec);

    var update79 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":38,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":96}];
    var updateTuple79 = doc1.update(update79);
    data1 = cljs.ops.string.exec(data1, updateTuple79.toExec);

    var update80 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"wwr"},"execOrder":97}];
    var updateTuple80 = doc1.update(update80);
    data1 = cljs.ops.string.exec(data1, updateTuple80.toExec);

    var commitTuple57 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple57.toExec);

    var update81 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"qwr"},"execOrder":98},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"qwr"},"execOrder":99}];
    var updateTuple81 = doc1.update(update81);
    data1 = cljs.ops.string.exec(data1, updateTuple81.toExec);

    var update82 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":100}];
    var updateTuple82 = doc1.update(update82);
    data1 = cljs.ops.string.exec(data1, updateTuple82.toExec);

  });

  it("Site c946c570-535a-11e7-9a54-0f552895e557 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":1,"value":"wyw"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"wyw"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":2,"value":"et"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update2 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":2},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"er"},"execOrder":3}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"et"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qw"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple3 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update5 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"e"},"execOrder":6},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rr"},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"et"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"q"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit5 = [{"type":0,"at":12,"value":"qtw"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"wyw"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qtw"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit6 = [{"type":1,"at":6,"value":"r W"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update10 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"we"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commitTuple7 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update11 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r W"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commitTuple8 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update12 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r W"},"execOrder":14}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commit9 = [{"type":0,"at":14,"value":"qre"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update13 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"qtw"},"execOrder":15}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commit10 = [{"type":0,"at":2,"value":"y"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update14 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"qre"},"execOrder":16}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commit11 = [{"type":1,"at":17,"value":"ed"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update15 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":17}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var commit12 = [{"type":0,"at":3,"value":"qr"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update16 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":17,"value":"ed"},"execOrder":18}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var commit13 = [{"type":1,"at":15,"value":"qlq"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update17 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qr"},"execOrder":19}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":20}];
    var updateTuple18 = doc2.update(update18);
    data2 = cljs.ops.string.exec(data2, updateTuple18.toExec);

    var commitTuple14 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple14.toExec);

    var update19 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"err"},"execOrder":21},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":22}];
    var updateTuple19 = doc2.update(update19);
    data2 = cljs.ops.string.exec(data2, updateTuple19.toExec);

    var commitTuple15 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple15.toExec);

    var update20 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":15,"value":"qlq"},"execOrder":23}];
    var updateTuple20 = doc2.update(update20);
    data2 = cljs.ops.string.exec(data2, updateTuple20.toExec);

    var update21 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":24}];
    var updateTuple21 = doc2.update(update21);
    data2 = cljs.ops.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":25}];
    var updateTuple22 = doc2.update(update22);
    data2 = cljs.ops.string.exec(data2, updateTuple22.toExec);

    var update23 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"ly"},"execOrder":26},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"ly"},"execOrder":27}];
    var updateTuple23 = doc2.update(update23);
    data2 = cljs.ops.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":28},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"r "},"execOrder":29}];
    var updateTuple24 = doc2.update(update24);
    data2 = cljs.ops.string.exec(data2, updateTuple24.toExec);

    var update25 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":30},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":31}];
    var updateTuple25 = doc2.update(update25);
    data2 = cljs.ops.string.exec(data2, updateTuple25.toExec);

    var update26 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":32}];
    var updateTuple26 = doc2.update(update26);
    data2 = cljs.ops.string.exec(data2, updateTuple26.toExec);

    var commit16 = [{"type":0,"at":3,"value":"rq"}];
    var commitTuple16 = doc2.commit(commit16);
    data2 = cljs.ops.string.exec(data2, commitTuple16.toExec);

    var update27 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"y"},"execOrder":33}];
    var updateTuple27 = doc2.update(update27);
    data2 = cljs.ops.string.exec(data2, updateTuple27.toExec);

    var commit17 = [{"type":0,"at":1,"value":"ryy"}];
    var commitTuple17 = doc2.commit(commit17);
    data2 = cljs.ops.string.exec(data2, commitTuple17.toExec);

    var update28 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"y"},"execOrder":34},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rq"},"execOrder":35}];
    var updateTuple28 = doc2.update(update28);
    data2 = cljs.ops.string.exec(data2, updateTuple28.toExec);

    var commit18 = [{"type":1,"at":8,"value":"qwr"}];
    var commitTuple18 = doc2.commit(commit18);
    data2 = cljs.ops.string.exec(data2, commitTuple18.toExec);

    var update29 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"ryy"},"execOrder":36}];
    var updateTuple29 = doc2.update(update29);
    data2 = cljs.ops.string.exec(data2, updateTuple29.toExec);

    var update30 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"qwr"},"execOrder":37}];
    var updateTuple30 = doc2.update(update30);
    data2 = cljs.ops.string.exec(data2, updateTuple30.toExec);

    var update31 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wr"},"execOrder":38}];
    var updateTuple31 = doc2.update(update31);
    data2 = cljs.ops.string.exec(data2, updateTuple31.toExec);

    var commitTuple19 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple19.toExec);

    var update32 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wr"},"execOrder":39}];
    var updateTuple32 = doc2.update(update32);
    data2 = cljs.ops.string.exec(data2, updateTuple32.toExec);

    var update33 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"qwr"},"execOrder":40}];
    var updateTuple33 = doc2.update(update33);
    data2 = cljs.ops.string.exec(data2, updateTuple33.toExec);

    var update34 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":1},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"wr"},"execOrder":41}];
    var updateTuple34 = doc2.update(update34);
    data2 = cljs.ops.string.exec(data2, updateTuple34.toExec);

    var commitTuple20 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple20.toExec);

    var update35 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qrr"},"execOrder":42},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"ryy"},"execOrder":43}];
    var updateTuple35 = doc2.update(update35);
    data2 = cljs.ops.string.exec(data2, updateTuple35.toExec);

    var commit21 = [{"type":1,"at":0,"value":"Hyq"}];
    var commitTuple21 = doc2.commit(commit21);
    data2 = cljs.ops.string.exec(data2, commitTuple21.toExec);

    var update36 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"ryy"},"execOrder":44}];
    var updateTuple36 = doc2.update(update36);
    data2 = cljs.ops.string.exec(data2, updateTuple36.toExec);

    var commit22 = [{"type":0,"at":3,"value":"yqq"}];
    var commitTuple22 = doc2.commit(commit22);
    data2 = cljs.ops.string.exec(data2, commitTuple22.toExec);

    var update37 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hyq"},"execOrder":45}];
    var updateTuple37 = doc2.update(update37);
    data2 = cljs.ops.string.exec(data2, updateTuple37.toExec);

    var update38 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":46}];
    var updateTuple38 = doc2.update(update38);
    data2 = cljs.ops.string.exec(data2, updateTuple38.toExec);

    var commit23 = [{"type":0,"at":6,"value":"wt"}];
    var commitTuple23 = doc2.commit(commit23);
    data2 = cljs.ops.string.exec(data2, commitTuple23.toExec);

    var update39 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rqq"},"execOrder":47}];
    var updateTuple39 = doc2.update(update39);
    data2 = cljs.ops.string.exec(data2, updateTuple39.toExec);

    var commit24 = [{"type":0,"at":0,"value":"rer"}];
    var commitTuple24 = doc2.commit(commit24);
    data2 = cljs.ops.string.exec(data2, commitTuple24.toExec);

    var update40 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wt"},"execOrder":48}];
    var updateTuple40 = doc2.update(update40);
    data2 = cljs.ops.string.exec(data2, updateTuple40.toExec);

    var commit25 = [{"type":1,"at":0,"value":"r"}];
    var commitTuple25 = doc2.commit(commit25);
    data2 = cljs.ops.string.exec(data2, commitTuple25.toExec);

    var update41 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rer"},"execOrder":49}];
    var updateTuple41 = doc2.update(update41);
    data2 = cljs.ops.string.exec(data2, updateTuple41.toExec);

    var commit26 = [{"type":0,"at":2,"value":"ty"}];
    var commitTuple26 = doc2.commit(commit26);
    data2 = cljs.ops.string.exec(data2, commitTuple26.toExec);

    var update42 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":50}];
    var updateTuple42 = doc2.update(update42);
    data2 = cljs.ops.string.exec(data2, updateTuple42.toExec);

    var update43 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":51}];
    var updateTuple43 = doc2.update(update43);
    data2 = cljs.ops.string.exec(data2, updateTuple43.toExec);

    var commitTuple27 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple27.toExec);

    var update44 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"rqq"},"execOrder":52}];
    var updateTuple44 = doc2.update(update44);
    data2 = cljs.ops.string.exec(data2, updateTuple44.toExec);

    var update45 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":53}];
    var updateTuple45 = doc2.update(update45);
    data2 = cljs.ops.string.exec(data2, updateTuple45.toExec);

    var commitTuple28 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple28.toExec);

    var update46 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":54}];
    var updateTuple46 = doc2.update(update46);
    data2 = cljs.ops.string.exec(data2, updateTuple46.toExec);

    var update47 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"r"},"execOrder":55}];
    var updateTuple47 = doc2.update(update47);
    data2 = cljs.ops.string.exec(data2, updateTuple47.toExec);

    var update48 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":56}];
    var updateTuple48 = doc2.update(update48);
    data2 = cljs.ops.string.exec(data2, updateTuple48.toExec);

    var update49 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":57}];
    var updateTuple49 = doc2.update(update49);
    data2 = cljs.ops.string.exec(data2, updateTuple49.toExec);

    var update50 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"er"},"execOrder":58}];
    var updateTuple50 = doc2.update(update50);
    data2 = cljs.ops.string.exec(data2, updateTuple50.toExec);

    var commitTuple29 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple29.toExec);

    var update51 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"ryy"},"execOrder":59}];
    var updateTuple51 = doc2.update(update51);
    data2 = cljs.ops.string.exec(data2, updateTuple51.toExec);

    var update52 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rer"},"execOrder":60}];
    var updateTuple52 = doc2.update(update52);
    data2 = cljs.ops.string.exec(data2, updateTuple52.toExec);

    var update53 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":61}];
    var updateTuple53 = doc2.update(update53);
    data2 = cljs.ops.string.exec(data2, updateTuple53.toExec);

    var update54 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":62},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":1},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":63}];
    var updateTuple54 = doc2.update(update54);
    data2 = cljs.ops.string.exec(data2, updateTuple54.toExec);

    var commitTuple30 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple30.toExec);

    var update55 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":2},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":3,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":64}];
    var updateTuple55 = doc2.update(update55);
    data2 = cljs.ops.string.exec(data2, updateTuple55.toExec);

    var commit31 = [{"type":1,"at":1,"value":"qq"}];
    var commitTuple31 = doc2.commit(commit31);
    data2 = cljs.ops.string.exec(data2, commitTuple31.toExec);

    var update56 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wt"},"execOrder":65}];
    var updateTuple56 = doc2.update(update56);
    data2 = cljs.ops.string.exec(data2, updateTuple56.toExec);

    var update57 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"qq"},"execOrder":66}];
    var updateTuple57 = doc2.update(update57);
    data2 = cljs.ops.string.exec(data2, updateTuple57.toExec);

    var update58 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wt"},"execOrder":67}];
    var updateTuple58 = doc2.update(update58);
    data2 = cljs.ops.string.exec(data2, updateTuple58.toExec);

    var commit32 = [{"type":1,"at":0,"value":"ry"}];
    var commitTuple32 = doc2.commit(commit32);
    data2 = cljs.ops.string.exec(data2, commitTuple32.toExec);

    var update59 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wt"},"execOrder":68}];
    var updateTuple59 = doc2.update(update59);
    data2 = cljs.ops.string.exec(data2, updateTuple59.toExec);

    var update60 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ry"},"execOrder":69}];
    var updateTuple60 = doc2.update(update60);
    data2 = cljs.ops.string.exec(data2, updateTuple60.toExec);

    var update61 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wq"},"execOrder":70}];
    var updateTuple61 = doc2.update(update61);
    data2 = cljs.ops.string.exec(data2, updateTuple61.toExec);

    var update62 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"wq"},"execOrder":71},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qq"},"execOrder":72}];
    var updateTuple62 = doc2.update(update62);
    data2 = cljs.ops.string.exec(data2, updateTuple62.toExec);

    var commitTuple33 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple33.toExec);

    var update63 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":27,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":73}];
    var updateTuple63 = doc2.update(update63);
    data2 = cljs.ops.string.exec(data2, updateTuple63.toExec);

    var commitTuple34 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple34.toExec);

    var update64 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":28,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":27,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":74},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ry"},"execOrder":75}];
    var updateTuple64 = doc2.update(update64);
    data2 = cljs.ops.string.exec(data2, updateTuple64.toExec);

    var commitTuple35 = doc2.redo();
    data2 = cljs.ops.string.exec(data2, commitTuple35.toExec);

    var update65 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"qq"},"execOrder":76}];
    var updateTuple65 = doc2.update(update65);
    data2 = cljs.ops.string.exec(data2, updateTuple65.toExec);

    var update66 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1},"invClusterSize":12},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":1,"value":"qq"},"execOrder":77}];
    var updateTuple66 = doc2.update(update66);
    data2 = cljs.ops.string.exec(data2, updateTuple66.toExec);

    var update67 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":29,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":28,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"20":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"q"},"execOrder":78}];
    var updateTuple67 = doc2.update(update67);
    data2 = cljs.ops.string.exec(data2, updateTuple67.toExec);

    var update68 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":30,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":29,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":79}];
    var updateTuple68 = doc2.update(update68);
    data2 = cljs.ops.string.exec(data2, updateTuple68.toExec);

    var update69 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":31,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":30,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"q"},"execOrder":80}];
    var updateTuple69 = doc2.update(update69);
    data2 = cljs.ops.string.exec(data2, updateTuple69.toExec);

    var commit36 = [{"type":1,"at":0,"value":"ryw"}];
    var commitTuple36 = doc2.commit(commit36);
    data2 = cljs.ops.string.exec(data2, commitTuple36.toExec);

    var update70 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":32,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ew"},"execOrder":81}];
    var updateTuple70 = doc2.update(update70);
    data2 = cljs.ops.string.exec(data2, updateTuple70.toExec);

    var update71 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ryw"},"execOrder":82}];
    var updateTuple71 = doc2.update(update71);
    data2 = cljs.ops.string.exec(data2, updateTuple71.toExec);

    var update72 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":33,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":32,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"w"},"execOrder":83}];
    var updateTuple72 = doc2.update(update72);
    data2 = cljs.ops.string.exec(data2, updateTuple72.toExec);

    var commit37 = [{"type":1,"at":0,"value":"rq"}];
    var commitTuple37 = doc2.commit(commit37);
    data2 = cljs.ops.string.exec(data2, commitTuple37.toExec);

    var update73 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":34,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"yrr"},"execOrder":84}];
    var updateTuple73 = doc2.update(update73);
    data2 = cljs.ops.string.exec(data2, updateTuple73.toExec);

    var update74 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":34,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yww"},"execOrder":85},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rq"},"execOrder":86}];
    var updateTuple74 = doc2.update(update74);
    data2 = cljs.ops.string.exec(data2, updateTuple74.toExec);

    var commit38 = [{"type":1,"at":4,"value":"yww"}];
    var commitTuple38 = doc2.commit(commit38);
    data2 = cljs.ops.string.exec(data2, commitTuple38.toExec);

    var update75 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yww"},"execOrder":87},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yww"},"execOrder":88}];
    var updateTuple75 = doc2.update(update75);
    data2 = cljs.ops.string.exec(data2, updateTuple75.toExec);

    var commit39 = [{"type":0,"at":4,"value":"r"}];
    var commitTuple39 = doc2.commit(commit39);
    data2 = cljs.ops.string.exec(data2, commitTuple39.toExec);

    var update76 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"yww"},"execOrder":89},{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":90}];
    var updateTuple76 = doc2.update(update76);
    data2 = cljs.ops.string.exec(data2, updateTuple76.toExec);

    var commit40 = [{"type":1,"at":2,"value":"wwr"}];
    var commitTuple40 = doc2.commit(commit40);
    data2 = cljs.ops.string.exec(data2, commitTuple40.toExec);

    var update77 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"yww"},"execOrder":91}];
    var updateTuple77 = doc2.update(update77);
    data2 = cljs.ops.string.exec(data2, updateTuple77.toExec);

    var update78 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"wwr"},"execOrder":92}];
    var updateTuple78 = doc2.update(update78);
    data2 = cljs.ops.string.exec(data2, updateTuple78.toExec);

    var update79 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":36,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"w"},"execOrder":93}];
    var updateTuple79 = doc2.update(update79);
    data2 = cljs.ops.string.exec(data2, updateTuple79.toExec);

    var update80 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":37,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":36,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qe"},"execOrder":94},{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":38,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":37,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":95}];
    var updateTuple80 = doc2.update(update80);
    data2 = cljs.ops.string.exec(data2, updateTuple80.toExec);

    var commitTuple41 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple41.toExec);

    var update81 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":38,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":96}];
    var updateTuple81 = doc2.update(update81);
    data2 = cljs.ops.string.exec(data2, updateTuple81.toExec);

    var commit42 = [{"type":1,"at":3,"value":"qwr"}];
    var commitTuple42 = doc2.commit(commit42);
    data2 = cljs.ops.string.exec(data2, commitTuple42.toExec);

    var update82 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"wwr"},"execOrder":97}];
    var updateTuple82 = doc2.update(update82);
    data2 = cljs.ops.string.exec(data2, updateTuple82.toExec);

    var commitTuple43 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple43.toExec);

    var update83 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"qwr"},"execOrder":98}];
    var updateTuple83 = doc2.update(update83);
    data2 = cljs.ops.string.exec(data2, updateTuple83.toExec);

    var update84 = [{"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"qwr"},"execOrder":99}];
    var updateTuple84 = doc2.update(update84);
    data2 = cljs.ops.string.exec(data2, updateTuple84.toExec);

    var update85 = [{"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":100}];
    var updateTuple85 = doc2.update(update85);
    data2 = cljs.ops.string.exec(data2, updateTuple85.toExec);

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

    var serverUpdate0 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":1,"value":"wyw"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":3,"value":"lo"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"er"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"et"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qw"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"e"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rr"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":2,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"et"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":17,"value":"q"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":1,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"wyw"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"qtw"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"we"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r W"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":4,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"r W"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":3,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":3,"invCluster":{"1":1,"2":1},"invClusterSize":2},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":12,"value":"qtw"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":5,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"qre"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":6,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"y"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":7,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":17,"value":"ed"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qr"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":8,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"err"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":8,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":15,"value":"qlq"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":9,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":7,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":15,"value":"qlq"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"ly"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"ly"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{},"invClusterSize":0},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":1},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"r "},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"r"},"execOrder":30};
    updateServer(serverUpdate29);

    var serverUpdate30 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":31};
    updateServer(serverUpdate30);

    var serverUpdate31 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"l"},"execOrder":32};
    updateServer(serverUpdate31);

    var serverUpdate32 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"y"},"execOrder":33};
    updateServer(serverUpdate32);

    var serverUpdate33 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"y"},"execOrder":34};
    updateServer(serverUpdate33);

    var serverUpdate34 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":10,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rq"},"execOrder":35};
    updateServer(serverUpdate34);

    var serverUpdate35 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"ryy"},"execOrder":36};
    updateServer(serverUpdate35);

    var serverUpdate36 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"qwr"},"execOrder":37};
    updateServer(serverUpdate36);

    var serverUpdate37 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wr"},"execOrder":38};
    updateServer(serverUpdate37);

    var serverUpdate38 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wr"},"execOrder":39};
    updateServer(serverUpdate38);

    var serverUpdate39 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":12,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1,"16":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"qwr"},"execOrder":40};
    updateServer(serverUpdate39);

    var serverUpdate40 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":1},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"wr"},"execOrder":41};
    updateServer(serverUpdate40);

    var serverUpdate41 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"qrr"},"execOrder":42};
    updateServer(serverUpdate41);

    var serverUpdate42 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":11,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2},"invClusterSize":5},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"10":1,"11":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":1,"value":"ryy"},"execOrder":43};
    updateServer(serverUpdate42);

    var serverUpdate43 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"ryy"},"execOrder":44};
    updateServer(serverUpdate43);

    var serverUpdate44 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":13,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"Hyq"},"execOrder":45};
    updateServer(serverUpdate44);

    var serverUpdate45 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":14,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":46};
    updateServer(serverUpdate45);

    var serverUpdate46 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rqq"},"execOrder":47};
    updateServer(serverUpdate46);

    var serverUpdate47 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wt"},"execOrder":48};
    updateServer(serverUpdate47);

    var serverUpdate48 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"rer"},"execOrder":49};
    updateServer(serverUpdate48);

    var serverUpdate49 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"r"},"execOrder":50};
    updateServer(serverUpdate49);

    var serverUpdate50 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"ty"},"execOrder":51};
    updateServer(serverUpdate50);

    var serverUpdate51 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"rqq"},"execOrder":52};
    updateServer(serverUpdate51);

    var serverUpdate52 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":18,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":2,"value":"ty"},"execOrder":53};
    updateServer(serverUpdate52);

    var serverUpdate53 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"r"},"execOrder":54};
    updateServer(serverUpdate53);

    var serverUpdate54 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":17,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":17,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"r"},"execOrder":55};
    updateServer(serverUpdate54);

    var serverUpdate55 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1},"invClusterSize":5},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"r"},"execOrder":56};
    updateServer(serverUpdate55);

    var serverUpdate56 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"er"},"execOrder":57};
    updateServer(serverUpdate56);

    var serverUpdate57 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"20":1,"21":1},"invClusterSize":6},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"18":1},"invClusterSize":8}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"er"},"execOrder":58};
    updateServer(serverUpdate57);

    var serverUpdate58 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"12":1},"invClusterSize":6}},"size":2},"invCount":1,"load":{"type":0,"at":5,"value":"ryy"},"execOrder":59};
    updateServer(serverUpdate58);

    var serverUpdate59 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":16,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":0,"value":"rer"},"execOrder":60};
    updateServer(serverUpdate59);

    var serverUpdate60 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":61};
    updateServer(serverUpdate60);

    var serverUpdate61 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1},"invClusterSize":8},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":62};
    updateServer(serverUpdate61);

    var serverUpdate62 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":1},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":3,"value":"yqq"},"execOrder":63};
    updateServer(serverUpdate62);

    var serverUpdate63 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":2},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"17":1,"18":1},"invClusterSize":9}},"size":2},"invCount":3,"load":{"type":0,"at":3,"value":"yqq"},"execOrder":64};
    updateServer(serverUpdate63);

    var serverUpdate64 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":15,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1},"invClusterSize":7},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"10":1,"11":1,"16":1,"17":2},"invClusterSize":4}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"wt"},"execOrder":65};
    updateServer(serverUpdate64);

    var serverUpdate65 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"qq"},"execOrder":66};
    updateServer(serverUpdate65);

    var serverUpdate66 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"wt"},"execOrder":67};
    updateServer(serverUpdate66);

    var serverUpdate67 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":18,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"16":1,"17":1,"18":1},"invClusterSize":10}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"wt"},"execOrder":68};
    updateServer(serverUpdate67);

    var serverUpdate68 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ry"},"execOrder":69};
    updateServer(serverUpdate68);

    var serverUpdate69 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"wq"},"execOrder":70};
    updateServer(serverUpdate69);

    var serverUpdate70 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1},"invClusterSize":10},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"wq"},"execOrder":71};
    updateServer(serverUpdate70);

    var serverUpdate71 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"qq"},"execOrder":72};
    updateServer(serverUpdate71);

    var serverUpdate72 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":27,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"r"},"execOrder":73};
    updateServer(serverUpdate72);

    var serverUpdate73 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":28,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":27,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"w"},"execOrder":74};
    updateServer(serverUpdate73);

    var serverUpdate74 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":20,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":0,"value":"ry"},"execOrder":75};
    updateServer(serverUpdate74);

    var serverUpdate75 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1},"invClusterSize":11},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"qq"},"execOrder":76};
    updateServer(serverUpdate75);

    var serverUpdate76 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":19,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":19,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1},"invClusterSize":12},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3},"invClusterSize":9}},"size":2},"invCount":2,"load":{"type":1,"at":1,"value":"qq"},"execOrder":77};
    updateServer(serverUpdate76);

    var serverUpdate77 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":29,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":28,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"20":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"q"},"execOrder":78};
    updateServer(serverUpdate77);

    var serverUpdate78 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":30,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":29,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"e"},"execOrder":79};
    updateServer(serverUpdate78);

    var serverUpdate79 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":31,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":30,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"q"},"execOrder":80};
    updateServer(serverUpdate79);

    var serverUpdate80 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":32,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"ew"},"execOrder":81};
    updateServer(serverUpdate80);

    var serverUpdate81 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":21,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":31,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"ryw"},"execOrder":82};
    updateServer(serverUpdate81);

    var serverUpdate82 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":33,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":32,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"w"},"execOrder":83};
    updateServer(serverUpdate82);

    var serverUpdate83 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":34,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":20,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"yrr"},"execOrder":84};
    updateServer(serverUpdate83);

    var serverUpdate84 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":34,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yww"},"execOrder":85};
    updateServer(serverUpdate84);

    var serverUpdate85 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":22,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":33,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"rq"},"execOrder":86};
    updateServer(serverUpdate85);

    var serverUpdate86 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yww"},"execOrder":87};
    updateServer(serverUpdate86);

    var serverUpdate87 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":23,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":22,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1},"invClusterSize":11}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"yww"},"execOrder":88};
    updateServer(serverUpdate87);

    var serverUpdate88 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":2,"load":{"type":0,"at":6,"value":"yww"},"execOrder":89};
    updateServer(serverUpdate88);

    var serverUpdate89 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":24,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":23,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":1},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"r"},"execOrder":90};
    updateServer(serverUpdate89);

    var serverUpdate90 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":35,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":21,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":3,"load":{"type":1,"at":6,"value":"yww"},"execOrder":91};
    updateServer(serverUpdate90);

    var serverUpdate91 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"wwr"},"execOrder":92};
    updateServer(serverUpdate91);

    var serverUpdate92 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":36,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"w"},"execOrder":93};
    updateServer(serverUpdate92);

    var serverUpdate93 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":37,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":36,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":24,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":0,"value":"qe"},"execOrder":94};
    updateServer(serverUpdate93);

    var serverUpdate94 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":38,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":37,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":95};
    updateServer(serverUpdate94);

    var serverUpdate95 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":38,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"q"},"execOrder":96};
    updateServer(serverUpdate95);

    var serverUpdate96 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":25,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":35,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":2},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"wwr"},"execOrder":97};
    updateServer(serverUpdate96);

    var serverUpdate97 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":0,"load":{"type":1,"at":3,"value":"qwr"},"execOrder":98};
    updateServer(serverUpdate97);

    var serverUpdate98 = {"siteId":"c946c570-535a-11e7-9a54-0f552895e557","seqId":26,"context":{"vector":{"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":26,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1,"25":1},"invClusterSize":14},"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12}},"size":2},"invCount":1,"load":{"type":0,"at":3,"value":"qwr"},"execOrder":99};
    updateServer(serverUpdate98);

    var serverUpdate99 = {"siteId":"c944c9a0-535a-11e7-9a54-0f552895e557","seqId":39,"context":{"vector":{"c944c9a0-535a-11e7-9a54-0f552895e557":{"seqId":39,"invCluster":{"10":1,"11":1,"16":1,"17":2,"19":1,"20":1,"21":1,"22":1,"23":3,"24":1,"25":1,"35":3},"invClusterSize":12},"c946c570-535a-11e7-9a54-0f552895e557":{"seqId":25,"invCluster":{"1":1,"2":1,"3":1,"4":1,"9":2,"11":1,"12":1,"15":1,"16":1,"17":1,"18":1,"19":2,"20":1},"invClusterSize":13}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"q"},"execOrder":100};
    updateServer(serverUpdate99);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});