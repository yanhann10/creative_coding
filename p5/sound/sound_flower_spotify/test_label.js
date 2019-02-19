// An Array of Bubble objects
let bubbles=[];
// A Table object

function setup() {
  createCanvas(480, 370);
  for (var i = 0; i < 10; i++) {
    bubbles[i]=new Bubble(random(100,200),random(100,200),30,30);
}
}

function draw() {
  background(255);
  // Display all bubbles
  for (var i = 0; i < 10; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}



class Bubble {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.over=false;
  }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.diameter/2) {
      this.over = true;
    } else {
      this.over = false;
    }
  }

  // Display the Bubble
  display() {
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text('yo', this.x, this.y + this.diameter/2 + 20);
    }
  }
}