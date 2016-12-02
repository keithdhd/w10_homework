var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.stockInventory = [];
  this.soldInventory = [];
  this.sales = 0;
  this.refunds = 0;
};


RecordStore.prototype = {
  addInventory: function(record){
    this.stockInventory.push(record);
  }
}

module.exports = RecordStore;