//shapes that resemble the cross-section of a raw colored crystal
//dense blue rings interspersed by white rings
let fill_color = [];
let cross = [];
let cross_num = 1;
let w = 900,
  h = 600;

function setup() {
  createCanvas(w, h);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = color(220, 20, 60); //blue
  //let c1 = color(64, 193, 172); //turquoise
  let c2 = color(255, 255, 125); //white

  for (let i = 0; i < cross_num; i++) {
    cross[i] = new CrossSec(
      260 + 300 * i,
      300, //x ,y
      190,
      20, //radius, num of rings
      c1,
      c2
    ); //start, stop color
  }
}

function draw() {
  for (let i = 0; i < cross_num; i++) {
    cross[i].display();
  }
}

class CrossSec {
  //isolines
  constructor(tempX, tempY, tempR, tempN, tempC1, tempC2) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.n = tempN;
    this.c1 = tempC1;
    this.c2 = tempC2;
  }

  display() {
    let doff = 0;
    for (let j = 0; j < this.n; j++) {
      let interC = lerpColor(this.c1, this.c2, j / (this.n - 1));
      let distance = map(noise(j + doff), 0, 1, 5, 20);
      beginShape();
      push();
      fill(interC);
      translate(this.x, this.y);
      for (let i = 0; i < 90; i++) {
        let radius = this.r + map(noise(i / 5), 0, 1, 6, 60) - distance * j;
        let x = sin(4 * i);
        let y = cos(4 * sin(i));
        vertex(radius * x, radius * y);
      }
      endShape(CLOSE);
      pop();
      //noLoop()
      doff += 0.01;
    }
  }
}

//to-consider: how to make noise more concentrated in certain range..log?
