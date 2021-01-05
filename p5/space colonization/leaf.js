// Adapted from Coding Train by Daniel Shiffman https://youtu.be/kKT0v3qhIQY


function Leaf(x, y) {
  this.pos = createVector(x, y);
  this.reached = false;
  // this.rotate=random(0,1)

  this.show = function() {
    fill(250,0,0);
    noStroke();
    // push()
    // rotate(this.rotate*PI)
    //ellipse(this.pos.x, this.pos.y, 4, 6);
    // pop()
  };
}
