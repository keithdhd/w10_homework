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
},
findArtistRecords: function(artist){
  if(!artist) return this.stockInventory;
  return this.stockInventory.filter( function(record) {
    return record.artist === artist;
  });
},
stockCostValue: function(){
  var costPrice = this.stockInventory.map(function(record){return record.purPrice})
  return costPrice.reduce(function(a,b){return a + b}, 0);
},
stockSaleValue: function(){
  var salePrice = this.stockInventory.map(function(record){return record.salePrice})
  return salePrice.reduce(function(a,b){return a + b}, 0);
},
soldCostValue: function(){
  var costPrice = this.soldInventory.map(function(record){return record.purPrice})
  return costPrice.reduce(function(a,b){return a + b}, 0);
},
soldSaleValue: function(){
  var salePrice = this.soldInventory.map(function(record){return record.salePrice})
  return salePrice.reduce(function(a,b){return a + b}, 0);
},
sellRecord: function(artist, title){
  var record = this.findRecord(artist, title);
  var index = this.stockInventory.indexOf(record);
  this.stockInventory.splice(index, 1);
  this.soldInventory.push(record);
  this.recordSale(record.salePrice);
}
};

// InheritsFrom(RecordStore, Store);

module.exports = RecordStore;