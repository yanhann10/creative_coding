// An Array of objects that encodes spotify song attributes

/*
ENCODINGS
loudness->size
low valence->sad sounds->purple
high valence->happy songs->green
label->name
*/


let fill_color = [];
let w = 1200;
let h = 500;
let frameRt = 3;
let p; //make slider global var
let slider_val;
let col = ['#317050', '#20726A', '#31717F', '#566C89', '#7B6487', '#985C78']
//let col = ["#5901a5", "#1db954"]

var bubbles;
// A Table object for data
var table;
// A slider for testing
let Slider;

function preload() {
  table = loadTable("data/df_output_tsne.csv", "header");
}

function setup() {
  createCanvas(1200, windowHeight);
  loadData();

  //create slider
  Slider = createSlider(10, 50, 10);
  Slider.position(50, 50);
}

function draw() {
  background(255);
  let p = Slider.value();
  slider_val = map(p, 0, 100, 0, 6);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}

function loadData() {
  bubbles = [];

  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var r = row.get("loudness");
    var n = row.get("energy");
    var v = row.get("valence");
    var txt = row.get('name');
    var xpos = row.get('x');
    var ypos = row.get('y');
    // Make a Bubble object out of the data read
    bubbles[i] = new CrossSec(xpos, //x
      ypos, //y
      8 * r, //radius
      floor(n * 6),
      v,
      txt
    );

  }
}


class CrossSec {

  //isolines
  constructor(tempX, tempY, tempR, tempN, tempC, tempName) {
    this.x = map(Number(tempX), -10, 10, 0, windowWidth);
    this.y = map(Number(tempY), -10, 10, 0, windowHeight);
    this.r = -Number(tempR);
    this.n = tempN;
    this.c = tempC;
    this.name = tempName;
    this.over = false;
  }

  // Checking if mouse is over the Bubble
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = (d < 1000);
  }

  display() {

    let mynoiseseed = random(1000);
    let dist = floor(this.r / this.n)
    for (let j = 0; j < this.n; j++) {
      //lerp could generate some serious ugly col
      //let interC = lerpColor(color("#5901a5"), color("#1db954"), j % (this.n / 2 + 1) / (this.n / 2 + 1));
      // if (this.c <0.5) {
      //   stroke(color("#5901a5"));}
      //   else if (this.c>0.5 & this.c<0.7) {
      //     stroke(126,175,228);}       
      // else {stroke(color("#00a86b"));}
      stroke(color("#5901a5"));
      strokeWeight(0.4);
      beginShape();
      push()
      //fill(interC);
      translate(this.x, this.y);

      for (let i = 0; i < 100; i++) {
        let radius = this.r
           //+map((noise(mynoiseseed)), //increase this for rounder shape
            // 0, 1, 10, 80)
          -
          dist * j;
        let p = slider_val;
        let x = sin(p * i);
        let y = cos(p * i);
        //3: sea urchin
        //4.6: geometric
        //4.2 cool shape //8.8 ->5 petal
        //8.6 refractory rays
        //12.6 half pie
        vertex(radius * x, radius * y);
      }


      endShape(CLOSE);
      pop();

      if (this.over) {
        textAlign(CENTER);
        noStroke();
        text((this.name), this.x - this.r / 2, this.y);
      } else {
        break
      }

    }
  }
}

//to-do: 
//find better palette 
