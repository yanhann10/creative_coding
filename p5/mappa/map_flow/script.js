//based on https://github.com/cvalenzuela/Mappa

var canvas;
var myMap;
var tripsCoordinates;
var allCoordinates = [];
var data;

var delta = 0;
var coordinate = 0;

var origin;
var originVector;
var destination;
var destinationVector;

var taxiPosition;

var visitedRoutes = []; // A new array to hold all visited positions
var key = 'AIzaSyCdmGJ7JWNWkmmxSdvNiu1Qo6BMn56eTSE';

var options = {
  lat: 40.73447,
  lng: -74.00232,
  zoom: 4,
  styles: style
}
var mappa = new Mappa('Google', key);

function preload() {
  data = loadJSON('./data/taxiday1.geojson');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  tripsCoordinates = myMap.geoJSON(data, "LineString");

}

function draw() {
  noStroke();
  fill(255,255,0);
  //drawRoute();
  //clear();
  o2 = myMap.latLngToPixel(40, -74);
  d1 = myMap.latLngToPixel(27, -81);
 // d2 = myMap.latLngToPixel(37, -122);
  o2Vector = createVector(o2.x, o2.y);
  d1Vector = createVector(d1.x, d1.y);
  d2Vector = createVector(d2.x, d2.y);
  for (i = 0; i <= 1000; i++) {
    if (frameCount <= 200) {
      pos1 = createVector(o2.x, o2.y).lerp(d1Vector, frameCount / 500);
      pos2 = createVector(o2.x, o2.y).lerp(d2Vector, frameCount / 1000);
    } else {
      pos1 = d1;
      pos2 = d2;
    }
    ellipse(pos1.x, pos1.y, 5, 5);
    //ellipse(pos2.x, pos2.y, 5, 5);
  //}
  for (i = 0; i <= 10; i++) {
    noFill();
    beginShape();
    vertex(pos1.x, pos1.y);
    endShape()
  }

}

// function drawRoute(){
//   clear();
//   stroke(255,0,0, 40); // stroke color and width to see the route line
//   strokeWeight(5);
//   for (i = 0; i <= 1000; i++) {
//     noFill();
//     beginShape();
//     vertex(pos1.x, pos1.y);
//     endShape()
//   }
// }