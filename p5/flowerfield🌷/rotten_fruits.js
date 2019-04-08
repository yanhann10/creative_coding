let balls = [];
let gravity = 0.1;
let buffer = 20;
let row;
let xpos;
let ypos;
let counter = 0
let rand_num;

let xpos_arr = []
let ypos_arr = []

/*---------------*/

function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree2.png")
}

/*---------------*/

function setup() {
  createCanvas(1600, 1200);
  loadData();
}

/*---------------*/

function draw() {

  background(255);
  image(img, 0, 0, 800, 660);
  noFill();
  /////////////////////////////////////////
  //collision detection with collide2D
  /////////////////////////////////////////
  //branches boundary: only appear within this circle
  ellipse(400, 300, 720, 520);
  //trunks: avoid this area
  rect(380, 260, 80, 300);

  //display
  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
  }

  if (frameCount % 60 == 0) {
    counter += 1

    print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
    var b = new Ball(xpos_arr[counter], ypos_arr[counter], 15, 204, 0, 15);
    balls.push(b);
  }



  if (frameCount % 240 == 0 | frameCount % 300 == 0) {
    rand_num = int(random(0, balls.length - 1));


    for (var i = 0; i < balls.length; i++) {
      balls[rand_num].die();
    }
  }



  if (frameCount % 600 == 0) {
    balls.splice(1, 0);
  }
}

/*---------------*/

function loadData() {
  for (var i = 0; i < table.getRowCount() / 10; i++) {
    row = table.getRow(i);
    xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
    ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);

    //on the branch but not on the trunk v0
    if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
      collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      print('new ball')
    }
  }
  print(xpos_arr)
}

/*---------------*/

// Constructing the propoerties of a fruit
class Ball {

  constructor(tempX, tempY, tempW, tempR, tempG, tempB) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    //rgb
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;
    //dead
    this.dead = false;
  }

  die() {
    this.dead = true;
  }

  display() {
    // rainbow palette
    let pal = ["#CC0000FF", "#66CC00FF", "#00CC33FF", "#00CCCCFF", "#0033CCFF", "#6600CCFF", "#CC0099FF"]
    let r = 204,
      g = 0,
      b = 15;

    fill(this.r, this.g, this.b);
    noStroke();

    ellipse(this.x, this.y, this.w, this.w);
    fill(color("#CC9900FF"), 0, 0);
    ellipse(this.x + 1, this.y - 3, this.w / 4, this.w / 3);

    /////////////////////////
    //fruits rotten and fall
    /////////////////////////

    if (this.dead) {

      // let newR=maxBlack(this.r);
      // console.log('newR',newR)
      // this.g+=50
      // let newB=maxBlack(this.b);

      let speed = 3

      fill(this.r, this.g, this.b);
      stroke(0);
      ellipse(this.x, this.y, this.w, this.w);

      fill(230, 230, 230);
      ellipse(this.x + 1, this.y - 3, this.w / 4, this.w / 3);
      this.y += speed;
      if (this.r>2) {
        this.r -= 2;
      }
      else {
        this.r=0
      }

      console.log('red',this.r)
      //cnt ++ 



    }
  }

}


function maxBlack(c) {
  if (c = 255) {
    c = 255
  } else {
    c += 5
  }
}

//to-do
//grow within regions ✅ 
//change the color of the fruits ✅ 
//gradual darken after die ✅ 
//change falling interval  ✅ 
//acceleration
//multiple colors
//fall from the trees with matter.js 
//codified trees
//add info page