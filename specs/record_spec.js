var assert = require('assert');
var Record = require('../record');

describe("record", function(){

  var record1;

beforeEach(function(){
  record1 = new Record("The Beatles", "Yellow Submarine", 9.99);
});

it("record has artist", function(){
  assert.equal("The Beatles", record1.artist);
})

});