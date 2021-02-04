function setup() {
  createCanvas(400, 400);
}

function draw() {
  //blendMode(BLEND);
  background(250);
  //noFill();
  //blendMode(SCREEN);
  //background(248, 248, 255);
  loopy(200, 200, 30);
}

function loopy(x, y, a) {
  for (let i = 0; i < 28; i++) {
    push();
    translate(x, y);
    stroke(33);
    fill(78, 18, 230, 120);

    circle(10 + a * sin(i * 0.9), 10 + a * cos(i * 0.9), a * 0.5);
    pop();
  }
  //a = 32/28/22
  if (a > 32) {
    loopy(x, y - (3 * a) / 1.8, (1 * a) / 4);
    loopy(x, y + (3 * a) / 1.8, (1 * a) / 4);
    loopy(x, y - (3 * a) / 1.8, (2 * a) / 4);
    loopy(x, y + (3 * a) / 1.8, (2 * a) / 4);
    loopy(x, y - (3 * a) / 1.8, (3 * a) / 12);
    loopy(x, y + (3 * a) / 1.8, (3 * a) / 12);
    loopy(x - (3 * a) / 1.8, y, (1 * a) / 4);
    loopy(x - (3 * a) / 1.8, y, (2 * a) / 4);
    loopy(x - (3 * a) / 1.8, y, (3 * a) / 4);
    loopy(x + (3 * a) / 1.8, y, (1 * a) / 4);
    loopy(x + (3 * a) / 1.8, y, (2 * a) / 4);
    loopy(x + (3 * a) / 1.8, y, (3 * a) / 4);
  }
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}
