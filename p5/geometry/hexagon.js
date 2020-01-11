let n = 6;
let r = 60;
let n_hex = 20;
let hexs = [];
let palette = [
  "#EFB605",
  "#E47D06",
  "#DB0131",
  "#AF0158",
  "#7F378D",
  "#3465A8",
  "#0AA174",
  "#7EB852"
];

function setup() {
  angleMode(DEGREES);
  createCanvas(800, 600);
  for (i = 0; i < n_hex; i++) {
    hexs[i] = new hexagon(
      random(200, 600),
      random(100, 500),
      random(0, 1),
      Math.floor(random(0, 8)),
      60,
      20,
      40
    );
  }
  noLoop();
}

function draw() {
  noStroke();
  for (i = 0; i < n_hex; i++) {
    hexs[i].display();
  }
}

class hexagon {
  constructor(x, y, fill, color, size = 60, innerR = 0, outerR = 60) {
    this.x = x;
    this.y = y;
    this.fill = fill;
    this.color = color;
    this.size = size;
    this.innerR = innerR;
    this.outerR = outerR;
  }
  display() {
    ////////////////////////////////
    //////////Draw HEXAGON//////////
    ////////////////////////////////
    if (this.fill > 0.6) {
      fill(color(palette[this.color]), 0.5);
    } else {
      noFill();
      stroke(226, 178, 57);
      strokeWeight(3);
    }
    beginShape();
    push();

    for (let i = 0; i <= n; i++) {
      let pX = this.x + r * cos(60 * i);
      let pY = this.y + r * sin(60 * i);
      vertex(pX, pY);
    }
    if (this.fill >= 0.3) {
      for (let i = 0; i <= n / 2; i++) {
        let pX = this.x + r * cos(120 * i);
        let pY = this.y + r * sin(120 * i);
        line(this.x, this.y, pX, pY);
      }
    }

    pop();
    endShape(CLOSE);

    if (this.fill < 0.3) {
      noFill();
    }
    beginShape();
    push();
    strokeWeight(20);
    if (this.fill < 0.3) {
      for (let i = 0; i <= n; i++) {
        let pXInner = this.x + this.innerR * cos(60 * i);
        let pYInner = this.y + this.innerR * sin(60 * i);
        vertex(pXInner, pYInner);
      }
    }
    pop();
    endShape(CLOSE);
  }
}
