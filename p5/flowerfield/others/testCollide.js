var hit = false;

function setup() {
    createCanvas(1600, 1200);
    
  }


function draw() {
	background(255);
	ellipse(200,200,100,100);
	point(mouseX,mouseY);

	hit = collidePointCircle(mouseX,mouseY,200,200,100)

	console.log("colliding? " + hit);

}