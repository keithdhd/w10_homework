var InheritsFrom = require("./inheritsFrom");
var Store = require("./store");

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  Store.call(this);
  this.stockInventory = [];
  this.soldInventory = [];
  this.sales = 0;
  this.refunds = 0;
};



RecordStore.prototype = {
 listInventory: function(){
   return this.stockInventory.forEach(function(item){console.log(item)});
 },
 addInventory: function(record){
   this.stockInventory.push(record);
 },
 recordSale: function(amount){
   this.sales += amount;
 },
 recordRefund: function(amount){
   this.refunds -= amount;
 },
 findRecord:function(artist, title) {
   return this.stockInventory.find( function(record) {
     return record.artist === artist && record.title === title;
   });
}
};

// InheritsFrom(RecordStore, Store);

module.exports = RecordStore;