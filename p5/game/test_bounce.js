var bals = [];

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 10, 12, 12);

  //   ball.shapeColor() = color(0, 0, 0);
  bar = createSprite(200, 300, 2, 100);
  //   bar.shapeColor() = color(0, 0, 0);
  bar.immovable = true;
}

function draw() {
  background(255);
  if (frameCount % 120 == 0) {
    bal = createSprite(200, 10, 12, 12);
    bals.push(bal);
  }

  for (i = 0; i < bals.length; i++) {
    bals[i].setSpeed(2, 90);
    bals[i].bounce(bar, shortenBar);
  }

  drawSprites();
}

function shortenBar(ball, bar) {
  ball.remove();
  //make bar 10pixel shorter at the top upon each hit
}
