// An Array of Bubble objects
//shapes that resemble the cross-section of cut crystal

let fill_color = [];
let w = 1200,
  h = 500;
let frameRt = 3;
let n_flo = 20

var bubbles;
// A Table object
var table;

function preload() {
  table = loadTable("data/SpotifySample.csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
}

function draw() {
  background(255);
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
  flos = [];
  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var r = row.get("loudness");
    var n = row.get("energy");
    var txt = row.get('track_name');
    // Make a Bubble object out of the data read
    bubbles[i] = new CrossSec(random(80, 1200), //x
      random(80, 800), //y
      8 * r, //radius
      floor(n * 9),
      color("#5901a5"), //purple
      color(73, 59, 149), //navy
      txt
    );

    //new Bubble(random(0,500), random(0,500), r, txt);

  }
}


class CrossSec {
  //isolines
  constructor(tempX, tempY, tempR, tempN, tempC1, tempC2, tempName) {
    this.x = tempX;
    this.y = tempY;
    this.r = -Number(tempR);
    this.n = tempN;
    this.c1 = tempC1;
    this.c2 = tempC2;
    this.name = tempName;
    this.over = false;
  }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    //this.x, this.y);
    this.over = (d < 10000);
    //this.radius);
    //console.log(this.over);
  }

  display() {
    let mynoiseseed = random(1000);
    let dist = floor(this.r / this.n)
    for (let j = 0; j < this.n; j++) {
      //repeat light to dark color gradation
      let interC = lerpColor(this.c1, this.c2, j % (this.n / 2 + 1) / (this.n / 2 + 1));
      stroke(interC);
      strokeWeight(0.4);
      beginShape();
      push()
      //fill(interC);
      translate(this.x, this.y);
      for (let i = 0; i < 100; i++) {
        let radius = this.r +
          map((noise(mynoiseseed)), //increase this for rounder shape
            0, 1, 10, 80) -
          dist * j;
        let x = sin(4 * i);
        let y = cos(4 * i); //3: sea urchin
        vertex(radius * x, radius * y);
      }
      endShape(CLOSE);


      //if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      pop();
      text(this.name, this.x - this.r / 2, this.y);

      //}

      noLoop();

    }
  }
}

//to-do: 
//text label
//find better color
//softer edges
//more flowers
//text2vec layout