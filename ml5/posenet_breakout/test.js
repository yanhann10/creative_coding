// Adapted from PoseNet example https://editor.p5js.org/AndreasRef/sketches/rkz42BzYQ and Breakout example https://molleindustria.github.io/p5.play/examples/index.html?fileName=breakout.js

//posenet declaration
let video;
let poseNet;
let poses = [];
let skeletons = [];

let pg;
let noseX;
let noseY;

let pNoseX;
let pNoseY;

//breakout  declaration
// var paddle, ball, wallTop, wallBottom, wallLeft, wallRight;
// var bricks;
// var MAX_SPEED = 9;
// var WALL_THICKNESS = 30;
// var BRICK_W = 40;
// var BRICK_H = 20;
// var BRICK_MARGIN = 5;
// var ROWS = 5;
// var COLUMNS = 10;

function setup() {
  //posenet setup
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  pixelDensity(1);
  pg = createGraphics(width, height);

  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on("pose", function(results) {
    poses = results;
  });

  video.hide();

  //breakout setup
  // paddle = createSprite(width / 2, height - 50, 100, 10);
  // paddle.immovable = true;

  // wallTop = createSprite(
  //   width / 2,
  //   -WALL_THICKNESS / 2,
  //   width + WALL_THICKNESS * 2,
  //   WALL_THICKNESS
  // );
  // wallTop.immovable = true;

  // wallBottom = createSprite(
  //   width / 2,
  //   height + WALL_THICKNESS / 2,
  //   width + WALL_THICKNESS * 2,
  //   WALL_THICKNESS
  // );
  // wallBottom.immovable = true;

  // wallLeft = createSprite(
  //   -WALL_THICKNESS / 2,
  //   height / 2,
  //   WALL_THICKNESS,
  //   height
  // );
  // wallLeft.immovable = true;

  // wallRight = createSprite(
  //   width + WALL_THICKNESS / 2,
  //   height / 2,
  //   WALL_THICKNESS,
  //   height
  // );
  // wallRight.immovable = true;

  // bricks = new Group();

  // var offsetX = width / 2 - ((COLUMNS - 1) * (BRICK_MARGIN + BRICK_W)) / 2;
  // var offsetY = 80;

  // for (var r = 0; r < ROWS; r++)
  //   for (var c = 0; c < COLUMNS; c++) {
  //     var brick = createSprite(
  //       offsetX + c * (BRICK_W + BRICK_MARGIN),
  //       offsetY + r * (BRICK_H + BRICK_MARGIN),
  //       BRICK_W,
  //       BRICK_H
  //     );
  //     brick.shapeColor = color(255, 255, 255);
  //     bricks.add(brick);
  //     brick.immovable = true;
  //   }

  // //the easiest way to avoid pesky multiple collision is to
  // //have the ball bigger than the bricks
  // ball = createSprite(width / 2, height - 200, 11, 11);
  // ball.maxSpeed = MAX_SPEED;
  // paddle.shapeColor = ball.shapeColor = color(255, 255, 255);
}

function draw() {
  drawKeypoints();

  //breakout
  // background(137, 207, 240);

  // paddle.position.x = constrain(
  //   mouseX,
  //   paddle.width / 2,
  //   width - paddle.width / 2
  // );

  // ball.bounce(wallTop);
  // ball.bounce(wallBottom);
  // ball.bounce(wallLeft);
  // ball.bounce(wallRight);

  // if (ball.bounce(paddle)) {
  //   var swing = (ball.position.x - paddle.position.x) / 3;
  //   ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
  // }

  // ball.bounce(bricks, brickHit);

  // drawSprites();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < min(poses.length, 1); i++) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = poses[i].pose.keypoints[j];
      // Only consider if the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        if (j == 0) {
          noseX = keypoint.position.x;
          noseY = keypoint.position.y;
          var displayment = noseX - width / 2;
          console.log(displayment);
          console.log(noseX);
        }
      }
    }
  }
}

function keyPressed() {
  pg.clear();
}

function modelReady() {
  console.log("model Loaded");
}

// function mousePressed() {
//   if (ball.velocity.x == 0 && ball.velocity.y == 0)
//     ball.setSpeed(MAX_SPEED, random(90 - 10, 90 + 10));
// }

// function brickHit(ball, brick) {
//   brick.remove();
// }
