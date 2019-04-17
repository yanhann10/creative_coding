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
  img = loadImage("assets/tulips_single.jpg")
}

function setup() {
  createCanvas(800, 800);
  loadData();
}

function draw() {
  background(64, 50, 156,10);

  for (var i = 0; i < Florets.length; i++) {
    Florets[i].display();
  }

  /*if(frameCount % 6 ==0){
    counter + 1
    print(counter)
  }*/

  if (frameCount % 60 == 0) {
    counter += 1
    print('cnt', counter)
    print("x pos:" + xpos_arr[counter]  + "y pos:" + ypos_arr[counter])
    var b = new Floret(xpos_arr[counter], ypos_arr[counter], 32);
    Florets.push(b);
  }

  if (frameCount % 100 == 0) {
    rand_num = int(random(0, Florets.length - 1));
    //print("Floret that died:" + rand_num)
    for (var i = 0; i < Florets.length; i++) {
      Florets[rand_num].die();
    }
  }


  if (frameCount % 1000 == 0) {
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
    let scl = 1800; //scale
    //flo color
    let r =156;
    let g = 15; 
    let b = 80;

    
    if (frameCount < 600) {
      fill(156, 15, 80);
      twirl(this.x, this.y, -5+frameCount / 200, frameCount / scl)
    }
    else {
      fill(156, 15, 80);
      twirl(this.x, this.y, -5+frameCount / 200, 0.2)
    }
    if (this.dead) {
      let cnt = 0
      
      push()
      let rl=lerp(r, 0, frameCount/600);
      let bl=lerp(b, 0, frameCount/600)
      let gl = lerp(b, 0, frameCount / 600)
       print("this is rl" + rl)
      fill(rl, bl, gl);
      //reduce 0.2 to 0.1

      if (r - frameCount / scl > 0) {
        twirl(this.x, this.y, -3, r - frameCount / scl)
      } else {
        twirl(this.x, this.y, -3, 0)
      }
      pop();
    }
  }
}


function twirl(xpos, ypos, curve, scl) {
  push();
  translate(xpos, ypos);

  for (var i = 0; i < 10; i++) {
    push();
    rotate(TWO_PI * i / 8);
    translate(2, 0);
    scale(scl);
    beginShape();
    curveTightness(curve);
    curveVertex(10, 26); //p1
    curveVertex(10, 26); //p2
    curveVertex(83, 24); //p3
    curveVertex(83, 61); //p4
    curveVertex(25, 15); //p5
    curveVertex(25, 65); //p6
    endShape();
    //image(img, 0,0)
    pop();
  }
  pop();
}