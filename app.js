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

var leftImage = document.getElementById('leftImage');
var rightImage = document.querySelector('#rightImage');
var middleImage = document.querySelector('#middleImage');
var imagesSection = document.querySelector('#vote');

var leftBus, rightBus, middleBus;

function renderImages() {
    var rund = randomNumber(0, Bus.all.length - 1);
    leftBus = Bus.all[rund[0]];
    rightBus = Bus.all[rund[1]];
    middleBus = Bus.all[rund[2]];


    leftImage.src = leftBus.imagePath;
    leftImage.alt = leftBus.BusName;
    leftImage.title = leftBus.BusName;

    middleImage.src = middleBus.imagePath;
    middleImage.alt = middleBus.BusName;
    middleImage.title = middleBus.BusName;

    rightImage.src = rightBus.imagePath;
    rightImage.alt = rightBus.BusName;
    rightImage.title = rightBus.BusName;
}

renderImages();

//counting the clicks

var totalClicks = 0;
vote.addEventListener('click', handleClick);

function handleClick(event) {

    if (totalClicks < 25) {
        if (event.target.id !== 'vote') {

             totalClicks++;
            if (event.target.id === 'leftImage') {
                leftBus.clicks++;
                leftBus.views++;
            }

            if (event.target.id === 'rightImage') {
                rightBus.clicks++;
                rightBus.views++;
            }

            if (event.target.id === 'middleImage') {
                middleBus.clicks++;
                middleBus.views++;
            }

            renderImages();
        }
    }
    else {
          renderResults();
    }
}


function renderResults () {
    var ulE1 = document.getElementById('finalResult');
    for( var i =0; i<Bus.all.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${Bus.all[i].BusName} has ${Bus.all[i].clicks} clicks and was shown ${Bus.all[i].views} times `;
      ulE1.append(li);
    }
  }






//helper functions
function randomNumber(min, max) {
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    var c = Math.floor(Math.random() * (max - min + 1)) + min;
    while (a == b || a == c || c == b) {
        a = Math.floor(Math.random() * (max - min + 1)) + min;
        b = Math.floor(Math.random() * (max - min + 1)) + min;
        c = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return [a, b, c];
}










