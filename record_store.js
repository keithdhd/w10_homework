var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.stockInventory = [];
  this.soldInventory = [];
}

module.exports = RecordStore;