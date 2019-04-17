// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

function Fruit(x, y, w, h) {
  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, w, options);
  this.w = w;

  World.add(world, this.body);

  this.display = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    strokeWeight(1);
    stroke(255);
    fill(127);
    ellipse(0, 0, this.w, this.h);
    pop();
  }

}
