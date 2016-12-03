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
  },
  recordRefund: function(amount){
    this.refunds -= amount;
  },
  reportIncome: function(num){
    // var stock = [1];
    console.log(num);
  // return stock.forEach(function(item){ 
  // item.name});
  }

};

module.exports = Store;