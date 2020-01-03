let n_feather = 3;
let feather = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (j = 0; j < n_feather; j++) {
    feather[j] = new Feather(
      random(100, 400),
      random(450, 500),
      random(80, 100),
      -random(30, 120),
      random(5, 15) / 10
    );
  }
}

function draw() {
  background(255);

  for (j = 0; j < n_feather; j++) {
    feather[j].display();
  }

  noLoop();
}

class Feather {
  //isolines
  constructor(tempX, tempY, tempN, tempR, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.n = tempN;
    this.r = tempR; //rotate
    this.s = tempS; //scale
  }

  display() {
    beginShape();
    push();
    scale(this.s);
    translate(this.x, this.y);
    rotate(radians(this.r));
    for (let i = 0; i < this.n; i++) {
      translate(5, -0.1);
      noFill();
      stroke(255, random(50, 150), 0);
      bezier(
        90 - random(0, 10) - i / 5,
        3 + random(0, 10) + i / 5,
        47,
        52,
        37,
        49,
        6,
        50
      );
      bezier(
        90 + random(0, 10),
        100 - random(0, 10) - i / 5,
        68,
        72,
        35,
        57,
        0,
        50
      );
    }
    pop();
    endShape();
  }
}

function mousePressed() {
  redraw();
}
