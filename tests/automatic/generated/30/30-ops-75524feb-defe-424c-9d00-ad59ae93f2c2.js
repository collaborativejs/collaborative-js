var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - ins/ins/ins/rm/ins/ins/undo/undo/rm/undo/undo/redo/redo/rm/rm/ins/rm/ins/rm/rm/undo/undo/ins/rm/ins/ins/undo/undo/rm/ins - 30-ops-75524feb-defe-424c-9d00-ad59ae93f2c2", function() {
  var doc1 = new clv.string.Document("03ab5300-5353-11e7-964d-796c948c74df", 0, null);
  var doc2 = new clv.string.Document("03ae6040-5353-11e7-964d-796c948c74df", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"fb9ca408-cae2-4c49-a38a-159c77b76d9e","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 03ab5300-5353-11e7-964d-796c948c74df operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":11,"value":"r"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":0,"at":12,"value":"y"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commit3 = [{"type":0,"at":8,"value":"t"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":3,"value":"lo "}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":0,"at":7,"value":"wqy"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"wqy"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"wet"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var update8 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"l"},"execOrder":8},{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":12,"value":"l"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commit6 = [{"type":0,"at":10,"value":"et"}];
    var commitTuple6 = doc1.commit(commit6);
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update9 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"l"},"execOrder":10},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"et"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commitTuple8 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update10 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"et"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"wqy"},"execOrder":13}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit9 = [{"type":1,"at":7,"value":"etr"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update12 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"rqy"},"execOrder":14}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var update13 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"etr"},"execOrder":15}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var commitTuple11 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update14 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"r"},"execOrder":16},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":7,"value":"etr"},"execOrder":17}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commitTuple12 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update15 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo "},"execOrder":18}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commitTuple13 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple13.toExec);

    var update16 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":3,"value":"lo "},"execOrder":19}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var commit14 = [{"type":1,"at":9,"value":"ry"}];
    var commitTuple14 = doc1.commit(commit14);
    data1 = clv.string.exec(data1, commitTuple14.toExec);

    var update17 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1,"7":1},"invClusterSize":3},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":1,"at":7,"value":"etr"},"execOrder":20}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var update18 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ry"},"execOrder":21}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var update19 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":22}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var commit15 = [{"type":1,"at":5,"value":"tt"}];
    var commitTuple15 = doc1.commit(commit15);
    data1 = clv.string.exec(data1, commitTuple15.toExec);

    var commit16 = [{"type":0,"at":1,"value":"t"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = clv.string.exec(data1, commitTuple16.toExec);

    var update20 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"eqw"},"execOrder":23},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":24}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

    var update21 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":10,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":9,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":25}];
    var updateTuple21 = doc1.update(update21);
    data1 = clv.string.exec(data1, updateTuple21.toExec);

    var update22 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"eqw"},"execOrder":26},{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":27}];
    var updateTuple22 = doc1.update(update22);
    data1 = clv.string.exec(data1, updateTuple22.toExec);

    var commit17 = [{"type":1,"at":2,"value":"elW"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = clv.string.exec(data1, commitTuple17.toExec);

    var update23 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":28},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":11,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"elW"},"execOrder":29}];
    var updateTuple23 = doc1.update(update23);
    data1 = clv.string.exec(data1, updateTuple23.toExec);

    var update24 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rtq"},"execOrder":30}];
    var updateTuple24 = doc1.update(update24);
    data1 = clv.string.exec(data1, updateTuple24.toExec);

  });

  it("Site 03ae6040-5353-11e7-964d-796c948c74df operations should be executed without errors", function() {
    var update1 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var commit1 = [{"type":0,"at":9,"value":"wet"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update4 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":4},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"wqy"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var commit2 = [{"type":1,"at":2,"value":"l"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update5 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"wet"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commit3 = [{"type":1,"at":12,"value":"l"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.string.exec(data2, commitTuple3.toExec);

    var update6 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commitTuple4 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple4.toExec);

    var update7 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"l"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commitTuple5 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple5.toExec);

    var update8 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":12,"value":"l"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"l"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"et"},"execOrder":11},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"et"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var commit6 = [{"type":0,"at":13,"value":"rqy"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.string.exec(data2, commitTuple6.toExec);

    var update11 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"wqy"},"execOrder":13},{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"rqy"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var commit7 = [{"type":1,"at":9,"value":"r"}];
    var commitTuple7 = doc2.commit(commit7);
    data2 = clv.string.exec(data2, commitTuple7.toExec);

    var update12 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"etr"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"r"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var update14 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":7,"value":"etr"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo "},"execOrder":18},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":3,"value":"lo "},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var commit8 = [{"type":0,"at":6,"value":"t"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.string.exec(data2, commitTuple8.toExec);

    var update16 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1,"7":1},"invClusterSize":3},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":1,"at":7,"value":"etr"},"execOrder":20},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ry"},"execOrder":21}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

    var commit9 = [{"type":0,"at":8,"value":"eqw"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.string.exec(data2, commitTuple9.toExec);

    var update17 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":22}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.string.exec(data2, updateTuple17.toExec);

    var update18 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"eqw"},"execOrder":23}];
    var updateTuple18 = doc2.update(update18);
    data2 = clv.string.exec(data2, updateTuple18.toExec);

    var commitTuple10 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple10.toExec);

    var update19 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":24},{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":10,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":9,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":25}];
    var updateTuple19 = doc2.update(update19);
    data2 = clv.string.exec(data2, updateTuple19.toExec);

    var commitTuple11 = doc2.undo();
    data2 = clv.string.exec(data2, commitTuple11.toExec);

    var update20 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"eqw"},"execOrder":26}];
    var updateTuple20 = doc2.update(update20);
    data2 = clv.string.exec(data2, updateTuple20.toExec);

    var commit12 = [{"type":1,"at":5,"value":"o"}];
    var commitTuple12 = doc2.commit(commit12);
    data2 = clv.string.exec(data2, commitTuple12.toExec);

    var update21 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":27}];
    var updateTuple21 = doc2.update(update21);
    data2 = clv.string.exec(data2, updateTuple21.toExec);

    var update22 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":28}];
    var updateTuple22 = doc2.update(update22);
    data2 = clv.string.exec(data2, updateTuple22.toExec);

    var commit13 = [{"type":0,"at":3,"value":"rtq"}];
    var commitTuple13 = doc2.commit(commit13);
    data2 = clv.string.exec(data2, commitTuple13.toExec);

    var update23 = [{"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":11,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"elW"},"execOrder":29}];
    var updateTuple23 = doc2.update(update23);
    data2 = clv.string.exec(data2, updateTuple23.toExec);

    var update24 = [{"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rtq"},"execOrder":30}];
    var updateTuple24 = doc2.update(update24);
    data2 = clv.string.exec(data2, updateTuple24.toExec);

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

    var serverUpdate0 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":11,"value":"r"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":12,"value":"y"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":8,"value":"t"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"lo "},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":7,"value":"wqy"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":1,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":9,"value":"wet"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"l"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"l"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":3,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":12,"value":"l"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":2,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"l"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":10,"value":"et"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{},"invClusterSize":0},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1}},"size":2},"invCount":1,"load":{"type":1,"at":10,"value":"et"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":7,"value":"wqy"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"rqy"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"etr"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":5,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"r"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1},"invClusterSize":2},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":0,"at":7,"value":"etr"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":3,"value":"lo "},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":4,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":4,"invCluster":{"4":1},"invClusterSize":1}},"size":1},"invCount":2,"load":{"type":1,"at":3,"value":"lo "},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"5":1,"6":1,"7":1},"invClusterSize":3},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":3,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":2,"load":{"type":1,"at":7,"value":"etr"},"execOrder":20};
    updateServer(serverUpdate19);

    var serverUpdate20 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":9,"value":"ry"},"execOrder":21};
    updateServer(serverUpdate20);

    var serverUpdate21 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":5,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":22};
    updateServer(serverUpdate21);

    var serverUpdate22 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":8,"value":"eqw"},"execOrder":23};
    updateServer(serverUpdate22);

    var serverUpdate23 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"tt"},"execOrder":24};
    updateServer(serverUpdate23);

    var serverUpdate24 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":10,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":9,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":0,"load":{"type":0,"at":1,"value":"t"},"execOrder":25};
    updateServer(serverUpdate24);

    var serverUpdate25 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":7,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":8,"value":"eqw"},"execOrder":26};
    updateServer(serverUpdate25);

    var serverUpdate26 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":6,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"4":2,"5":1,"6":1,"7":1},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":6,"invCluster":{"2":1,"3":1},"invClusterSize":2}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":27};
    updateServer(serverUpdate26);

    var serverUpdate27 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":8,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":5,"value":"o"},"execOrder":28};
    updateServer(serverUpdate27);

    var serverUpdate28 = {"siteId":"03ab5300-5353-11e7-964d-796c948c74df","seqId":11,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":7,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"elW"},"execOrder":29};
    updateServer(serverUpdate28);

    var serverUpdate29 = {"siteId":"03ae6040-5353-11e7-964d-796c948c74df","seqId":9,"context":{"vector":{"03ab5300-5353-11e7-964d-796c948c74df":{"seqId":10,"invCluster":{"4":2,"5":1,"6":1,"7":2},"invClusterSize":4},"03ae6040-5353-11e7-964d-796c948c74df":{"seqId":8,"invCluster":{"2":1,"3":1,"6":1,"7":1},"invClusterSize":4}},"size":2},"invCount":0,"load":{"type":0,"at":3,"value":"rtq"},"execOrder":30};
    updateServer(serverUpdate29);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
