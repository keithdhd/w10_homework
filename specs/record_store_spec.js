var assert = require('assert');
var RecordStore = require('../record_store');

describe("record store", function(){

  var recordStore1;

  beforeEach(function(){
    recordStore1 = new RecordStore("Breaking Records", "Glasgow");
  });

  it("record store has name", function(){
    assert.equal("Breaking Records", recordStore1.name);
  })
})