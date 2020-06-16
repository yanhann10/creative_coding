// inspired by Daniel Shiffman's Coding Train video https://www.youtube.com/watch?v=BjoM9oKOAKY
// made modifications including vector field design and z direction varying speed

var inc = 0.1;
var scl = 8;
var cols, rows;

var zoff = 0;
var resolution = 10;
var inc = 0.1;
var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255);

  console.log(width, height);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 1800; i++) {
    particles[i] = new Particle();
  }
  background(33);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      //0.2-0.4 diagonal rotate repeat pattern
      var r = ((Math.cos(xoff) + xoff + Math.sin(yoff)) * 8) % HALF_PI;
      xoff += inc;
      let v = p5.Vector.fromAngle(r, resolution / 2);
      flowfield[index] = v;
      // stroke(255);
      // push(); //show underlying vector field
      // translate(x * resolution, y * resolution);
      // line(0, 0, v.x, v.y);
      // pop();
    }
    yoff += inc;
    zoff += 0.001;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("sketch1", "png");
  }
}
