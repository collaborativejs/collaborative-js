var clv = require("../../index.js");
var assert = require('assert');

// test sets
// basic algorithm tests - A selective set of transformation conditions
// advanced algorithm tests - A comprehensive set of transformation conditions
//

describe('TP 1 - doc1/do, doc2/do, doc1&doc2/sync, compare results', function() {
  var doc1, doc2, tuple1, tuple2;
  var data1 = 'world';
  var data2 = 'world';
  var execOrder = 1;

  it('should create two instances of document', function() {
    doc1 = new clv.string.Document('S1');
    doc2 = new clv.string.Document('S2');
    assert.notEqual(doc1, doc2);
    assert.equal(doc1.getSiteId(), 'S1');
    assert.equal(doc2.getSiteId(), 'S2');
    assert.notEqual(doc1.getSiteId(), doc2.getSiteId());
  });

  it('should create TP 1 precondition', function() {
    var ops1 = clv.string.genOps(data1, 'Hello WOrld');
    tuple1 = doc1.commit(ops1);
    data1 = clv.string.exec(data1, tuple1.toExec);

    assert(ops1 instanceof Array);
    assert.equal(data1, 'Hello WOrld');

    var ops2 = clv.string.genOps(data2, 'worLD! my');
    tuple2 = doc2.commit(ops2);
    data2 = clv.string.exec(data2, tuple2.toExec);

    assert(ops2 instanceof Array);
    assert.equal(data2, 'worLD! my');
  });

  it('should transition both documents to the same state', function() {
    var ops = clv.enumerate(execOrder, tuple1.toSend, tuple2.toSend);
    execOrder += ops.length;

    var tuple3 = doc1.update(ops);
    var tuple4 = doc2.update(ops);

    data1 = clv.string.exec(data1, tuple3.toExec);
    data2 = clv.string.exec(data2, tuple4.toExec);

    assert.equal(data1, 'Hello WOrLD! my');
    assert.equal(data1, data2);
  });
});

describe('TP 2 - initial/b, doc1/insert a at 0, doc2/insert c at 1, doc3/remove b at 0, doc1&doc2&doc3/sync, compare results', function() {
  var doc1, doc2, doc3;
  var data1, data2, data3;
  var tuple1, tuple2, tuple3;
  var execOrder = 1;
  data1 = data2 = data3 = 'b';

  it('should create three documents', function() {
    doc1 = new clv.string.Document('S1');
    doc2 = new clv.string.Document('S2');
    doc3 = new clv.string.Document('S3');
    assert.notEqual(doc1, doc2);
    assert.notEqual(doc1, doc3);
    assert.notEqual(doc2, doc3);
    assert.equal(doc1.getSiteId(), 'S1');
    assert.equal(doc2.getSiteId(), 'S2');
    assert.equal(doc3.getSiteId(), 'S3');
    assert.notEqual(doc1.getSiteId(), doc2.getSiteId());
    assert.notEqual(doc1.getSiteId(), doc3.getSiteId());
    assert.notEqual(doc2.getSiteId(), doc3.getSiteId());
  });

  it('should create TP 2 precondition', function() {
    tuple1 = doc1.commit(clv.string.insert(0, 'a'));
    tuple2 = doc2.commit(clv.string.insert(1, 'c'));
    tuple3 = doc3.commit(clv.string.remove(0, 'b'));

    data1 = clv.string.exec(data1, tuple1.toExec);
    data2 = clv.string.exec(data2, tuple2.toExec);
    data3 = clv.string.exec(data3, tuple3.toExec);

    assert.equal(data1, 'ab');
    assert.equal(data2, 'bc');
    assert.equal(data3, '');
  });

  it('should transition all three documents to the same state', function() {
    var ops = clv.enumerate(execOrder, tuple1.toSend, tuple2.toSend, tuple3.toSend);
    execOrder += ops.length;

    tuple1 = doc1.update(ops);
    tuple2 = doc2.update(ops);
    tuple3 = doc3.update(ops);

    data1 = clv.string.exec(data1, tuple1.toExec);
    data2 = clv.string.exec(data2, tuple2.toExec);
    data3 = clv.string.exec(data3, tuple3.toExec);

    // in loose string policy this is the correct result
    // assert.equal(data1, 'ac');
    // in greedy string policy this is te correct result
    assert.equal(data1, '');

    assert.equal(data1, data2);
    assert.equal(data1, data3);
  });
});


describe('IP 1 - doc1/do, doc1/undo, doc1/redo, doc1&doc2/sync, compare do,redo ops load, compare results', function() {
  var doc1, doc2, tuple1, tuple2, tuple3;
  var data1 = 'world';
  var data2 = 'world';
  var execOrder = 1;

  it('should create two instances of document', function() {
    doc1 = new clv.string.Document('S1');
    doc2 = new clv.string.Document('S2');
    assert.notEqual(doc1, doc2);
    assert.equal(doc1.getSiteId(), 'S1');
    assert.equal(doc2.getSiteId(), 'S2');
    assert.notEqual(doc1.getSiteId(), doc2.getSiteId());
  });

  it('should create IP 1 precondition', function() {
    var ops = clv.string.genOps(data1, 'Hwo-RLd!');
    tuple1 = doc1.commit(ops);
    data1 = clv.string.exec(data1, tuple1.toExec);
    assert.equal(data1, 'Hwo-RLd!');

    tuple2 = doc1.undo();
    data1 = clv.string.exec(data1, tuple2.toExec);
    assert.equal(data1, 'world');

    tuple3 = doc1.redo();
    data1 = clv.string.exec(data1, tuple3.toExec);
    assert.equal(data1, 'Hwo-RLd!');
  });

  it('should ensure that loads of tuple1 and tuple3 are equal', function() {
    // load of tuple1 and tuple3 should be equal
    assert.equal(tuple1.length, tuple3.length);
    for (var i = 0, count = tuple1.length; i < count; i++) {
      assert.deepStrictEqual(tuple1[i].load, tuple3[i].load, 'Op #' + i + ' should be equal')
    }
  });

  it('should transition both documents to the same state', function() {
    var ops = clv.enumerate(execOrder, tuple1.toSend, tuple2.toSend, tuple3.toSend);
    execOrder += ops.length;

    var tuple = doc2.update(ops);
    data2 = clv.string.exec(data2, tuple.toExec);

    assert.equal(data1, data2);
  });
});


