function setup() {
createCanvas(600,600);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  for (let i = 50; i > 0; i-=10) {
    for (let q = 0; q < 360; q+=18) {
      let x = sin(radians(q+i));
      let y = cos(radians(q+i));
      
      let s = i*3;
      
      fill(255, 125);
      stroke(255);
      
      push();
      translate(x*i, y*i);
      rotate(radians(-q-i+90));
      beginShape();
      vertex(0, 0);
      bezierVertex(s, -s/2, s, s/2, 0, 0);
      endShape();

      fill(125+sin(radians(i+frameCount))*125, 0, 125+sin(radians(i+frameCount+180))*125, map(i, 50, 0, 0, 150));
      beginShape();
      vertex(0, 0);
      bezierVertex(s, -s/1.8, s, s/1.8, 0, 0);
      endShape();
      pop();
    }
  }
}



