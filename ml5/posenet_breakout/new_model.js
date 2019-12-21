// Adapted from PoseNet example https://editor.p5js.org/AndreasRef/sketches/r1_w73FhQ
//and Breakout example https://molleindustria.github.io/p5.play/examples/index.html?fileName=breakout.js

let video;
let poseNet;
let poses = [];
let skeletons = [];

let noseX;
let noseY;

let pNoseX;
let pNoseY;

let centerX = 900;
let centerY = 50;

//breakout  declaration
let score = 3;
var paddle, ball, wallTop, wallLeft, wallRight, bricks;
var balls = [];
var MAX_SPEED = 7;
var WALL_THICKNESS = 30;
var BRICK_W = 40;
var BRICK_H = 20;
var BRICK_MARGIN = 4;
var ROWS = 3;
var COLUMNS = 10;
var width = 800;
var height = 400;

function setup() {
  createCanvas(1000, 400);
  //set up game in 0-800 width, camera in 800-1000 range
  video = createCapture(VIDEO);

  pixelDensity(1);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on("pose", function(results) {
    poses = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();

  //breakout setup
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

  for (var r = 0; r < ROWS; r++)
    for (var c = 0; c < COLUMNS; c++) {
      var brick = createSprite(
        200 + c * (BRICK_W + BRICK_MARGIN),
        80 + r * (BRICK_H + BRICK_MARGIN),
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
  // background(137, 207, 240);
  noStroke();
  fill(137, 207, 240);
  rect(0, 0, 800, 400);

  for (i = 0; i < Math.min(score + 1, 3); i++) {
    fill(255);
    heart(600 + 30 * i, 20, 20);
  }

  paddle.position.x = constrain(
    noseX,
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

  //posnet on top

  image(video, 800, 0, 200, height / 3);
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < min(poses.length, 1); i++) {
    // keypoint 0 is the nose
    let keypoint = poses[i].pose.keypoints[0];
    // Only draw if the pose probability is bigger than 0.2
    if (keypoint.score > 0.2) {
      noseX = keypoint.position.x;
      noseY = keypoint.position.y;

      var displacement = map(noseX - width / 2, 0, width / 2, 0, 100);
      console.log(displacement);
      stroke(0);
      line(centerX + displacement, centerY, centerX, centerY);

      if (noseX < width / 2) {
        // console.log("nose", noseX, "width", width / 2);
        fill(0);
        triangle(
          centerX + displacement,
          centerY,
          centerX + displacement + 10,
          centerY - 10,
          centerX + displacement + 10,
          centerY + 10
        );
      } else {
        fill(0);
        triangle(
          centerX + displacement,
          centerY,
          centerX + displacement - 10,
          centerY - 10,
          centerX + displacement - 10,
          centerY + 10
        );
      }
    }
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
function modelReady() {
  console.log("model ready");
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
