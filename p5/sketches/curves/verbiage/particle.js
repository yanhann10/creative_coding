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
    this.fontsize = 3;
    //some random top google search term from the precious years
    this.feed = ['Hurricane', 'Brexit', 'Olympics', 'Election results', 'World Cup', 'Government Shutdown', 'Zika Virus'];
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
    this.fontsize += 0.14;

  }

  // Method to display
  display() {

    fill(50, this.lifespan);
    textSize(this.fontsize);
    let txt = ['a', 'b', 'c', 'd', 'e']
    //text("blah",this.position.x, this.position.y);
    let i = random(0, 6);
    //to-do: display a random txt from the array
    text(this.feed[1], this.position.x, this.position.y);

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