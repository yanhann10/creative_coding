// inspired by Daniel Shiffman's Coding Train video https://www.youtube.com/watch?v=BjoM9oKOAKY
// made modifications on the shape of particles

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;
var resolution = 10;
var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255);

  cols = floor(width / resolution);
  rows = floor(height / resolution);
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    if (random() < 0.5) {
      particles[i] = new Particle(1, random(10, 20));
    } else {
      particles[i] = new Particle(0, 1);
    }
  }
  background(33);
}

function draw() {
  strokeCap(SQUARE);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var r = map(noise(xoff, yoff, zoff), 0, 1, 0, TWO_PI * 4);
      xoff += inc;
      let v = p5.Vector.fromAngle(r, resolution / 2);
      flowfield[index] = v;
      // push(); //show underlying vector field
      // translate(x * resolution, y * resolution);
      // line(0, 0, v.x, v.y);
      // pop();
    }
    yoff += inc;
    zoff += 0.0003;
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
