//based on https://github.com/cvalenzuela/Mappa

var canvas;
var myMap;
var tripsCoordinates;


var delta = 0;

var origin;
var originVector;
var destination;
var destinationVector;


var visitedRoutes = []; // A new array to hold all visited positions
var key = 'AIzaSyCdmGJ7JWNWkmmxSdvNiu1Qo6BMn56eTSE';

var options = {
    lat: 40.73447,
    lng: -74.00232,
    zoom: 4,
    styles: style
}
var mappa = new Mappa('Google', key);


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
  
}

function draw() {
    //clear(); clear can be commented since drawRoute() will handle clearing the canvas
    if (delta < 1) {
        delta += 0.2;
    } else {     
        delta = 0;
        drawRoute(); // Call the drawRoute to update the route
    }



    noStroke(); // remove the stroke from the route
    fill(255, 255, 0);


    o = myMap.latLngToPixel(40, -74);
    d1 = myMap.latLngToPixel(17, -100);
    d2 = myMap.latLngToPixel(37, -122);
    oVector = createVector(o.x, o.y);
    d1Vector = createVector(d1.x, d1.y);
    d2Vector = createVector(d2.x, d2.y);
    for (i = 0; i <= 1000; i++) {
        if (frameCount<=1000){
            pos = oVector.lerp(d1Vector, frameCount / 1000);
            pos2 = createVector(o.x, o.y).lerp(d2Vector, frameCount / 1000);
            ellipse(pos.x, pos.y, 10, 10);
            ellipse(pos2.x, pos2.y, 10, 10);
        }
    }
}



//This functions draws a line with n-vertices where n = visited routes;
function drawRoute() {
    clear();
    stroke(255, 0, 0, 40); // stroke color and width to see the route line
    strokeWeight(5);
    noFill();
    beginShape();
    visitedRoutes.forEach(function (e) {
        vertex(pos.x, pos.y);
    })
    endShape()
}