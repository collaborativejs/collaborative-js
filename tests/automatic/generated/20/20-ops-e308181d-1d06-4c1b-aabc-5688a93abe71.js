var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - ins/ins/rm/undo/rm/undo/undo/ins/ins/ins/ins/rm/ins/rm/ins/ins/undo/rm/rm/rm - 20-ops-e308181d-1d06-4c1b-aabc-5688a93abe71", function() {
  var doc1 = new clv.string.Document("5bd49560-537f-11e7-bb7c-97aca581ed91", 0, null);
  var doc2 = new clv.string.Document("5bd64310-537f-11e7-bb7c-97aca581ed91", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";

  var serverData = {"id":"848fafe6-1d08-45e3-b11f-3a679c875f33","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 5bd49560-537f-11e7-bb7c-97aca581ed91 operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":7,"value":"r"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.ops.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.ops.string.exec(data1, updateTuple1.toExec);

    var commit2 = [{"type":0,"at":4,"value":"tt"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.ops.string.exec(data1, commitTuple2.toExec);

    var update2 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tt"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.ops.string.exec(data1, updateTuple2.toExec);

    var commit3 = [{"type":1,"at":1,"value":"ell"}];
    var commitTuple3 = doc1.commit(commit3);
    data1 = clv.ops.string.exec(data1, commitTuple3.toExec);

    var update3 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":3},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.ops.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"rl"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.ops.string.exec(data1, updateTuple4.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple4.toExec);

    var update5 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"ww"},"execOrder":6}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.ops.string.exec(data1, updateTuple5.toExec);

    var update6 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"rod"},"execOrder":7},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"ell"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.ops.string.exec(data1, updateTuple6.toExec);

    var commit5 = [{"type":1,"at":2,"value":"ll"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.ops.string.exec(data1, commitTuple5.toExec);

    var update7 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"tyw"},"execOrder":9}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.ops.string.exec(data1, updateTuple7.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple6.toExec);

    var update8 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":10}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.ops.string.exec(data1, updateTuple8.toExec);

    var update9 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":11}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.ops.string.exec(data1, updateTuple9.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.ops.string.exec(data1, commitTuple7.toExec);

    var update10 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yyr"},"execOrder":12}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.ops.string.exec(data1, updateTuple10.toExec);

    var commit8 = [{"type":0,"at":14,"value":"twt"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.ops.string.exec(data1, commitTuple8.toExec);

    var update11 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yyr"},"execOrder":13},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tt"},"execOrder":14}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.ops.string.exec(data1, updateTuple11.toExec);

    var update12 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"twt"},"execOrder":15}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.ops.string.exec(data1, updateTuple12.toExec);

    var commit9 = [{"type":0,"at":15,"value":"qq"}];
    var commitTuple9 = doc1.commit(commit9);
    data1 = clv.ops.string.exec(data1, commitTuple9.toExec);

    var update13 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"tt"},"execOrder":16},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"qq"},"execOrder":17}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.ops.string.exec(data1, updateTuple13.toExec);

    var commit10 = [{"type":0,"at":9,"value":"rt"}];
    var commitTuple10 = doc1.commit(commit10);
    data1 = clv.ops.string.exec(data1, commitTuple10.toExec);

    var update14 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":8,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"twt"},"execOrder":18},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rt"},"execOrder":19}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.ops.string.exec(data1, updateTuple14.toExec);

    var update15 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":9,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":8,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"yWw"},"execOrder":20}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.ops.string.exec(data1, updateTuple15.toExec);

  });

  it("Site 5bd64310-537f-11e7-bb7c-97aca581ed91 operations should be executed without errors", function() {
    var update1 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.ops.string.exec(data2, updateTuple1.toExec);

    var commit1 = [{"type":0,"at":6,"value":"y"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.ops.string.exec(data2, commitTuple1.toExec);

    var update2 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tt"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.ops.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":3}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.ops.string.exec(data2, updateTuple3.toExec);

    var commit2 = [{"type":1,"at":12,"value":"rl"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.ops.string.exec(data2, commitTuple2.toExec);

    var commit3 = [{"type":0,"at":13,"value":"ww"}];
    var commitTuple3 = doc2.commit(commit3);
    data2 = clv.ops.string.exec(data2, commitTuple3.toExec);

    var update4 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":4},{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"rl"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.ops.string.exec(data2, updateTuple4.toExec);

    var commit4 = [{"type":1,"at":7,"value":"rod"}];
    var commitTuple4 = doc2.commit(commit4);
    data2 = clv.ops.string.exec(data2, commitTuple4.toExec);

    var update5 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"ww"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.ops.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"rod"},"execOrder":7}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.ops.string.exec(data2, updateTuple6.toExec);

    var commit5 = [{"type":0,"at":9,"value":"tyw"}];
    var commitTuple5 = doc2.commit(commit5);
    data2 = clv.ops.string.exec(data2, commitTuple5.toExec);

    var update7 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"ell"},"execOrder":8}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.ops.string.exec(data2, updateTuple7.toExec);

    var update8 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"tyw"},"execOrder":9}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.ops.string.exec(data2, updateTuple8.toExec);

    var update9 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":10}];
    var updateTuple9 = doc2.update(update9);
    data2 = clv.ops.string.exec(data2, updateTuple9.toExec);

    var commit6 = [{"type":0,"at":6,"value":"yyr"}];
    var commitTuple6 = doc2.commit(commit6);
    data2 = clv.ops.string.exec(data2, commitTuple6.toExec);

    var commitTuple7 = doc2.undo();
    data2 = clv.ops.string.exec(data2, commitTuple7.toExec);

    var update10 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":11},{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yyr"},"execOrder":12}];
    var updateTuple10 = doc2.update(update10);
    data2 = clv.ops.string.exec(data2, updateTuple10.toExec);

    var update11 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yyr"},"execOrder":13}];
    var updateTuple11 = doc2.update(update11);
    data2 = clv.ops.string.exec(data2, updateTuple11.toExec);

    var commit8 = [{"type":1,"at":4,"value":"tt"}];
    var commitTuple8 = doc2.commit(commit8);
    data2 = clv.ops.string.exec(data2, commitTuple8.toExec);

    var update12 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tt"},"execOrder":14},{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"twt"},"execOrder":15}];
    var updateTuple12 = doc2.update(update12);
    data2 = clv.ops.string.exec(data2, updateTuple12.toExec);

    var update13 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"tt"},"execOrder":16}];
    var updateTuple13 = doc2.update(update13);
    data2 = clv.ops.string.exec(data2, updateTuple13.toExec);

    var commit9 = [{"type":1,"at":11,"value":"twt"}];
    var commitTuple9 = doc2.commit(commit9);
    data2 = clv.ops.string.exec(data2, commitTuple9.toExec);

    var update14 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"qq"},"execOrder":17}];
    var updateTuple14 = doc2.update(update14);
    data2 = clv.ops.string.exec(data2, updateTuple14.toExec);

    var update15 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":8,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"twt"},"execOrder":18}];
    var updateTuple15 = doc2.update(update15);
    data2 = clv.ops.string.exec(data2, updateTuple15.toExec);

    var commit10 = [{"type":1,"at":6,"value":"yWw"}];
    var commitTuple10 = doc2.commit(commit10);
    data2 = clv.ops.string.exec(data2, commitTuple10.toExec);

    var update16 = [{"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rt"},"execOrder":19}];
    var updateTuple16 = doc2.update(update16);
    data2 = clv.ops.string.exec(data2, updateTuple16.toExec);

    var update17 = [{"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":9,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":8,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"yWw"},"execOrder":20}];
    var updateTuple17 = doc2.update(update17);
    data2 = clv.ops.string.exec(data2, updateTuple17.toExec);

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

    var serverUpdate0 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":7,"value":"r"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":4,"value":"tt"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":1,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"y"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":1,"value":"ell"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":12,"value":"rl"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":13,"value":"ww"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":7,"value":"rod"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":3,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":1,"value":"ell"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{},"invClusterSize":0},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"tyw"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":3,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":4,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"yyr"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1},"invClusterSize":1},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"yyr"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":2,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":1,"at":4,"value":"tt"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":5,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":14,"value":"twt"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":4,"invCluster":{"3":1,"4":1},"invClusterSize":2},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":4,"value":"tt"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":6,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":15,"value":"qq"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":8,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":11,"value":"twt"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"5bd49560-537f-11e7-bb7c-97aca581ed91","seqId":7,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":7,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":0,"at":9,"value":"rt"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"5bd64310-537f-11e7-bb7c-97aca581ed91","seqId":9,"context":{"vector":{"5bd49560-537f-11e7-bb7c-97aca581ed91":{"seqId":6,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3},"5bd64310-537f-11e7-bb7c-97aca581ed91":{"seqId":8,"invCluster":{"6":1},"invClusterSize":1}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"yWw"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
  });

});
