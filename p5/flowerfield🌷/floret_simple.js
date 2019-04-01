let Florets = [];
let gravity = 0.1;
let buffer = 150;
let row;
let xpos;
let ypos;
let counter = 0
let rand_num;

let xpos_arr = []
let ypos_arr = []

function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
}

function setup() {
  createCanvas(800, 800)
  loadData()
}

function draw() {
  background(255);

  for (var i = 0; i < Florets.length; i++) {
    Florets[i].display();
  }

  if (frameCount % 60 == 0) {
    counter += 1
    print('cnt',counter)
    print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
    var b = new Floret(xpos_arr[counter], ypos_arr[counter], 32);
    Florets.push(b);
  }

  if (frameCount % 300 == 0) {
    rand_num = int(random(0, Florets.length - 1));
    print("Floret that died:" + rand_num)
    for (var i = 0; i < Florets.length; i++) {
      Florets[rand_num].die();
    }
  }


  if (frameCount % 600 == 0) {
    Florets.splice(1, 0);
  }
}

function loadData() {
  for (var i = 0; i < table.getRowCount(); i++) {
    row = table.getRow(i);
    xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
    ypos = map(row.get('x2'), -25, 30, buffer, 800 - buffer);
    xpos_arr.push(xpos)
    ypos_arr.push(ypos)
    //print('new Floret')
  }
  //print(xpos_arr)
}


class Floret {
  // Floret constuctor
  constructor(tempX, tempY, tempW) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.dead = false;
  }

  die() {
    this.dead = true;
  }

  display() {
    // Display the Floret
    let r = 0.2
    fill(255, 100);
    stroke(0);
    fill(0, 0, 255);
    if (frameCount<600 ){
      twirl(this.x, this.y, frameCount/2000)
    }
    if (this.dead) {
      let gl=lerp(255, 0, frameCount/2000)
      fill (0, 0, 0);
      //reduce 0.2 to 0.1
      
      if (r- frameCount/2000 > 0){
      twirl(this.x, this.y, r - frameCount/2000)
      }
      else {
        twirl(this.x, this.y, 0)
      }
    }
  }
}


function twirl(xpos, ypos, scl) {
  push();
  translate(xpos, ypos);

  for (var i = 0; i < 10; i++) {
    push();
    rotate(TWO_PI * i / 8);
    translate(2, 0);
    scale(scl);
    beginShape();
    curveTightness(-3);
    curveVertex(10, 26); //p1
    curveVertex(10, 26); //p2
    curveVertex(83, 24); //p3
    curveVertex(83, 61); //p4
    curveVertex(25, 15); //p5
    curveVertex(25, 65); //p6
    endShape();

    pop();
  }
  pop();
}

