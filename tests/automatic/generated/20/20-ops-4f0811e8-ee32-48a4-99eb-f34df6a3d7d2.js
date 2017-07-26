var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/undo/ins/rm/undo/rm/ins/ins/rm/undo/ins/undo/ins/undo/ins/rm/undo/redo/rm/undo - 20-ops-4f0811e8-ee32-48a4-99eb-f34df6a3d7d2", function() {
  var doc1 = new clv.string.Document("b967f780-537f-11e7-94a4-b9af09a56143", 0, null);
  var doc2 = new clv.string.Document("b96a1a60-537f-11e7-94a4-b9af09a56143", 0, null);
  var doc3 = new clv.string.Document("b96b79f0-537f-11e7-94a4-b9af09a56143", 0, null);
  var doc4 = new clv.string.Document("b96cb270-537f-11e7-94a4-b9af09a56143", 0, null);
  var doc5 = new clv.string.Document("b96e1200-537f-11e7-94a4-b9af09a56143", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";
  var data4 = "Hello World";
  var data5 = "Hello World";

  var serverData = {"id":"bc6420b9-520d-4fe6-b0be-c70cea797208","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site b967f780-537f-11e7-94a4-b9af09a56143 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":8,"value":"qrw"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var update3 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commitTuple2 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update4 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var update5 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commit3 = [{"type":0,"at":8,"value":"ewr"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update8 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var update10 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var update11 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13},{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commit4 = [{"type":1,"at":5,"value":" d"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update13 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var update14 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commitTuple5 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update15 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

  });

  it("Site b96a1a60-537f-11e7-94a4-b9af09a56143 operations should be executed without errors", function() {
    var update1 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var commit1 = [{"type":1,"at":8,"value":"Wor"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update6 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var update7 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7},{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.string.exec(data2, updateTuple9.toExec);

    var update10 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13},{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.string.exec(data2, updateTuple11.toExec);

    var update12 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.string.exec(data2, updateTuple13.toExec);

    var commit2 = [{"type":0,"at":1,"value":"yq"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update14 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.string.exec(data2, updateTuple15.toExec);

    var update16 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.string.exec(data2, updateTuple16.toExec);

  });

  it("Site b96b79f0-537f-11e7-94a4-b9af09a56143 operations should be executed without errors", function() {
    var update1 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var update2 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var update4 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":4,"value":"t"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update5 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6},{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var commit2 = [{"type":1,"at":0,"value":"He"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update7 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9},{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13},{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

    var commitTuple3 = doc3.undo();
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update11 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15}];
    var updateTuple11 = doc3.update(update11);
    data3 = clv.string.exec(data3, updateTuple11.toExec);

    var update12 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16},{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17}];
    var updateTuple12 = doc3.update(update12);
    data3 = clv.string.exec(data3, updateTuple12.toExec);

    var update13 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18}];
    var updateTuple13 = doc3.update(update13);
    data3 = clv.string.exec(data3, updateTuple13.toExec);

    var update14 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19}];
    var updateTuple14 = doc3.update(update14);
    data3 = clv.string.exec(data3, updateTuple14.toExec);

    var update15 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20}];
    var updateTuple15 = doc3.update(update15);
    data3 = clv.string.exec(data3, updateTuple15.toExec);

  });

  it("Site b96cb270-537f-11e7-94a4-b9af09a56143 operations should be executed without errors", function() {
    var update1 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1}];
    var updateTuple1 = doc4.update(update1);
    data4 = clv.string.exec(data4, updateTuple1.toExec);

    var update2 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2}];
    var updateTuple2 = doc4.update(update2);
    data4 = clv.string.exec(data4, updateTuple2.toExec);

    var update3 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc4.update(update3);
    data4 = clv.string.exec(data4, updateTuple3.toExec);

    var update4 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5}];
    var updateTuple4 = doc4.update(update4);
    data4 = clv.string.exec(data4, updateTuple4.toExec);

    var commit1 = [{"type":0,"at":12,"value":"yy"}];
    var commitTuple1 = doc4.commit(commit1);
    data4 = clv.string.exec(data4, commitTuple1.toExec);

    var update5 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6}];
    var updateTuple5 = doc4.update(update5);
    data4 = clv.string.exec(data4, updateTuple5.toExec);

    var update6 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7},{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8}];
    var updateTuple6 = doc4.update(update6);
    data4 = clv.string.exec(data4, updateTuple6.toExec);

    var update7 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9}];
    var updateTuple7 = doc4.update(update7);
    data4 = clv.string.exec(data4, updateTuple7.toExec);

    var commitTuple2 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple2.toExec);

    var update8 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10},{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11}];
    var updateTuple8 = doc4.update(update8);
    data4 = clv.string.exec(data4, updateTuple8.toExec);

    var update9 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12}];
    var updateTuple9 = doc4.update(update9);
    data4 = clv.string.exec(data4, updateTuple9.toExec);

    var commit3 = [{"type":0,"at":3,"value":"te"}];
    var commitTuple3 = doc4.commit(commit3);
    data4 = clv.string.exec(data4, commitTuple3.toExec);

    var commitTuple4 = doc4.undo();
    data4 = clv.string.exec(data4, commitTuple4.toExec);

    var update10 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13},{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14}];
    var updateTuple10 = doc4.update(update10);
    data4 = clv.string.exec(data4, updateTuple10.toExec);

    var update11 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15}];
    var updateTuple11 = doc4.update(update11);
    data4 = clv.string.exec(data4, updateTuple11.toExec);

    var update12 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16},{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17}];
    var updateTuple12 = doc4.update(update12);
    data4 = clv.string.exec(data4, updateTuple12.toExec);

    var update13 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18}];
    var updateTuple13 = doc4.update(update13);
    data4 = clv.string.exec(data4, updateTuple13.toExec);

    var update14 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19}];
    var updateTuple14 = doc4.update(update14);
    data4 = clv.string.exec(data4, updateTuple14.toExec);

    var update15 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20}];
    var updateTuple15 = doc4.update(update15);
    data4 = clv.string.exec(data4, updateTuple15.toExec);

  });

  it("Site b96e1200-537f-11e7-94a4-b9af09a56143 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":4,"value":"qw"}];
    var commitTuple1 = doc5.commit(commit1);
    data5 = clv.string.exec(data5, commitTuple1.toExec);

    var update1 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1}];
    var updateTuple1 = doc5.update(update1);
    data5 = clv.string.exec(data5, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":6,"value":"o"}];
    var commitTuple2 = doc5.commit(commit2);
    data5 = clv.string.exec(data5, commitTuple2.toExec);

    var update2 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2}];
    var updateTuple2 = doc5.update(update2);
    data5 = clv.string.exec(data5, updateTuple2.toExec);

    var update3 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3}];
    var updateTuple3 = doc5.update(update3);
    data5 = clv.string.exec(data5, updateTuple3.toExec);

    var commitTuple3 = doc5.undo();
    data5 = clv.string.exec(data5, commitTuple3.toExec);

    var update4 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4}];
    var updateTuple4 = doc5.update(update4);
    data5 = clv.string.exec(data5, updateTuple4.toExec);

    var update5 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5}];
    var updateTuple5 = doc5.update(update5);
    data5 = clv.string.exec(data5, updateTuple5.toExec);

    var update6 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6}];
    var updateTuple6 = doc5.update(update6);
    data5 = clv.string.exec(data5, updateTuple6.toExec);

    var update7 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7}];
    var updateTuple7 = doc5.update(update7);
    data5 = clv.string.exec(data5, updateTuple7.toExec);

    var commitTuple4 = doc5.redo();
    data5 = clv.string.exec(data5, commitTuple4.toExec);

    var update8 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8}];
    var updateTuple8 = doc5.update(update8);
    data5 = clv.string.exec(data5, updateTuple8.toExec);

    var update9 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9}];
    var updateTuple9 = doc5.update(update9);
    data5 = clv.string.exec(data5, updateTuple9.toExec);

    var update10 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10}];
    var updateTuple10 = doc5.update(update10);
    data5 = clv.string.exec(data5, updateTuple10.toExec);

    var update11 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11}];
    var updateTuple11 = doc5.update(update11);
    data5 = clv.string.exec(data5, updateTuple11.toExec);

    var commit5 = [{"type":1,"at":6,"value":"ly"}];
    var commitTuple5 = doc5.commit(commit5);
    data5 = clv.string.exec(data5, commitTuple5.toExec);

    var update12 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12}];
    var updateTuple12 = doc5.update(update12);
    data5 = clv.string.exec(data5, updateTuple12.toExec);

    var update13 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13}];
    var updateTuple13 = doc5.update(update13);
    data5 = clv.string.exec(data5, updateTuple13.toExec);

    var update14 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14}];
    var updateTuple14 = doc5.update(update14);
    data5 = clv.string.exec(data5, updateTuple14.toExec);

    var commitTuple6 = doc5.undo();
    data5 = clv.string.exec(data5, commitTuple6.toExec);

    var update15 = [{"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15}];
    var updateTuple15 = doc5.update(update15);
    data5 = clv.string.exec(data5, updateTuple15.toExec);

    var update16 = [{"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16}];
    var updateTuple16 = doc5.update(update16);
    data5 = clv.string.exec(data5, updateTuple16.toExec);

    var update17 = [{"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17}];
    var updateTuple17 = doc5.update(update17);
    data5 = clv.string.exec(data5, updateTuple17.toExec);

    var update18 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18}];
    var updateTuple18 = doc5.update(update18);
    data5 = clv.string.exec(data5, updateTuple18.toExec);

    var update19 = [{"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19}];
    var updateTuple19 = doc5.update(update19);
    data5 = clv.string.exec(data5, updateTuple19.toExec);

    var update20 = [{"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20}];
    var updateTuple20 = doc5.update(update20);
    data5 = clv.string.exec(data5, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":8,"value":"qrw"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":4,"value":"qw"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"o"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":6,"value":"o"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":8,"value":"qrw"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":12,"value":"yy"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":4,"value":"t"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":8,"value":"Wor"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":2,"load":{"type":1,"at":6,"value":"o"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":0,"value":"He"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":8,"value":"ewr"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":1,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":1,"load":{"type":1,"at":12,"value":"yy"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":6,"value":"ly"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":3,"value":"te"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"b96cb270-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":1,"at":3,"value":"te"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"b96e1200-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":6,"value":"ly"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"b96b79f0-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":0,"value":"He"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":1,"at":5,"value":" d"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"b96a1a60-537f-11e7-94a4-b9af09a56143","seqId":2,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2,"3":1},"invClusterSize":2},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":0,"load":{"type":0,"at":1,"value":"yq"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"b967f780-537f-11e7-94a4-b9af09a56143","seqId":3,"context":{"vector":{"b967f780-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"1":1},"invClusterSize":1},"b96e1200-537f-11e7-94a4-b9af09a56143":{"seqId":3,"invCluster":{"2":2},"invClusterSize":1},"b96cb270-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"b96b79f0-537f-11e7-94a4-b9af09a56143":{"seqId":2,"invCluster":{},"invClusterSize":0},"b96a1a60-537f-11e7-94a4-b9af09a56143":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":5},"invCount":1,"load":{"type":0,"at":5,"value":" d"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
    assert.equal(data4, serverData.data, "Site 4 data should be equal to server");
    assert.equal(data5, serverData.data, "Site 5 data should be equal to server");
  });

});
