var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/ins/rm/undo/undo/ins/undo/rm/rm/undo/undo/redo/rm/ins/undo/rm/ins/undo/undo/ins/rm/rm/ins/undo/undo/ins/rm/undo/redo - 30-ops-c750ff21-e61a-4fd0-9bf8-cc756811d0ed", function() {
  var doc1 = new cljs.StringDocument("4fc52950-5380-11e7-8c36-c14e10a0a7d6", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"09c38d33-6dc4-41ab-91db-05d8ca274817","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 4fc52950-5380-11e7-8c36-c14e10a0a7d6 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":3,"value":"wr"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wr"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":1,"value":"y"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":1,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"wr"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":0,"value":"Hye"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":2,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"y"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commitTuple5 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":3,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hye"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commitTuple6 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":3,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hye"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commit7 = [{"type":0,"at":7,"value":"e"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":2,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"y"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commitTuple8 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":4,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"e"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit9 = [{"type":1,"at":0,"value":"Hel"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":4,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"e"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":1,"at":4,"value":"or"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple11 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":6,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"or"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var commitTuple12 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":6,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"or"},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var commitTuple13 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var commit14 = [{"type":1,"at":2,"value":" Wo"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = cljs.ops.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var commit15 = [{"type":0,"at":4,"value":"eeq"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = cljs.ops.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":7,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":" Wo"},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var commitTuple16 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":8,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"eeq"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var commit17 = [{"type":1,"at":0,"value":"lor"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = cljs.ops.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":8,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"eeq"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var commit18 = [{"type":0,"at":2,"value":"ywr"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = cljs.ops.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":9,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"lor"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var commitTuple19 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":10,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"ywr"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var commitTuple20 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":10,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ywr"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var commit21 = [{"type":0,"at":4,"value":"er"}];
    var commitTuple21 = doc1.commit(commit21);
    data1 = cljs.ops.string.exec(data1, commitTuple21.toExec);

    var update20 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":9,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"lor"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

    var commit22 = [{"type":1,"at":5,"value":"rd"}];
    var commitTuple22 = doc1.commit(commit22);
    data1 = cljs.ops.string.exec(data1, commitTuple22.toExec);

    var update21 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":11,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"er"},"execOrder":21}];
    var updateTuple21 = doc1.update(update21);
    data1 = cljs.ops.string.exec(data1, updateTuple21.toExec);

    var commit23 = [{"type":1,"at":0,"value":"lor"}];
    var commitTuple23 = doc1.commit(commit23);
    data1 = cljs.ops.string.exec(data1, commitTuple23.toExec);

    var update22 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":12,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"rd"},"execOrder":22}];
    var updateTuple22 = doc1.update(update22);
    data1 = cljs.ops.string.exec(data1, updateTuple22.toExec);

    var commit24 = [{"type":0,"at":2,"value":"rtt"}];
    var commitTuple24 = doc1.commit(commit24);
    data1 = cljs.ops.string.exec(data1, commitTuple24.toExec);

    var update23 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":13,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"lor"},"execOrder":23}];
    var updateTuple23 = doc1.update(update23);
    data1 = cljs.ops.string.exec(data1, updateTuple23.toExec);

    var commitTuple25 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple25.toExec);

    var update24 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":14,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"rtt"},"execOrder":24}];
    var updateTuple24 = doc1.update(update24);
    data1 = cljs.ops.string.exec(data1, updateTuple24.toExec);

    var commitTuple26 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple26.toExec);

    var update25 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":14,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"rtt"},"execOrder":25}];
    var updateTuple25 = doc1.update(update25);
    data1 = cljs.ops.string.exec(data1, updateTuple25.toExec);

    var commit27 = [{"type":0,"at":2,"value":"wr"}];
    var commitTuple27 = doc1.commit(commit27);
    data1 = cljs.ops.string.exec(data1, commitTuple27.toExec);

    var update26 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":13,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"lor"},"execOrder":26}];
    var updateTuple26 = doc1.update(update26);
    data1 = cljs.ops.string.exec(data1, updateTuple26.toExec);

    var commit28 = [{"type":1,"at":4,"value":"r"}];
    var commitTuple28 = doc1.commit(commit28);
    data1 = cljs.ops.string.exec(data1, commitTuple28.toExec);

    var update27 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":15,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"wr"},"execOrder":27}];
    var updateTuple27 = doc1.update(update27);
    data1 = cljs.ops.string.exec(data1, updateTuple27.toExec);

    var commitTuple29 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple29.toExec);

    var update28 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":28}];
    var updateTuple28 = doc1.update(update28);
    data1 = cljs.ops.string.exec(data1, updateTuple28.toExec);

    var commitTuple30 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple30.toExec);

    var update29 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"r"},"execOrder":29}];
    var updateTuple29 = doc1.update(update29);
    data1 = cljs.ops.string.exec(data1, updateTuple29.toExec);

    var update30 = [{"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1,"16":1},"invClusterSize":12}},"size":1},"invCount":2,"load":{"type":1,"at":4,"value":"r"},"execOrder":30}];
    var updateTuple30 = doc1.update(update30);
    data1 = cljs.ops.string.exec(data1, updateTuple30.toExec);

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

    var serverUpdate0 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":3,"value":"wr"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":1,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"wr"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":2,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"y"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":3,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hye"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":3,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hye"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":2,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"y"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":4,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":3,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"e"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":4,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"e"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":4,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":6,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"or"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":6,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"or"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1},"invClusterSize":4}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"Hel"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":5,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":2,"load":{"type":1,"at":0,"value":"Hel"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":7,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":" Wo"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":8,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"eeq"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":8,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"eeq"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":9,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"lor"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":10,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"ywr"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":10,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"ywr"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":9,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1},"invClusterSize":7}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"lor"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":11,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"er"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":12,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"rd"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":13,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":12,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"lor"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":14,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"rtt"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":14,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":1,"load":{"type":1,"at":2,"value":"rtt"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":13,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":13,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1},"invClusterSize":9}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"lor"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":15,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":14,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":0,"load":{"type":0,"at":2,"value":"wr"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":15,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"r"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1},"invClusterSize":11}},"size":1},"invCount":1,"load":{"type":0,"at":4,"value":"r"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"4fc52950-5380-11e7-8c36-c14e10a0a7d6","seqId":16,"context":{"vector":{"4fc52950-5380-11e7-8c36-c14e10a0a7d6":{"seqId":16,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":2,"6":1,"8":1,"9":1,"10":1,"13":1,"14":1,"16":1},"invClusterSize":12}},"size":1},"invCount":2,"load":{"type":1,"at":4,"value":"r"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});