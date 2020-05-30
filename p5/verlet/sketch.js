// Based on 2D cloth by The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/020-cloth3d.html // https://youtu.be/jrk_lOg_pVA // https://editor.p5js.org/codingtrain/sketches/U6n24GfsD
// With my own modifications @hannahyan

const VerletPhysics2D = toxi.physics2d.VerletPhysics2D;
const GravityBehavior = toxi.physics2d.behaviors.GravityBehavior;
const AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior;
const VerletParticle2D = toxi.physics2d.VerletParticle2D;
const VerletSpring2D = toxi.physics2d.VerletSpring2D;
const Vec2D = toxi.geom.Vec2D;
const Rect = toxi.geom.Rect;

let cols = 50;
let rows = 50;

let particles = make2DArray(cols, rows);
let springs = [];

let w = 10;

let physics;

function setup() {
  createCanvas(800, 600);
  physics = new VerletPhysics2D();
  let gravity = new Vec2D(0, 0.9);
  let gb = new GravityBehavior(gravity);
  physics.addBehavior(gb);

  let x = 100;
  for (let i = 0; i < cols; i++) {
    let y = 10;
    for (let j = 0; j < rows; j++) {
      let p = new Particle(x, y);
      particles[i][j] = p;
      physics.addParticle(p);

      if (j % 3 == 0) {
        y = y + 10;
      } else {
        y = y + w;
      }
    }
    x = x + w;
  }

  let r = Math.floor(random(5, 20));
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let a = particles[i][j];
      if (i != cols - 1) {
        let b1 = particles[i + 1][j];
        s = 3 * noise(i);
        let s1 = new Spring(a, b1, s);
        springs.push(s1);
        physics.addSpring(s1);
      }
      if (j != rows - 1) {
        let b2 = particles[i][j + 1];
        if (i % r == 0) {
          s = 2.5;
        } else if (i % r == 2) {
          s = 2;
        } else {
          s = 1;
        }
        let s2 = new Spring(a, b2, s);
        springs.push(s2);
        physics.addSpring(s2);
      }
    }
  }

  particles[0][0].lock();
  particles[Math.floor(cols / 2)][0].lock();
  particles[0][Math.floor(rows / 2)].lock();
  particles[cols - 1][0].lock();
}

function draw() {
  background(33);
  physics.update();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //particles[i][j].display();
    }
  }

  for (let s of springs) {
    s.display();
  }
}

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
