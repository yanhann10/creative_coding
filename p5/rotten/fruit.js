// Modified from Daniel Shiffman's code: https://youtu.be/urR596FsU68
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;


class Fruit {
  constructor(x, y, w, txt, red, alpha, toxic) {
    var options = {
      friction: 0.3,
      restitution: 0.4
    }

    this.body = Bodies.circle(x, y, w, options);
    this.w = w / 2.2;
    this.txt = txt;
    this.red = red;
    this.alpha = alpha;
    this.toxic = toxic;


    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    //apple
    beginShape();
    noStroke();
    push();
    //make severely toxic comments as determined by Perspective API blue/purple
    if (this.toxic == 1) {
      fill(this.red - 20, 15, 87, 220);
      ellipse(0, 0, 20, 25);
    } else {
      fill(this.red, 30, 0, 220);
      ellipse(0, 0, 16, 20);
    }
    pop();

    push();
    translate(5, 0);
    noStroke();
    if (this.toxic == 1) {
      fill(this.red - 20, 15, 87);
      ellipse(0, 0, 20, 25);
    } else {
      fill(this.red, 30, 0);
      ellipse(0, 0, 16, 20);
    }
    pop();

    //leaves
    translate(0, -10);
    rotate(0.885)
    fill(48, this.red - 50, 30);
    bezier(0, 0, -5, -7, -3, -10, 0, -15);
    bezier(0, 0, 5, -7, 3, -10, 0, -15);
    endShape()

    pop();
  }

  darken() {
    var pos = this.body.position;
    if (pos.y > 500) {
      this.red -= 3;
    }
  }

  showText() {
    var pos = this.body.position;
    if (pos.y > 500) {

      noStroke();
      fill(0, 0, 0, this.alpha);
      textAlign(CENTER)
      textSize(11);
      text(this.txt, pos.x - 6, pos.y - 15);
    }
  }
}