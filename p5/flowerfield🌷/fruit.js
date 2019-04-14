// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

class Apple {
  constructor(x, y, w) {
  var options = {
    restitution: 0.4
  }
  this.body = Bodies.circle(x, y, w,  options);
  this.w = w;
  World.add(world, this.body);
}

  show () {
    var pos = this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    fill(204, 0, 15);
    ellipse(0, 0, this.w, this.w);
    fill(color("#CC9900FF"), 0, 0);
    ellipse(1, - 3, this.w / 4, this.w / 3);
    pop();
  }

}
