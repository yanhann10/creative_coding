//waves flunctuates and recedes, leaving a static behind


function setup() {
  createCanvas(500, 400);
  background(255);

}

function draw() {
  noStroke();
  for (i=1; i<500; i++) {
    fill (20,255,20+50*i,250-40*i);
    ellipse(100+2.5*i,100,80+5*i,80+5*i)
  }
}