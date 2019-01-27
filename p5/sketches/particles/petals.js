let img;

let petals =[];
let snowflakes =[];

let num_petals = 40;
let num_snowflakes =20;

function setup() {
    createCanvas(400, 400);
      angleMode(DEGREES);

      for(let i=0; i<num_petals; i++) {
          petals[i] = new Petal(random(0,800),random(0,800),30,30,random(0.1, 2));
      }

      for(let i=0; i<num_snowflakes; i++) {
        petals[i] = new Petal(random(0,800),random(0,800),60,60,random(0.1, 2));
    }
  
  }

  //object inheritance: apply action on some objects
  
  function draw() {
      background(0);
    for(let i=0; i<num_petals; i++) {
        petals[i].display();
        petals[i].move();
        petals[i].blink();
    }
  }

  class Petal {
    //hold all variables 
    constructor(tempX, tempY, tempW, tempH, tempSpeed) {
        this.x=tempX;
        this.y=tempY;
        this.width=tempW;
        this.height=tempH;
        this.speed=tempSpeed;
    }

    move(){
        this.x+=100*sin(frameCount/10);
        this.y +=this.speed;
        if (this.y>height){
            this.y=-40;
        }
    }



    display(){
        fill(221,198,200);
        ellipse(this.x, this.y, this.width, this.height);
    }

  }

