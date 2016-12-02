var InheritsFrom = require("./inheritsFrom");
var Store = require("./store");

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  Store.call(this);
};



RecordStore.prototype = {
  

};

InheritsFrom(RecordStore, Store);

module.exports = RecordStore;