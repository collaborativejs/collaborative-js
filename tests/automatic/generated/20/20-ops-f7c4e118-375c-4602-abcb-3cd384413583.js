var cljs = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/redo/rm/ins/undo/rm/ins/ins/rm/rm/undo/ins/rm/rm/rm/rm/rm/ins/undo - 20-ops-f7c4e118-375c-4602-abcb-3cd384413583", function() {
  var doc1 = new cljs.StringDocument("82cb6810-537f-11e7-8e88-efb123dea98a", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"484ab420-7edf-4b14-b364-78590f093faf","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 82cb6810-537f-11e7-8e88-efb123dea98a operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":9,"value":"we"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = cljs.ops.string.exec(data1, commitTuple1.toExec);

    var commitTuple2 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"we"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = cljs.ops.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"we"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = cljs.ops.string.exec(data1, updateTuple2.toExec);

    var commitTuple3 = doc1.redo();
    data1 = cljs.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":9,"value":"we"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = cljs.ops.string.exec(data1, updateTuple3.toExec);

    var commit4 = [{"type":1,"at":4,"value":"o"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = cljs.ops.string.exec(data1, commitTuple4.toExec);

    var update4 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":2,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = cljs.ops.string.exec(data1, updateTuple4.toExec);

    var commit5 = [{"type":0,"at":3,"value":"yty"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = cljs.ops.string.exec(data1, commitTuple5.toExec);

    var update5 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":3,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"yty"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = cljs.ops.string.exec(data1, updateTuple5.toExec);

    var commitTuple6 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple6.toExec);

    var commit7 = [{"type":1,"at":4,"value":" W"}];
    var commitTuple7 = doc1.commit(commit7);
    data1 = cljs.ops.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":3,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yty"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = cljs.ops.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":0,"at":1,"value":"wwy"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = cljs.ops.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":4,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":" W"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = cljs.ops.string.exec(data1, updateTuple7.toExec);

    var commit9 = [{"type":0,"at":10,"value":"tr"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = cljs.ops.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":5,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"wwy"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = cljs.ops.string.exec(data1, updateTuple8.toExec);

    var commit10 = [{"type":1,"at":2,"value":"wye"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = cljs.ops.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":6,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"tr"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = cljs.ops.string.exec(data1, updateTuple9.toExec);

    var commit11 = [{"type":1,"at":2,"value":"ll"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = cljs.ops.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":7,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":6,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"wye"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = cljs.ops.string.exec(data1, updateTuple10.toExec);

    var commitTuple12 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":8,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":7,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = cljs.ops.string.exec(data1, updateTuple11.toExec);

    var commit13 = [{"type":0,"at":1,"value":"rr"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = cljs.ops.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":8,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":8,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = cljs.ops.string.exec(data1, updateTuple12.toExec);

    var commit14 = [{"type":1,"at":2,"value":"rw"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = cljs.ops.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":9,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":8,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"rr"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = cljs.ops.string.exec(data1, updateTuple13.toExec);

    var commit15 = [{"type":1,"at":3,"value":"l"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = cljs.ops.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":10,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":9,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"rw"},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = cljs.ops.string.exec(data1, updateTuple14.toExec);

    var commit16 = [{"type":1,"at":7,"value":"re"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = cljs.ops.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":11,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":10,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = cljs.ops.string.exec(data1, updateTuple15.toExec);

    var commit17 = [{"type":1,"at":2,"value":"lor"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = cljs.ops.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":12,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":11,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"re"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = cljs.ops.string.exec(data1, updateTuple16.toExec);

    var commit18 = [{"type":1,"at":0,"value":"Hrw"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = cljs.ops.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":13,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":12,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"lor"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = cljs.ops.string.exec(data1, updateTuple17.toExec);

    var commit19 = [{"type":0,"at":0,"value":"t"}];
    var commitTuple19 = doc1.commit(commit19);
    data1 = cljs.ops.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":14,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":13,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hrw"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = cljs.ops.string.exec(data1, updateTuple18.toExec);

    var commitTuple20 = doc1.undo();
    data1 = cljs.ops.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":15,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":14,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = cljs.ops.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":15,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":15,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":0,"value":"t"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = cljs.ops.string.exec(data1, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":9,"value":"we"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":9,"value":"we"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":1,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":0,"at":9,"value":"we"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":2,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":1,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":"o"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":3,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":2,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":0,"at":3,"value":"yty"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":3,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":3,"invCluster":{"1":2},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":1,"at":3,"value":"yty"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":4,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":3,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":4,"value":" W"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":5,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":4,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"wwy"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":6,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":5,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":0,"at":10,"value":"tr"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":7,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":6,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"wye"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":8,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":7,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":8,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":8,"invCluster":{"1":2,"3":1},"invClusterSize":2}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":9,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":8,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"rr"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":10,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":9,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"rw"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":11,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":10,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"l"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":12,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":11,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":7,"value":"re"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":13,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":12,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"lor"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":14,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":13,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"Hrw"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":15,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":14,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":0,"value":"t"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"82cb6810-537f-11e7-8e88-efb123dea98a","seqId":15,"context":{"vector":{"82cb6810-537f-11e7-8e88-efb123dea98a":{"seqId":15,"invCluster":{"1":2,"3":1,"8":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":0,"value":"t"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});