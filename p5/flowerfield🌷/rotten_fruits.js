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
    img = loadImage("assets/tree2.png")
}

function setup() {
  createCanvas(1600, 1200);
  
  loadData();
}

function draw() {
    
  background(255);
  image(img,0,0,800,660);
  noFill();
  /////////////////////////////////////////
  //collision detection with collide2D
  /////////////////////////////////////////
  //branches boundary: only appear within this circle
  ellipse(400,300,660,520);
  //trunks: avoid this area
  rect(380,260,80,300);

//display
for (var i = 0; i < balls.length; i ++ ) { 
  balls[i].display();
}

  //generate
  if(frameCount%60 == 0 ){
    counter += 1
    
    print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
    var b = new Ball(xpos_arr[counter], ypos_arr[counter],15);
    balls.push(b);
  }

  


  if(frameCount%300 == 0 ){
    rand_num = int(random(0, balls.length-1));
    
    
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

      //on the branch but not on the trunk v0
      if (collidePointEllipse(xpos, ypos,400,300,650,500)===true &
      collidePointRect(xpos, ypos,380,260,80,300)===false) {
        xpos_arr.push(xpos)
        ypos_arr.push(ypos)
        print('new ball')
        }
    }
    print(xpos_arr)
}

// Constructing the propoerties of a fruit
class Ball {
    
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
        fill(255,0,0);
        noStroke();
        
        ellipse(this.x,this.y,this.w,this.w);

        /////////////////////////
        //fruits rotten and fall
        /////////////////////////
  
        if(this.dead){
            var speed=3
            var acceleration=10
            fill(0);
            stroke(0);
            ellipse(this.x,this.y,this.w,this.w);
            this.y+=2;
            ;
        }
      }
      
}

//grow within regions
//fall from the trees
//acceleration
//codified trees