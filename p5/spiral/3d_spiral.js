var numSpheres = 300;
var x = [];
var y = [];
var z = [];
var t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (var i = 0; i < numSpheres; i++) {
    if (i < numSpheres / 2) {
      x[i] = (10 + i) * sin(i);
      y[i] = (10 + i) * cos(i);
      z[i] = 1.5 * i;
    } else {
      x[i] = (10 + i + Math.exp(i / 50)) * sin(i);
      y[i] = (10 + i + Math.exp(i / 50)) * cos(i);
      z[i] = 1.5 * i;
    }
  }
}

function draw() {
  background(255);
  //move shape to the bottom of the page
  translate(0, 150, 0);

  var mappedMouseY = map(mouseY, 0, windowHeight, 1.48, 1);

  rotateX(HALF_PI / mappedMouseY);
  rotateZ(frameCount * 0.015);
  var c1 = color(113, 23, 234);
  var c2 = color(234, 96, 96);
  for (var i = 0; i < numSpheres; i++) {
    push();
    translate(x[i], y[i], z[i]);
    stroke(lerpColor(c1, c2, i / numSpheres));
    //stroke(20, i, 155 - i);
    sphere(3, 8);
    pop();
  }
}

//copyright @hannahyan
