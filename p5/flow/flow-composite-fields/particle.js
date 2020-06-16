// inspired by Daniel Shiffman's Coding Train video https://www.youtube.com/watch?v=BjoM9oKOAKY http://patreon.com/codingtrain
// made modifications including particle initiation position and z direction varying speed

//gaussian random
const randn_bm = () => {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

class Particle {
  constructor() {
    this.pos = createVector(randn_bm() * width, randn_bm() * height);
    this.vel = createVector(randn_bm(), randn_bm());
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.h = 0;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = floor(this.pos.x / resolution);
    var y = floor(this.pos.y / resolution);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    var hue = map(this.h, 0, 150, 160, 220);
    stroke(hue, 255, 255, 25);
    this.h = this.h + 1;
    if (this.h > 150) {
      this.h = 0;
    }

    strokeWeight(1);

    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
