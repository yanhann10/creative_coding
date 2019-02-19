

function setup() {
  createCanvas(800,600);
  
}

function draw() {
  background(255);
  ellipse(30,130,30,30);
  for (let i=0;i<20; i++) {
    let c1=color('#5A46B2');
    c1.setAlpha(200);
    let c2=color('#701452');
    c1.setAlpha(200);
    stroke (color(c1));
    bezier(11,250, 109,250, 98,34+10*i, 233,250);
    bezier(11,250, 98,34+10*i, 149,250, 233,250);
    stroke (c2);
    bezier(233,250, 149,250, 98,450-10*i, 11,250);
  } 
  
  noLoop();
}