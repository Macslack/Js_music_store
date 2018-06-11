var _ = require('lodash');


const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}



const Record1 = new Record("test_artist", "test_title", "test_genre", 10.00);
const Record2 = new Record("test_artist2", "test_title2", "test_genre2", 15.00);
const RecordStore1 = new RecordStore("test_name", "test_city")

RecordStore.prototype.balance = function () {
  this.balance = balance
};

RecordStore1.inventory.push(Record1);
RecordStore1.inventory.push(Record2)

Record.prototype.printOut = function(Record) {
  console.log(Record);
};

RecordStore.prototype.ListInventory = function () {
  console.log(this.inventory);
};

// Record1.printOut(Record1);
// RecordStore1.ListInventory();

RecordStore.prototype.sell = function (RecordStore,Record) {
  RecordStore.balance += Record.price
};

RecordStore.prototype.report = function () {
  this.total = 0;
  this.inventory.forEach(function(record){
    this.total += record.price;
    console.log(this);
  }.bind(this));
}

RecordStore.prototype.findByGenre = function (genre) {
  return _.find(this.inventory, function(record) {
    return record.genre === genre;
  });
};

RecordStore1.sell(RecordStore1, Record1);
// console.log(RecordStore1);
RecordStore1.report(RecordStore1)
RecordStore1.findByGenre("test_genre2")


const RecordCollector = function(name){
  this.name = name;
};
