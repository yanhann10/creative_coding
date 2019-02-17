// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 2), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
    this.fontsize=3;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.fontsize +=0.14;
    
  }

  // Method to display
  display() {
    
    fill(50, this.lifespan);
    textSize(this.fontsize);
    text("blah",this.position.x, this.position.y);

  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}