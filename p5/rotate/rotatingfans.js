var angle = 0.0;
var x, y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB, 100);
  x = width / 2;
  y = height / 2;
}

function draw() {
  const r = floor(random(4));
  if (frameCount % 300 == 0) {
    console.log("jump");
    x = (x + 35) % (width - 50);
    y = (y + 35) % (height - 50);
  }
  //random walk
  switch (r) {
    case 0:
      x = x + 5;
      break;
    case 1:
      x = x - 5;
      break;
    case 2:
      y = y + 5;
      break;
    case 3:
      y = y - 5;
      break;
  }
  translate(x, y);
  rotate(angle);
  //fill((10 * angle) % 255, (120 - angle) % 255, (200 + 10 * angle) % 255);
  let hue = (angle % 30) + 55;
  let saturation = (angle % 20) + 80;
  fill(hue, saturation, 100);
  rect(-40, -10, 80, 20);
  angle += 0.1;
}
