function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
}

function draw(){
	background(240);

	translate(width/2, height/2);
	for (var i = 0; i < 8; i++) {
		push();
		rotate( TWO_PI * i / 8);
		translate(10, 0);
        beginShape();
        curveTightness(options.Radius);
        curveVertex(10, 26);    //p1
        curveVertex(10, 26);    //p2
        curveVertex(83, 24);    //p3
        curveVertex(83, 61);    //p4
        curveVertex(25, 15);    //p5
        curveVertex(25, 65);    //p6
        endShape();	

		pop();
	}
}