describe('IP 2', function() {
  var doc1, doc2, tuple1, tuple2, tuple3;
  var data1 = 'world';
  var data2 = 'world';
  var execOrder = 1;

  it('should create two instances of document', function() {
    doc1 = new clv.string.Document('S1');
    doc2 = new clv.string.Document('S2');
    assert.notEqual(doc1, doc2);
    assert.equal(doc1.getSiteId(), 'S1');
    assert.equal(doc2.getSiteId(), 'S2');
    assert.notEqual(doc1.getSiteId(), doc2.getSiteId());
  });

  it('should do some changes to the first document', function() {
    var ops = clv.string.genOps(data1, 'Hwo-RLd!');
    tuple1 = doc1.commit(ops);
    data1 = clv.string.exec(data1, tuple1.toExec);

    assert(ops instanceof Array);
    assert.equal(data1, 'Hwo-RLd!');
  });

  it('should undo changes of the first document made on the previous step', function() {
    tuple2 = doc1.undo();
    data1 = clv.string.exec(data1, tuple2.toExec);
    assert.equal(data1, data1);
  });

  it('should do some other changes to the first document', function() {
    var ops = clv.string.genOps(data1, 'neighborly');
    tuple3 = doc1.commit(ops);
    data1 = clv.string.exec(data1, tuple3.toExec);

    assert(ops instanceof Array);
    assert.equal(data1, 'neighborly');
  });

  it('should update second document to state 1st of the first document', function() {
    // set execOrder
    var toSend = clv.enumerate(execOrder, tuple1.toSend);
    execOrder = toSend[toSend.length - 1].execOrder + 1;

    // apply updates
    var tuple = doc2.update(toSend);
    data2 = clv.string.exec(data2, tuple.toExec);
    assert.equal(data2, 'Hwo-RLd!');
  });

  it('should update second document to state 2nd of the first document', function() {
    // set execOrder
    var toSend = clv.enumerate(execOrder, tuple2.toSend);
    execOrder = toSend[toSend.length - 1].execOrder + 1;

    // apply updates
    var tuple = doc2.update(toSend);
    data2 = clv.string.exec(data2, tuple.toExec);
    assert.equal(data2, 'world');
  });

  it('should update second document to state 3th of the first document', function() {
    // set execOrder
    var toSend = clv.enumerate(execOrder, tuple3.toSend);
    execOrder = toSend[toSend.length - 1].execOrder + 1;

    // apply updates
    var tuple = doc2.update(toSend);
    data2 = clv.string.exec(data2, tuple.toExec);
    assert.equal(data2, 'neighborly');
  });
});


describe('IP 3 - initial/abcd, doc1/insert f at 2, doc2/remove b at 0, doc1&doc2/sync, doc2/undo, compare results', function() {
  var doc1, doc2;
  var data1 = 'abcd';
  var data2 = 'abcd';
  var execOrder = 1;

  it('should create two instances of document', function() {
    doc1 = new clv.string.Document('S1');
    doc2 = new clv.string.Document('S2');
    assert.notEqual(doc1, doc2);
    assert.equal(doc1.getSiteId(), 'S1');
    assert.equal(doc2.getSiteId(), 'S2');
    assert.notEqual(doc1.getSiteId(), doc2.getSiteId());
  });

  it('should create IP 3 precondition', function() {
    var tuple1 = doc1.commit(clv.string.insert(2, 'f'));
    var tuple2 = doc2.commit(clv.string.remove(1, 'b'));

    data1 = clv.string.exec(data1, tuple1.toExec);
    data2 = clv.string.exec(data2, tuple2.toExec);

    assert.equal(data1, 'abfcd');
    assert.equal(data2, 'acd');

    var ops = clv.enumerate(execOrder, tuple1.toSend, tuple2.toSend);
    execOrder += ops.length;

    var tuple3 = doc1.update(ops);
    var tuple4 = doc2.update(ops);

    data1 = clv.string.exec(data1, tuple3.toExec);
    data2 = clv.string.exec(data2, tuple4.toExec);

    // this result is correct for loose string policy
    // assert.equal(data1, 'afcd');
    // this result is correct for greedy string policy
    assert.equal(data1, 'acd');
    assert.equal(data1, data2);
  });

  it('should undo last second document op and transition both documents to the same state', function() {
    // undo remove op
    var tuple1 = doc2.undo();
    data2 = clv.string.exec(data2, tuple1.toExec);

    // sync documents
    var ops = clv.enumerate(execOrder, tuple1.toSend);
    var tuple2 = doc1.update(ops);
    data1 = clv.string.exec(data1, tuple2.toExec);

    assert.equal(data1, 'abfcd');
    assert.equal(data1, data2);
  });
});


