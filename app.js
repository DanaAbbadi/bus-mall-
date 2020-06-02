'use strict';


// All variables

var namesAll = [
    { name: "bag", type: "jpg" }, { name: "banana", type: "jpg" }, { name: "bathroom", type: "jpg" }, { name: "boots", type: "jpg" },
    { name: "breakfast", type: "jpg" }, { name: "bubblegum", type: "jpg" }, { name: "chair", type: "jpg" }, { name: "cthulhu", type: "jpg" },
    { name: "dog-duck", type: "jpg" }, { name: "dragon", type: "jpg" }, { name: "pen", type: "jpg" }, { name: "pet-sweep", type: "jpg" },
    { name: "scissors", type: "jpg" }, { name: "shark", type: "jpg" }, { name: "tauntaun", type: "jpg" }, { name: "unicorn", type: "jpg" },
    { name: "water-can", type: "jpg" }, { name: "wine-glass", type: "jpg" }, { name: "usb", type: "gif" }, { name: "sweep", type: "png" }
];


var leftBus, rightBus, middleBus;
var a = 50, b = 50, c = 50;
var aOld, bOld, cOld;
var iter = true;
var oldValues = [];
var totalClicks = 0;
var imgLabel = [];

var leftImage = document.getElementById('leftImage');
var rightImage = document.querySelector('#rightImage');
var middleImage = document.querySelector('#middleImage');
var imagesSection = document.querySelector('#vote');


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

renderImages();


function renderImages() {
    //pick random img
    leftBus = Bus.all[randomNumber(0, Bus.all.length - 1)];
    rightBus = Bus.all[randomNumber(0, Bus.all.length - 1)];
    middleBus = Bus.all[randomNumber(0, Bus.all.length - 1)];
    
    console.log('first iteration : ', oldValues , leftBus, rightBus, middleBus);

    //apply  conditions

    while (leftBus == rightBus || leftBus == middleBus || rightBus == middleBus
        || oldValues.includes[leftBus] || oldValues.includes[middleBus] || oldValues.includes[rightBus]) {

            renderImages();
    }

    console.log('2nd iteration : ', oldValues);

    oldValues = [];

    oldValues.push(leftBus);
    oldValues.push(rightBus);
    oldValues.push(middleBus);

    //fill properties
    leftImage.src = leftBus.imagePath;
    leftImage.alt = leftBus.BusName;
    leftImage.title = leftBus.BusName;
    leftBus.views++;


    middleImage.src = middleBus.imagePath;
    middleImage.alt = middleBus.BusName;
    middleImage.title = middleBus.BusName;
    middleBus.views++;


    rightImage.src = rightBus.imagePath;
    rightImage.alt = rightBus.BusName;
    rightImage.title = rightBus.BusName;
    rightBus.views++;

}


//counting the clicks

vote.addEventListener('click', handleClick);

function handleClick(event) {

    if (totalClicks < 10) {
        if (event.target.id !== 'vote') {

            totalClicks++;
            if (event.target.id === 'leftImage') {
                leftBus.clicks++;
            }

            if (event.target.id === 'rightImage') {
                rightBus.clicks++;
            }

            if (event.target.id === 'middleImage') {
                middleBus.clicks++;
            }

            renderImages();
        }
    }
    else {
        vote.removeEventListener('click', handleClick);
        renderResults1();
    }
}


//helper functions

function randomNumber(min, max) {
    // a = Math.floor(Math.random() * (max - min + 1)) + min;
    // b = Math.floor(Math.random() * (max - min + 1)) + min;
    // c = Math.floor(Math.random() * (max - min + 1)) + min;
    // return [a, b, c];
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Charts

for (var i = 0; i < namesAll.length; i++) {
    imgLabel.push(namesAll[i].name);
}

function renderResults1() {

    var numOfClicks = [];
    for (var i = 0; i < Bus.all.length; i++) {
        numOfClicks.push(Bus.all[i].clicks);
    }


    var numOfViews = [];
    for (var i = 0; i < Bus.all.length; i++) {
        numOfViews.push(Bus.all[i].views);
    }

    var color1 = [];
    for (var i = 0; i < Bus.all.length; i++) {
        color1.push('rgb(226, 113, 175)');
    }

    var color2 = [];
    for (var i = 0; i < Bus.all.length; i++) {
        color2.push('rgb(117, 98, 134)');
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imgLabel,
            //  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: numOfClicks,
                backgroundColor: color1,
                borderColor: [
                    // 'rgba(255, 206, 86, 1)',

                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: numOfViews,
                backgroundColor: color2
                // 'rgb(117, 98, 134)'

                ,
                borderColor: [

                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }









            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}


//commented

// function decision(a,b,c){
//     var rand=randomNumber(0, Bus.all.length - 1);
//     var a= rand[0];
//     var b;
//     while (a == b || a == c || c == b) {
//         a = Math.floor(Math.random() * (max - min + 1)) + min;
//         b = Math.floor(Math.random() * (max - min + 1)) + min;
//         c = Math.floor(Math.random() * (max - min + 1)) + min;
//     }

// }


//console.table(Bus.all);


// function renderResults () {
//     var ulE1 = document.getElementById('finalResult');
//     for( var i =0; i<Bus.all.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = `${Bus.all[i].BusName} has ${Bus.all[i].clicks} clicks and was shown ${Bus.all[i].views} times `;
//       ulE1.append(li);
//     }
//     console.table('after',Bus.all);

//   }
























