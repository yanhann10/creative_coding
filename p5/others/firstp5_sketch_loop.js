function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	for(let i=0;i<20;i++){
		for(let j=0;j<20;j++){
			fill(i*20,i*5,i-10);
	ellipse(i*20,j*20,22,22)}}
}