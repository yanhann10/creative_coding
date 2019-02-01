var xoffset = 40;
var yoffset = 50;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  push();
  translate(mouseX, mouseY);
  if (mouseIsPressed){
    sadface();
  } 
  else {
    happyface();
  }
  pop();
}

function happyface() {
    // draw a face!
    ellipse(0, 0, 40, 40);
    ellipse(100, 0, 40, 40);
    arc(50, 50, 100, 50, 0, PI);
}

function sadface() {
    // draw a face!
    ellipse(0, 0, 50, 50);
    ellipse(100, 0, 50, 50);
    arc(50, 50, 100, 100, PI, 0);
}