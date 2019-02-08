// An Array of Bubble objects
//shapes that resemble the cross-section of cut crystal

let fill_color = [];
let w = 1200,
    h = 500;
let frameRt = 3;
let n_flo = 20
let col = ["#f0f921",
    "#f7e225",
    "#fccd25",
    "#feb72d",
    "#fca338",
    "#f79044",
    "#f07f4f",
    "#e76e5b",
    "#dd5e66",
    "#d14e72",
    "#c5407e",
    "#b6308b",
    "#a72197",
    "#9511a1",
    "#8305a7",
    "#6e00a8",
    "#5901a5",
    "#43039e",
    "#2c0594",
    "#0d0887"
]
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
  flos=[];
  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var r = row.get("loudness");
    var n = row.get("energy");
    var txt = row.get('track_name');
    // Make a Bubble object out of the data read
    bubbles[i] = new CrossSec(random(80,1200), //x
    random(80,800), //y
    random(10,100), //radius
    random(3,7), color(255),color(25));
    
    //new Bubble(random(0,500), random(0,500), r, txt);

  }  
}


class CrossSec{
    //isolines
    constructor(tempX, tempY, tempR,tempN,tempC1, tempC2) {
        this.x=tempX;
        this.y=tempY;
        this.r=tempR;
        this.n=tempN;
        this.c1=tempC1;
        this.c2=tempC2;
    }

      // Checking if mouse is over the Bubble
  rollover(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.tempR) {
      this.over = true;
    } else {
      this.over = false;
    }
  }
    
    display() {
        let mynoiseseed=random(1000);
        let dist=floor(this.r/this.n)
        for (let j=0;j<this.n; j++){
            //repeat light to dark color gradation
            let interC = lerpColor(this.c1,this.c2, j%(this.n/2+1)/(this.n/2+1));
            beginShape();
            push()
            fill(interC);
            translate(this.x, this.y);
            for (let i=0;i<90;i++) {
                let radius= this.r + 
                //this.r doesn't work here
                    map((noise(mynoiseseed+i/1.8)), //increase this for rounder shape
                    0,1,10,80) 
                    - dist * j;
                let x=sin(4*i);
                let y=cos(4*i);
                vertex(radius*x, radius*y);
            }
            endShape(CLOSE);
            pop();
            noLoop();
            if (this.over) {
                textAlign(CENTER);
                noStroke();
                fill(0);
                text(this.name, this.x, this.y + this.tempR + 20);
              }
            }
        }
      }