// 2D Cloth with toxiclibs
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/020-cloth3d.html
// https://youtu.be/jrk_lOg_pVA
// https://editor.p5js.org/codingtrain/sketches/U6n24GfsD

class Spring extends VerletSpring2D {
  constructor(a, b, s) {
    super(a, b, w / 1.2, 1);
    this.s = s;
  }

  display() {
    stroke(255, this.a.x / 2, this.a.y / 2);
    push();
    translate(300, -50);
    rotate(0.7);
    strokeWeight(this.s);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    pop();
  }
}
