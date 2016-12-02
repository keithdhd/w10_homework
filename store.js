var Store = function(){
  this.stockInventory = [];
  this.soldInventory = [];
  this.sales = 0;
  this.refunds = 0;

};

Store.prototype = {
  addInventory: function(record){
    this.stockInventory.push(record);
  },
  recordSale: function(amount){
    this.sales += amount;
  }

};

module.exports = Store;