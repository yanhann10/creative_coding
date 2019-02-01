//rotate an elipse of varying height to weave a globe

function setup() {
  createCanvas(800, 800);
  smooth();
  background(0);
  ellipseMode(CENTER);
}

function draw() {
  stroke(200,200,255,90);
  noFill();
  
  push();
  translate(width/2,height/2);
  rotate(map(sin(0.001*frameCount),0, 1, 0, PI));
  ellipse(0,0,720,random(720));
  pop();
}