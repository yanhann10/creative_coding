// An Array of Bubble objects
var bubbles;
// A Table object
var table;

function preload() {
  table = loadTable("data/SpotifySample.csv", "header");
}

function setup() {
  createCanvas(880, 570);
  loadData();
  frameRate(1);
}

function draw() {
  background(255);
  textSize(32);
  
  // Display all bubbles
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }


}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < 10; i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var x = row.get("energy");
    var y = row.get("valence");
    var d = row.get("danceability");
    var n = row.get("danceability");
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(x,y,40);
    
  }
}

class Bubble {
  constructor(x, y, diameter) {
    this.x = 350 * Number(x);
    this.y = 500 * Number(y);
    this.diameter = 2*Number(diameter);
    this.over = false;
  }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.diameter/2) {
      this.over = true;
      console.log(d);
      
    } else {
      this.over = false;
    }
    console.log('over',this.over);
  }

  // Display the Bubble
  display() {
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    
   
    
    if (1===1) {
      textAlign(CENTER);
      noStroke();
      text('yo', this.x, this.y + this.diameter/2 + 20);
    }
  }
}