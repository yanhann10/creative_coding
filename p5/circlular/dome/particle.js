// Mainly based on Coding Challenge 127: Brownian Motion Snowflake by Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// Modified symmetry, color, randomness

class Particle {
  constructor(radius, angle, stroke) {
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.mult(radius);
    this.r = 2;
    this.c = 255;
    this.counter = 0;
    this.hasStroke = stroke;
  }

  update() {
    this.counter += 1;
    this.pos.x -= 1;
    this.pos.y += random(-3, 3);
    //   if (this.counter>100){
    //     this.pos.y += random()*map(this.counter%500,100,500,1,3)
    //   }

    let angle = this.pos.heading();
    angle = constrain(angle, 0, PI / 6);
    let magnitude = this.pos.mag();
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.setMag(magnitude);
  }

  show() {
    //fill(250,200,this.c%255);
    fill(255, 222, 173, 180);
    strokeWeight(0.8);
    stroke(255, 150);

    randomSeed(1);
    let m = random(0, 1) * 20;
    ellipse(this.pos.x, this.pos.y, m, m);
  }

  intersects(snowflake) {
    let result = false;
    for (let s of snowflake) {
      let d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
      if (d < this.r * 2) {
        result = true;
        break;
      }
    }
    return result;
  }

  finished() {
    return this.pos.x < 1;
  }
}
