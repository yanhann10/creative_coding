//inspired by https://www.openprocessing.org/sketch/795216 with modifications
//added poseNet and modified style etc

//posenet declaration
let video;
let poseNet;
let poses = [];
let skeletons = [];
let noseX;
let noseY;
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

//perlin noise disk color
var darkCoral = "#ff7d71";
var lightOrange = "#ffbf00";
var size = 120;

var radius = 80;
var angle = 10;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);

  pixelDensity(1);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on("pose", function (results) {
    poses = results;
  });

  video.hide();
}

function draw() {
  background("white");

  strokeWeight(3);
  noFill();
  var zoff = noseX / 200 - 1.5;
  //perlin noise disk
  for (i = 0; i <= width; i += 4) {
    stroke(lerpColor(color(lightOrange), color(darkCoral), i / width));
    beginShape();
    for (j = 0; j <= height; j += 2) {
      let x = i;
      let y = j;
      1;
      let scale = 0.005; //using a scale variable because steps between i and j counters are too large steps for noise function.
      if (dist(i, j, width / 2, height / 2) < size) {
        n = map(noise(i * scale, j * scale, zoff), 0, 1, -1, 1);
        x = i + n * radius * sin(angle + n * 6);
        y = j + n * radius * cos(angle + n * 6);
      }
      curveVertex(x, y);
    }
    endShape();
  }
  //zoff+=0.01;
  angle += 0.001;

  image(video, 800, 0, 200, height / 3);
  drawKeypoints();
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}

function modelReady() {
  console.log("model ready");
}

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
      //console.log(noseX / 200 - 1.5);
      stroke(0);
      line(centerX + displacement, centerY, centerX, centerY);

      if (noseX < width / 2) {
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
