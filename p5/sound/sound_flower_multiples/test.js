var bubbles;
// A Table object
var table;
var Slider;


function setup() {
  createCanvas(480, 270);
  //create slider
  Slider = createSlider(20,40,5);
  Slider.position(50, 120);

  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < 10; i++) {
    
    bubbles[i] = new Bubble(random(0,500),random(0,500),50,50);
  }
}

function draw() {
  
  background(255);
  // Display all bubbles
  for (var i = 0; i < 10; i++) {
    bubbles[i].display();
    
  }

}



class Bubble {
  constructor(x, y, diameter) {
    this.x = Number(x);
    this.y = Number(y);
    this.diameter = Number(diameter);
  }

  
  // Display the Bubble
  display() {
    
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, p,p);
    
  }
}