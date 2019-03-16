var boxSz = 250;
var numSpheres = 200;
var x = [];
var y = [];
var z = [];
var t = 0.0;
let _text;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    for (var i = 0; i < numSpheres; i++) {
        x[i] = (20 + i/1) * sin(i);
        y[i] = (20 + i/1 )* cos(i);
        z[i] = 2 * i
    }
    // println(x);
    // println(y);
    // println(z);


}

function draw() {
    background(255);

    //translate(0,0,-100);
    
    rotateX(HALF_PI);
    rotateZ(frameCount * 0.01);
    
    for (var i = 0; i < numSpheres; i++) {
        push();
        translate(x[i], y[i], z[i]);
        stroke(20,i, 155-i);
        sphere(boxSz / 100, 8);
        pop();
    }
   
    //noLoop();
}