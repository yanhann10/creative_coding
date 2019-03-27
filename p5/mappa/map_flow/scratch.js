
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

  tripsCoordinates.forEach(function (trip) {
    trip.forEach(function (coordinate) {
        allCoordinates.push(coordinate)
      })
  });
  //myMap.onChange(drawPoints);
  myMap.onChange(drawRoute); // Everytime the map is zoomed or moved update the route
}

function draw(){
  //clear(); clear can be commented since drawRoute() will handle clearing the canvas
  if(delta < 1){
    delta += 0.2; 
  } else {
    visitedRoutes.push(allCoordinates[coordinate]) // Once it has arrived at its destination, add the origin as a visited location
    delta = 0; 
    coordinate ++;
    drawRoute(); // Call the drawRoute to update the route
  }

  

  noStroke(); // remove the stroke from the route
  fill(255,255,0);
 

  o2=myMap.latLngToPixel(40, -74);
  d2=myMap.latLngToPixel(37,-122);
  o2Vector = createVector(o2.x, o2.y); 
  d2Vector = createVector(d2.x, d2.y); 
  for (i=0;i<=1000;i++) {

    pos = o2Vector.lerp(d2Vector, frameCount/1000); 
    ellipse(pos.x, pos.y, 10, 10);
    
  }
}



//This functions draws a line with n-vertices where n = visited routes;
function drawRoute(){
  clear();
  stroke(255,0,0, 40); // stroke color and width to see the route line
  strokeWeight(5);
  //if(visitedRoutes.length > 0){
    noFill();
    beginShape();
    visitedRoutes.forEach(function (e) {
        //var pos = myMap.latLngToPixel(e[1], e[0]);
        vertex(pos.x, pos.y);
    })
    endShape()
  //}
}