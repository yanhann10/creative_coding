// Based on Daniel Shiffman's code for: https://youtu.be/urR596FsU68
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;


class Fruit {
  constructor(x, y, w, txt, red, alpha) {
    var options = {
      friction: 0.3,
      restitution: 0.4
    }

    this.body = Bodies.circle(x, y, w, options);
    this.w = w / 1.2;
    this.txt = txt;
    this.red = red;
    this.alpha = alpha;


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
    fill(this.red, 0, 0, 220);
    ellipse(0, 0, 16, 20);
    pop();

    push();
    translate(5, 0);
    noStroke();
    fill(this.red, 0, 0);
    ellipse(0, 0, 16, 20)
    pop();
    //leave
    translate(0, -10);
    rotate(0.885)
    fill(48, this.red - 50, 30);
    bezier(0, 0, -5, -7, -3, -10, 0, -15);
    bezier(0, 0, 5, -7, 3, -10, 0, -15);
    //pop()
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
      console.log(this.alpha, 'this.alpha')
      fill(0, 0, 0, this.alpha);
      textAlign(CENTER)
      textSize(11);
      text(this.txt, pos.x - 6, pos.y - 15);
    }
  }
}


class Ground {
  constructor(x, y, w, h, angle) {
    var options = {
      restitution: 0.8,
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.body.angle = angle;
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(204, 0, 15);
    rect(0, 0, this.w, this.h);
    pop();
  }
}