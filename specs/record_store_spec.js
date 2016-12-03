var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe("record store", function(){

  var recordStore1;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    recordStore1 = new RecordStore("Breaking Records", "Glasgow");
    record1 = new Record("The Beatles", "Yellow Submarine", 9.99, 12.99);
    record2 = new Record("The Beatles", "Help", 12.99, 15.99);
    record3 = new Record("Take That", "Back for Good", 6.99, 9.99);

  });

  it("record store has name", function(){
    assert.equal("Breaking Records", recordStore1.name);
  });

  it("record store has city", function(){
    assert.equal("Glasgow", recordStore1.city);
  });

  it("record store stock inventory is nil", function(){
    assert.equal(0, recordStore1.stockInventory.length);
  });

  it("record store sold inventory starts at nil", function(){
    assert.equal(0, recordStore1.soldInventory.length);
  });

  it("can add record to inventory", function(){
    recordStore1.addInventory(record1);
    assert.equal(1, recordStore1.stockInventory.length);
  });

  it("can record sale", function(){
    recordStore1.recordSale(10);
    assert.equal(10, recordStore1.sales);
  });

  it("can record refund", function(){
    recordStore1.recordRefund(20);
    assert.equal(-20, recordStore1.refunds);
  });

  it("find record by name", function(){
    recordStore1.addInventory(record2);
    recordStore1.addInventory(record1);
    assert.deepEqual(record2, recordStore1.findRecord("The Beatles","Help" ));
  });

  it("find records by artist", function(){
    recordStore1.addInventory(record2);
    recordStore1.addInventory(record1);
   assert.deepEqual(record2, record1, recordStore1.findArtistRecords("The Beatles"));
  })


})