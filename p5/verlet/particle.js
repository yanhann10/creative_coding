// 2D Cloth with toxiclibs
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/020-cloth3d.html
// https://youtu.be/jrk_lOg_pVA
// https://editor.p5js.org/codingtrain/sketches/U6n24GfsD

class Particle extends VerletParticle2D {
  constructor(x, y) {
    super(x, y);
  }

  display() {
    fill(255);
    push();
    translate(300, -50);
    rotate(0.7);
    ellipse(this.x, this.y, 2, 2);
    pop();
  }
}
