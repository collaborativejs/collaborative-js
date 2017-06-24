var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/undo/ins/rm/ins/ins/ins/rm/ins/ins/undo/undo/undo/undo/undo/ins/ins/ins/rm/undo/undo/ins/ins/undo/rm/ins/rm/rm/ins/ins - 30-ops-5474af4f-2791-4395-b5fa-9626fa50c8ab", function() {
  var doc1 = new cljs.StringDocument("00811520-5353-11e7-bd14-9900cf5cd44b", 0, null);
  var doc2 = new cljs.StringDocument("0083ad30-5353-11e7-bd14-9900cf5cd44b", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"fab94329-7069-4b1f-b4e2-4381cbd7abe1","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 00811520-5353-11e7-bd14-9900cf5cd44b operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":2,"value":"llo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"e"},"execOrder":2},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":3}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"y"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var commit3 = [{"type":0,"at":2,"value":"eew"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update4 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":5},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":6}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":0,"value":"l"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eew"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commit5 = [{"type":0,"at":1,"value":"qy"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update6 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"l"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commit6 = [{"type":0,"at":7,"value":"yte"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update7 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"yte"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commit7 = [{"type":0,"at":9,"value":"we"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update9 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"y"},"execOrder":12},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"we"},"execOrder":13}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var commit8 = [{"type":1,"at":8,"value":"eWo"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update11 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"qq"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var commit9 = [{"type":0,"at":13,"value":"t"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update12 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"eWo"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":16}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":17}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var update16 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"t"},"execOrder":19},{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"wt"},"execOrder":20}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var commit10 = [{"type":0,"at":8,"value":"ytq"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var update17 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":21}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ery"},"execOrder":22}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var commitTuple11 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple11.toExec);

    var update19 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ytq"},"execOrder":23}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":10,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"dwt"},"execOrder":24}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var commitTuple12 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple12.toExec);

    var update21 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":11,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":10,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"ttr"},"execOrder":25},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":26}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var commitTuple13 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple13.toExec);

    var update22 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"eWo"},"execOrder":27}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var commitTuple14 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple14.toExec);

    var update23 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"we"},"execOrder":28}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var commitTuple15 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple15.toExec);

    var update24 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":7,"value":"yte"},"execOrder":29}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

    var update25 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":12,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":11,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"5":1,"6":1,"7":1,"8":1,"9":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":30}];
    var updateTuple25 = doc1.update(update25);
    data1 = cljs.ops.string.exec(data1, updateTuple25.toExec);

  });

  it("Site 0083ad30-5353-11e7-bd14-9900cf5cd44b operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":6,"value":"w"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = cljs.ops.string.exec(data2, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":7,"value":"e"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = cljs.ops.string.exec(data2, commitTuple2.toExec);

    var update1 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = cljs.ops.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"e"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = cljs.ops.string.exec(data2, updateTuple2.toExec);

    var commit3 = [{"type":0,"at":5,"value":"y"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = cljs.ops.string.exec(data2, commitTuple3.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Hel"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = cljs.ops.string.exec(data2, commitTuple4.toExec);

    var update3 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":3},{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"y"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = cljs.ops.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = cljs.ops.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = cljs.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eew"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = cljs.ops.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"l"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = cljs.ops.string.exec(data2, updateTuple7.toExec);

    var commitTuple5 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":9},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"yte"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = cljs.ops.string.exec(data2, updateTuple8.toExec);

    var commitTuple6 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple6.toExec);

    var update9 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = cljs.ops.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"y"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = cljs.ops.string.exec(data2, updateTuple10.toExec);

    var commit7 = [{"type":0,"at":11,"value":"qq"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = cljs.ops.string.exec(data2, commitTuple7.toExec);

    var update11 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"we"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = cljs.ops.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"qq"},"execOrder":14}];
    var updateTuple12 = doc2.update(update12);
    data2 = cljs.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"eWo"},"execOrder":15},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = cljs.ops.string.exec(data2, updateTuple13.toExec);

    var commit8 = [{"type":0,"at":4,"value":"q"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = cljs.ops.string.exec(data2, commitTuple8.toExec);

    var update14 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = cljs.ops.string.exec(data2, updateTuple14.toExec);

    var commitTuple9 = doc2.undo();
    data2 = cljs.ops.string.exec(data2, commitTuple9.toExec);

    var update15 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = cljs.ops.string.exec(data2, updateTuple15.toExec);

    var commit10 = [{"type":1,"at":5,"value":"t"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = cljs.ops.string.exec(data2, commitTuple10.toExec);

    var commit11 = [{"type":0,"at":12,"value":"wt"}];
    var commitTuple11 = doc2.commit(commit11);
    data2 = cljs.ops.string.exec(data2, commitTuple11.toExec);

    var update16 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"t"},"execOrder":19}];
    var updateTuple16 = doc2.update(update16);
    data2 = cljs.ops.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"wt"},"execOrder":20}];
    var updateTuple17 = doc2.update(update17);
    data2 = cljs.ops.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":21}];
    var updateTuple18 = doc2.update(update18);
    data2 = cljs.ops.string.exec(data2, updateTuple18.toExec);

    var commit12 = [{"type":1,"at":6,"value":"ery"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = cljs.ops.string.exec(data2, commitTuple12.toExec);

    var update19 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ery"},"execOrder":22}];
    var updateTuple19 = doc2.update(update19);
    data2 = cljs.ops.string.exec(data2, updateTuple19.toExec);

    var update20 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ytq"},"execOrder":23}];
    var updateTuple20 = doc2.update(update20);
    data2 = cljs.ops.string.exec(data2, updateTuple20.toExec);

    var commit13 = [{"type":1,"at":9,"value":"dwt"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = cljs.ops.string.exec(data2, commitTuple13.toExec);

    var update21 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":10,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"dwt"},"execOrder":24}];
    var updateTuple21 = doc2.update(update21);
    data2 = cljs.ops.string.exec(data2, updateTuple21.toExec);

    var commit14 = [{"type":0,"at":7,"value":"ttr"}];
    var commitTuple14 = doc2.commit(commit14);
    data2 = cljs.ops.string.exec(data2, commitTuple14.toExec);

    var update22 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":11,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":10,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"ttr"},"execOrder":25}];
    var updateTuple22 = doc2.update(update22);
    data2 = cljs.ops.string.exec(data2, updateTuple22.toExec);

    var update23 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":26}];
    var updateTuple23 = doc2.update(update23);
    data2 = cljs.ops.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"eWo"},"execOrder":27}];
    var updateTuple24 = doc2.update(update24);
    data2 = cljs.ops.string.exec(data2, updateTuple24.toExec);

    var update25 = [{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"we"},"execOrder":28},{"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":7,"value":"yte"},"execOrder":29}];
    var updateTuple25 = doc2.update(update25);
    data2 = cljs.ops.string.exec(data2, updateTuple25.toExec);

    var commit15 = [{"type":0,"at":4,"value":"q"}];
    var commitTuple15 = doc2.commit(commit15);
    data2 = cljs.ops.string.exec(data2, commitTuple15.toExec);

    var update26 = [{"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":12,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":11,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"5":1,"6":1,"7":1,"8":1,"9":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":30}];
    var updateTuple26 = doc2.update(update26);
    data2 = cljs.ops.string.exec(data2, updateTuple26.toExec);

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

    var serverUpdate0 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":6,"value":"w"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"e"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":5,"value":"y"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":1,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"llo"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":2,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"eew"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":0,"value":"l"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"qy"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"yte"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":4,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":3,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":5,"value":"y"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"we"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":11,"value":"qq"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"eWo"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"t"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1},"invClusterSize":2},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":4,"value":"q"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"t"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"wt"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"ytq"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ery"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":9,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"ytq"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":10,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"dwt"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":11,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":10,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"9":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":7,"value":"ttr"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":8,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":8,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":13,"value":"t"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":7,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":7,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":8,"value":"eWo"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":6,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":6,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":9,"value":"we"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"00811520-5353-11e7-bd14-9900cf5cd44b","seqId":5,"context":{"vector":{"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":5,"invCluster":{"1":1},"invClusterSize":1},"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":7,"value":"yte"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"0083ad30-5353-11e7-bd14-9900cf5cd44b","seqId":12,"context":{"vector":{"0083ad30-5353-11e7-bd14-9900cf5cd44b":{"seqId":11,"invCluster":{"3":1,"4":1,"6":1},"invClusterSize":3},"00811520-5353-11e7-bd14-9900cf5cd44b":{"seqId":9,"invCluster":{"1":1,"5":1,"6":1,"7":1,"8":1,"9":1},"invClusterSize":6}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"q"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});