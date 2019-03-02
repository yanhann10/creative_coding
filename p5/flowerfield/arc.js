function setup() {
	createCanvas(400, 400);
}

function draw(){
    background(240);
    translate(200,200);
    noFill()
    for (let i=1; i<10;i++) {
    arc(0,0,2+9*i,100, radians(30+i/3),radians(150-i/3));
    ellipse((2+4.5*i)*cos(radians(30+i/3)),
    (2+4.6*i)*sin(radians(30+i/3)),2,2);
    ellipse((-2-4.4*i)*cos(radians(-30+i/2)),
    (-2-4.4*i)*sin(radians(-30-i/3)),2,2);
   
    
}
}