var InheritsFrom = require("./inheritsFrom");
var Store = require("./store");

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  Store.call(this);
};



RecordStore.prototype = {
  // addInventory: function(record){
  //   this.stockInventory.push(record);
  // }
}

InheritsFrom(RecordStore, Store);

module.exports = RecordStore;