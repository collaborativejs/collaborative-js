var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/ins/rm/undo/undo/rm/rm/rm/undo/undo/undo/rm/ins/rm/rm/ins/rm/ins/undo - 20-ops-2cfc0a56-41b1-42e0-8f91-65dcce3f47bf", function() {
  var doc1 = new cljs.StringDocument("a8004010-532a-11e7-82ab-2b15658be2f4", 0, null);
  var doc2 = new cljs.StringDocument("a80262f0-532a-11e7-82ab-2b15658be2f4", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"5ba8c015-e1c2-4973-86e0-e6e3163d11bf","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site a8004010-532a-11e7-82ab-2b15658be2f4 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":7,"value":"t"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":1},{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":2}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"t"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":8,"value":"y"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"o "},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":8,"value":"rl"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commit4 = [{"type":1,"at":1,"value":"el"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update9 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":4,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":10}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":5,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qe"},"execOrder":11},{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var commitTuple5 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update11 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":6,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o "},"execOrder":13},{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var commitTuple6 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update12 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":7,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":15},{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":16}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":8,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":9,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llq"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yte"},"execOrder":19}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"yte"},"execOrder":20}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

  });

  it("Site a80262f0-532a-11e7-82ab-2b15658be2f4 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":8,"value":"rl"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var update1 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit2 = [{"type":1,"at":6,"value":"W"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var commit3 = [{"type":1,"at":4,"value":"o "}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var update3 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"t"},"execOrder":3},{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var commitTuple4 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var commitTuple5 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update5 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":6},{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"o "},"execOrder":7}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var commitTuple6 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update6 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var commit7 = [{"type":1,"at":8,"value":"rl"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update7 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":8,"value":"rl"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commit8 = [{"type":0,"at":4,"value":"qe"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update8 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":4,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":5,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qe"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var commit9 = [{"type":1,"at":6,"value":"o "}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update10 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":6,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o "},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var commit10 = [{"type":1,"at":4,"value":"Wo"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var update12 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":14},{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":7,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var commit11 = [{"type":0,"at":5,"value":"r"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update13 = [{"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commit12 = [{"type":1,"at":2,"value":"llq"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update14 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":8,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commit13 = [{"type":0,"at":3,"value":"yte"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update15 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":9,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llq"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var commitTuple14 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple14.toExec);

    var update16 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yte"},"execOrder":19}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"yte"},"execOrder":20}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

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

    var serverUpdate0 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"t"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"t"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"W"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"o "},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"y"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":4,"value":"o "},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"W"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":1,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":8,"value":"rl"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":4,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"rl"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":5,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"qe"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"el"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":6,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o "},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":3,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":0,"at":1,"value":"el"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":7,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"Wo"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"a8004010-532a-11e7-82ab-2b15658be2f4","seqId":2,"context":{"vector":{"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"y"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":8,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":9,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"llq"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"yte"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"a80262f0-532a-11e7-82ab-2b15658be2f4","seqId":10,"context":{"vector":{"a80262f0-532a-11e7-82ab-2b15658be2f4":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3},"a8004010-532a-11e7-82ab-2b15658be2f4":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":3,"value":"yte"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});