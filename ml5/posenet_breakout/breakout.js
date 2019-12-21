var paddle, ball, wallTop, wallLeft, wallRight, bricks;
var balls = [];
var MAX_SPEED = 7;
var WALL_THICKNESS = 30;
var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;
var ROWS = 3;
var COLUMNS = 10;
var score = 3;

function setup() {
  createCanvas(800, 400);

  paddle = createSprite(width / 2, height - 50, 100, 10);
  paddle.immovable = true;

  wallTop = createSprite(
    width / 2,
    -WALL_THICKNESS / 2,
    width + WALL_THICKNESS * 2,
    WALL_THICKNESS
  );
  wallTop.immovable = true;

  wallLeft = createSprite(
    -WALL_THICKNESS / 2,
    height / 2,
    WALL_THICKNESS,
    height
  );
  wallLeft.immovable = true;

  wallRight = createSprite(
    width + WALL_THICKNESS / 2,
    height / 2,
    WALL_THICKNESS,
    height
  );
  wallRight.immovable = true;

  bricks = new Group();

  var offsetX = width / 2 - ((COLUMNS - 1) * (BRICK_MARGIN + BRICK_W)) / 2;
  var offsetY = 80;

  for (var r = 0; r < ROWS; r++)
    for (var c = 0; c < COLUMNS; c++) {
      var brick = createSprite(
        offsetX + c * (BRICK_W + BRICK_MARGIN),
        offsetY + r * (BRICK_H + BRICK_MARGIN),
        BRICK_W,
        BRICK_H
      );
      brick.shapeColor = color(255, 255, 255);
      bricks.add(brick);
      brick.immovable = true;
    }

  //the easiest way to avoid pesky multiple collision is to
  //have the ball bigger than the bricks

  paddle.shapeColor = color(255, 255, 255);
}

function draw() {
  background(137, 207, 240);
  noStroke();
  for (i = 0; i < Math.min(score + 1, 3); i++) {
    heart(700 + 30 * i, 20, 20);
  }

  paddle.position.x = constrain(
    mouseX,
    paddle.width / 2,
    width - paddle.width / 2
  );
  for (var i = 0; i < balls.length; i++) {
    ball.bounce(wallTop);
    ball.bounce(wallLeft);
    ball.bounce(wallRight);

    if (ball.bounce(paddle)) {
      var swing = (ball.position.x - paddle.position.x) / 3;
      ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
    }

    ball.bounce(bricks, brickHit);
  }

  drawSprites();

  if (score === -1) {
    rect(width / 2 - 300, height / 2 - 150, 600, 300);
    fill(0, 0.7);
    textSize(48);
    fill(0);
    text("Game Over", width / 2 - 100, height / 2);
  }
}

function mousePressed() {
  if (score > 0) {
    ball = createSprite(paddle.position.x, height - 50, 11, 11);
    ball.setSpeed(MAX_SPEED, random(-90 - 10, -90 + 10));
    ball.shapeColor = color(255, 255, 255);

    balls.push(ball);
  }
  score -= 1;
}

function brickHit(ball, brick) {
  brick.remove();
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
