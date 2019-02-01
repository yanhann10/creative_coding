//shapes that resemble the cross-section of cut crystal
//dense blue rings interspersed by white rings

let cross=[];
let cross_num=2;
let w=1200, h=700;
let x=[50,500]

function setup() {
  createCanvas(w, h);
  noiseSeed(99);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range

  for (let i=0; i<cross_num; i++){
                            // x           , y             ,rad, 
    cross[i] = new CrossSec(x[i], 
    200, 
    random(10,30), 
    random(2,3));
  }
}

function draw() {  
    for (let i=0; i<cross_num; i++){
        cross[i].display();
      }

}


class CrossSec {
  //isolines
  constructor(tempX, tempY, tempR, tempN) {
    this.x=tempX;
    this.y=tempY;
    this.r=tempR;
    this.n=tempN;
  }

  display() {
    for (let j=0; j<this.n; j++) {
      //repeat light to dark color gradation
      beginShape();
      push();
      translate(this.x, this.y);
      let mynoiseseed=random(1000);
      for (let i=0; i<90; i++) {
        let radius=this.r + map(noise(mynoiseseed+i/5.0), 0, 1, 6, 60) - 20 * j;
        let x=sin(4*i);
        let y=cos(4*i);
        vertex(radius*x, radius*y);
      }
      endShape(CLOSE);
      pop();
    }
  }
}