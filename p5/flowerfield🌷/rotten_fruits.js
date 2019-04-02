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

function preload() {
    table = loadTable("data/df_tsne_output.csv", "header");
    img = loadImage("asset/tree2.png")
}

function setup() {
  createCanvas(800, 800);
  
  loadData();
}

function draw() {
  background(255);
  image(img,0,0);
  
  for (var i = 0; i < balls.length; i ++ ) { 
    balls[i].display();
  }

  if(frameCount%60 == 0 ){
    counter += 1
    
    print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
    var b = new Ball(xpos_arr[counter], ypos_arr[counter],12);
    balls.push(b);
  }

  if(frameCount%300 == 0 ){
    rand_num = int(random(0, balls.length-1));
    print("ball that died:" + rand_num)
    for (var i = 0; i < balls.length; i ++ ) { 
        balls[rand_num].die();
     }
  }



  if(frameCount%600 == 0 ){
    balls.splice(1, 0);
 }
}

function loadData() {
    for (var i = 0; i < table.getRowCount()/10; i++) {
      row = table.getRow(i);
      xpos = map(row.get('x1'),-25,30,buffer, 800-buffer);
      ypos = map(row.get('x2'), -25,30,buffer, 400-buffer);
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      print('new ball')
    }
    print(xpos_arr)
}


class Ball {
    // Ball constuctor
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
        // Display the ball
        fill(255,100);
        stroke(0);
        ellipse(this.x,this.y,this.w,this.w);
        if(this.dead){
            fill(0);
            stroke(0);
            ellipse(this.x,this.y,this.w,this.w);
        }
      }
}