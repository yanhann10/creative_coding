// Based on Daniel Shiffman's code for: https://youtu.be/urR596FsU68
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;


class Fruit {
  constructor(x, y, w, txt) {
    var options = {
      restitution: 0.4
    }
    this.body = Bodies.rectangle(x, y, w, w, options);
    this.w = w;
    this.txt=txt;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(204, 0, 15);
    ellipse(0, 0, this.w, this.w);
    fill(color("#CC9900FF"), 0, 0);
    ellipse(1, -3, this.w / 4, this.w / 3);
    pop();
  }

  showText() {
    var pos = this.body.position;
    if (pos.y > 500) {
      let fontSz = 10;
      noStroke();
      textSize(fontSz);
      text(this.txt, pos.x - 6, pos.y - 6);

    }
  }
}


class Ground {
  constructor(x, y, w, h, angle) {
    var options = {
      restitution: 0.4,
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
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    fill(204, 0, 15);
    rect(0, 0, this.w, this.h);
    pop();
  }
}