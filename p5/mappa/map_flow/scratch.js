//based on https://github.com/cvalenzuela/Mappa

let canvas;
let myMap;
let tripsCoordinates;
let allCoordinates = [];
let data;

let delta = 0;
let coordinate = 0;

let origin;
let originVector;
let destination;
let destinationVector;

let taxiPosition;

let visitedRoutes = []; // A new array to hold all visited positions
let key = 'AIzaSyCdmGJ7JWNWkmmxSdvNiu1Qo6BMn56eTSE';

let options = {
    lat: 40.73447,
    lng: -74.00232,
    zoom: 4,
    styles: style
}
let mappa = new Mappa('Google', key);

let myPath;

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
    let o =(40, -74);
    let d = (17, -100);
    
    myPath = new Path(o,d);
}

function draw() {
    //clear(); clear can be commented since drawRoute() will handle clearing the canvas
    if (delta < 1) {
        delta += 0.2;
    } else {
        visitedRoutes.push(allCoordinates[coordinate]) // Once it has arrived at its destination, add the origin as a visited location
        delta = 0;
        coordinate++;
        //drawRoute(); // Call the drawRoute to update the route
    }

    myPath.display();

    noStroke(); // remove the stroke from the route
    fill(255, 255, 0);


    // o = myMap.latLngToPixel(40, -74);
    // d1 = myMap.latLngToPixel(17, -100);
    // d2 = myMap.latLngToPixel(37, -122);
    // oVector = createVector(o.x, o.y);
    // console.log(oVector);
    // d1Vector = createVector(d1.x, d1.y);
    // d2Vector = createVector(d2.x, d2.y);
    // for (i = 0; i <= 1000; i++) {
    //     if (frameCount<=1000){
    //         pos = oVector.lerp(d1Vector, frameCount / 1000);
    //         //pos2 = createVector(o.x, o.y).lerp(d2Vector, frameCount / 1000);
    //         ellipse(pos.x, pos.y, 10, 10);
    //         //ellipse(pos2.x, pos2.y, 10, 10);
    //     }
    // }
}



//This functions draws a line with n-vertices where n = visited routes;
// function drawRoute() {
//     clear();
//     stroke(255, 0, 0, 40); // stroke color and width to see the route line
//     strokeWeight(5);
//     noFill();
//     beginShape();
//     visitedRoutes.forEach(function (e) {
//         vertex(pos.x, pos.y);
//     })
//     endShape()
// }

class Path {
    //hold all letiables 
    constructor(tempO, tempD) {
        //tempO and tempD coordinate pairs
        this.o = myMap.latLngToPixel(tempO);
        this.d = myMap.latLngToPixel(tempD);
        this.oVector = createVector(this.o.x, this.o.y);
        this.dVector = createVector(this.d.x, this.d.y);
        console.log(this.o);
    }

    display() {
        noStroke(); // remove the stroke from the route
        fill(255, 255, 0);
        for (let i = 0; i <= 1000; i++) {
            if (frameCount <= 1000) {
                let pos = this.oVector.lerp(this.dVector, frameCount / 1000);
                
                ellipse(pos.x, pos.y, 10, 10);
            }
        }
    }

}