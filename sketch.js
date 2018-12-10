/*
Victoria Reiter
vreiter@andrew.cmu.edu
Section B
Final Project
*/

var mapImage; // loads map background
var toggledOn; // makes country bio appear
var countryVicinity; // maximum distance possible between mouseX/Y and country position
var countries = []; // array to contain all countries
var whichSelected; // array value of selected country

// preloads map image background
function preload() {
    mapImage = loadImage("https://i.imgur.com/z6ty1Bi.png");
}

// creates each country as an object and pushes them into an array
// each country has a color, location, and image it will pop up with
function setup() {
    createCanvas(1300, 659);
    background(220);

    var america = {
        color: color(255, 255, 191),
        x: 120,
        y: 200,
        img: loadImage("https://i.imgur.com/8SMqOU4.jpg2")
    }
    countries.push(america);

    var argentina = {
        color: color(8, 104, 172),
        x: 360,
        y: 550,
        img: loadImage("https://i.imgur.com/Nk7xX52.jpg")
    }
    countries.push(argentina);

    var chile = {
        color: color(8, 64, 129),
        x: 320,
        y: 570,
        img: loadImage("https://i.imgur.com/WxdaXfL.jpg")
    }
    countries.push(chile);

    var uruguay = {
        color: color(43, 140, 190),
        x: 420,
        y: 544,
        img: loadImage("https://i.imgur.com/tp7dzBB.jpg")
    }
    countries.push(uruguay);

    var peru = {
        color: color(78, 179, 211),
        x: 340,
        y: 455,
        img: loadImage("https://i.imgur.com/sielvnG.jpg")
    }
    countries.push(peru);

    var germany = {
        color: color(33, 102, 172),
        x: 620,
        y: 200,
        img: loadImage("https://i.imgur.com/FVOB4HK.jpg")
    }
    countries.push(germany);

    var france = {
        color: color(54, 144, 192),
        x: 550,
        y: 230,
        img: loadImage("https://i.imgur.com/ha2K51p.jpg")
    }
    countries.push(france);

    var italy = {
        color: color(166, 189, 219),
        x: 640,
        y: 230,
        img: loadImage("https://i.imgur.com/HNDsgLP.jpg")
    }
    countries.push(italy);

    var britain = {
        color: color(5, 112, 176),
        x: 565,
        y: 175,
        img: loadImage("https://i.imgur.com/D7O2fRO.jpg")
    }
    countries.push(britain);

    var australia = {
        color: color(190, 186, 218),
        x: 1105,
        y: 530,
        img: loadImage("https://i.imgur.com/CgUYnxQ.jpg")
    }
    countries.push(australia);

    var newZealand = {
        color: color(142, 56, 142),
        x: 1235,
        y: 595,
        img: loadImage("https://i.imgur.com/yxATqNk.jpg")
    }
    countries.push(newZealand);

    var cameroon = {
        color: color(129, 15, 124),
        x: 650,
        y: 400,
        img: loadImage("https://i.imgur.com/emVJlxl.jpg")
    }
    countries.push(cameroon);

    var nicaragua = {
        color: color(2, 56, 88),
        x: 300,
        y: 363,
        img: loadImage("https://i.imgur.com/4A0bQxr.jpg")
    }
    countries.push(nicaragua);

    var canada = {
        color: color(4, 90, 141),
        x: 260,
        y: 125,
        img: loadImage("https://i.imgur.com/y1fFIh0.jpg")
    }
    countries.push(canada);

    var moldova = {
        color: color(158, 80, 170),
        x: 715,
        y: 220,
        img: loadImage("https://i.imgur.com/fJimQz7.jpg")
    }
    countries.push(moldova);

    var spain = {
        color: color(116, 169, 207),
        x: 585,
        y: 250,
        img: loadImage("https://i.imgur.com/KXOKjpW.jpg")
    }
    countries.push(spain);

    var china = {
        color: color(146, 197, 222),
        x: 975,
        y: 265,
        img: loadImage("https://i.imgur.com/Tjr5PL6.jpg")
    }
    countries.push(china);

    var haiti = {
        color: color(141, 10, 135),
        x: 220,
        y: 330,
        img: loadImage("https://i.imgur.com/VhYa9Fp.jpg")
    }
    countries.push(haiti);

    var hongKong = {
        color: color(74, 126, 195),
        x: 975,
        y: 330,
        img: loadImage("https://i.imgur.com/jvpeMbE.jpg")
    }
    countries.push(hongKong);

    var indonesia = {
        color: color(152, 78, 163),
        x: 1040,
        y: 430,
        img: loadImage("https://i.imgur.com/rdBJk16.jpg")
    }
    countries.push(indonesia);

    var nepal = {
        color: color(140, 107, 177),
        x: 910,
        y: 300,
        img: loadImage("https://i.imgur.com/HOfUeU2.jpg")
    }
    countries.push(nepal);

    var ecuador = {
        color: color(158, 188, 218),
        x: 300,
        y: 430,
        img: loadImage("https://i.imgur.com/gEO6bcG.jpg")
    }
    countries.push(ecuador);
}

function draw() {
    image(mapImage, 0, 0);
    
    // rectangle pop up of information will pop up if toggledOn is turned on
    if (toggledOn) {
        image(countries[whichSelected].img, 200, 25, width - 400, height - 25);

    }
}

// based on location and pixel color, the specific country will be identified
function mousePressed() {
    toggledOn = false;
    countryVicinity = 200;
    var colorAtMouseX = mapImage.get(mouseX, mouseY);
    var transformedColorAtMouseX = color(colorAtMouseX[0], colorAtMouseX[1], colorAtMouseX[2], colorAtMouseX[3]); 
    //whichSelected = what? your if statement is essentially going to check which item in the array of countries is the right one!
    for(var i = 0; i < countries.length; i++) {
        if ((dist(countries[i].x, countries[i].y, mouseX, mouseY) < countryVicinity)) {
            // print((countries[i].color).toString());
            // print((transformedColorAtMouseX).toString());
            if ((countries[i].color).toString() == transformedColorAtMouseX.toString()) {
                whichSelected = i;
                toggledOn = true;
            }
        }

    }
}