function setup() {
  createCanvas(400, 400);
	angleMode(DEGREES);

}

function draw() {
	background(255,255,23,5);
	if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  strokeJoin(SQUARE);
  strokeWeight(8);
  fill(205,20,20,90);	
  arc(150,150,200,200,40,140);
	ellipse(150,200,5,10,40,140);
	ellipse(180,220,5,10,40,140);
	ellipse(130,220,5,10,40,140);
  noFill();

}