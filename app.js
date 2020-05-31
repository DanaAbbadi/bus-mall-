'use strict';

var namesAll = [
    { name: "bag", type: "jpg" },       { name: "banana", type: "jpg" },     { name: "bathroom", type: "jpg" },  { name: "boots", type: "jpg" },
    { name: "breakfast", type: "jpg" }, { name: "bubblegum", type: "jpg"},   { name: "chair", type: "jpg" },     { name: "cthulhu", type: "jpg" },
    { name: "dog-duck", type: "jpg" },  { name: "dragon", type: "jpg" },     { name: "pen", type: "jpg" },       { name: "pet-sweep", type: "jpg" },
    { name: "scissors", type: "jpg" },  { name: "shark", type: "jpg" },      { name: "tauntaun", type: "jpg" },  { name: "unicorn", type: "jpg" },
    { name: "water-can", type: "jpg" }, { name: "wine-glass", type: "jpg" }, { name: "usb", type: "gif" },       { name: "sweep", type: "png" }
];




// Constructor
function Bus(name, type) {
    this.BusName = name;
    this.imagePath = `img/${name}.${type}`;
    this.clicks = 0;
    this.views = 0;

    Bus.all.push(this);
}
Bus.all = [];

// creating objects
for (var i = 0; i < namesAll.length; i++) {
    new Bus(namesAll[i].name, namesAll[i].type);
}

console.table(Bus.all);


// 









