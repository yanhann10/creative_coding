var t;
//inspiration from gene kogan http://genekogan.com/code/p5js-perlin-noise/

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0, 15);
  noFill();
  t = 0;
}

function draw() {
  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 201, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  // clear the background every 800 frames using mod (%) operator
  if (frameCount % 800 == 0) {
    background(255);
  }
}
