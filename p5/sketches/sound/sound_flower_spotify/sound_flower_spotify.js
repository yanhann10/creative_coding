// An Array of objects that encodes the attributes of top 2018 spotify songs

/*
ENCODINGS
loudness->size
energy->number of layers of petals
low valence->sad sounds->dark purple
high valence->happy songs->light purple
label->name
*/


let fill_color = [];
let frameRt = 3;
let p; //make slider global var
let slider_val;
let col = ["#6900FF","#7000FF","#8300FF","#7e04e8","#7104d1"]
let w=1500;
let h=860;

var bubbles;
// A Table object for data
var table;
// A slider for testing
let Slider;

function preload() {
  table = loadTable("data/df_output_tsne.csv", "header");
}

function setup() {
  createCanvas(w,h);
  
  loadData();

  //create slider
  // Slider = createSlider(10, 50, 10);
  // Slider.position(50, 50);
}

function draw() {
  background(255);
  //let p = Slider.value();
  slider_val = map(p, 0, 100, 0, 6);
  console.log(slider_val);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}

function loadData() {
  bubbles = [];

  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var xpos = row.get('x');
    var ypos = row.get('y');
    var r = row.get("loudness");
    var n = row.get("energy");
    var c = row.get("valence_bucket");
    var txt = row.get('name');

    bubbles[i] = new CrossSec(xpos, //x
      ypos, //y
      8 * r, //radius
      floor(n * 6), //n
      c, //tone
      txt //name
    );
      
  }
}


class CrossSec {

  //isolines
  constructor(tempX, tempY, tempR, tempN, tempC, tempName) {
    this.x = map(Number(tempX), -10, 10, 30, w-20);
    this.y = map(Number(tempY), -10, 10, 20, h-20);
    this.r = -Number(tempR);
    this.n = Number(tempN);
    this.c = Number(tempC);
    this.name = tempName;
    this.over = false;
  }

  // Checking if mouse is over
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = (d < w+100);
  }

  display() {

    let mynoiseseed = random(1000);
    let dist = floor(this.r / this.n)
    for (let j = 0; j < this.n; j++) {     
      stroke(color(col[this.c-1]));
      strokeWeight(0.4);
      beginShape();
      push()
      translate(this.x, this.y);

      for (let i = 0; i < 100; i++) {
        let radius = this.r
           //+map((noise(mynoiseseed)), //increase this for rounder shape
            // 0, 1, 10, 80)
          -
          dist * j;
        let p = 2.22//slider_val; //dahlia
        let x = sin(p * i);
        let y = cos(p * i);

        vertex(radius * x, radius * y);
      }


      endShape(CLOSE);
      pop();

      if (this.over) {
        textAlign(CENTER);
        noStroke();
        text((this.name), this.x - this.r / 3, this.y);
      } else {
        break
      }

    }
  }
}


