var rectXY = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255,230,153);
  noStroke();
  rectMode(CENTER);
  fill(255, 150);
  rectXY.push([random(0,400), random(300,400),random(5)]);
  for (var i = 0; i < rectXY.length; i++) {
      //make bubble smaller towards surface
    ellipse(rectXY[i][0], rectXY[i][1], 15, 15);
    rectXY[i][1] -= rectXY[i][2];
  }
}
