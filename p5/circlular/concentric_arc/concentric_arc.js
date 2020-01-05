let startAngle = 0;
let randomArcs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  for (let i = 0; i < 20; i++) {
    let start = random(0, 360);
    let angle = random(30, 90);
    randomArcs[i] = new randomArc(30 + 30 * i, start, angle);
  }
}

function draw() {
  noiseSeed(99);
  background(20);
  translate(width / 2, height / 2);
  for (let i = 0; i < randomArcs.length; i++) {
    randomArcs[i].display();
    randomArcs[i].move(frameCount);
  }
}

class randomArc {
  constructor(radius, start, angle, margin) {
    this.r = radius;
    this.start = start;
    this.angle = angle;
    this.margin = margin;
  }

  display() {
    strokeCap(ROUND);
    noFill();
    //glow
    stroke(160, 0, 255, 100);
    strokeWeight(12);
    strokeCap(ROUND);
    arc(
      0,
      0,
      this.r + this.margin,
      this.r + this.margin,
      radians(this.start),
      radians(this.start + this.angle)
    );
    //spoke
    stroke(160, 0, 255, 60);
    strokeWeight(2);
    strokeCap(ROUND);
    arc(
      0,
      0,
      this.r + this.margin,
      this.r + this.margin,
      radians(this.start),
      radians(this.start + this.angle),
      PIE
    );
    //arc
    stroke(255);
    strokeWeight(5);
    arc(
      0,
      0,
      this.r + this.margin,
      this.r + this.margin,
      radians(this.start),
      radians(this.start + this.angle)
    );
  }

  move(t) {
    this.angle += (30 * frameCount) % 10;
    this.start += 120 * Math.cos(radians(frameCount) * 3);
    this.margin = 20 * Math.sin(radians(frameCount));
  }
}
