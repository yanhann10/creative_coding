var angle = 0.0;

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  translate(mouseX, mouseY);
  rotate(angle);
  fill(10 * angle, 120 - angle, 200 + 10 * angle);
  rect(-40, -10, 80, 20);
  angle += 0.1;
}
