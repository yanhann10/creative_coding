// Based on Daniel Shiffman's code for: https://youtu.be/urR596FsU68
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var fruits = [];

var ground;

class Fruit {
  constructor(x, y, w) {
    var options = {
      restitution: 0.4
    }
    this.body = Bodies.rectangle(x, y, w, w, options);
    this.w = w;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
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
      text('You are gay or antisemmitian?', pos.x - 6, pos.y - 6);
      fontSz+=2;
      print('ft',fontSz)
    }
  }
}