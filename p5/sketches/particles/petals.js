let img;

let petals =[];
let snowflakes =[];

let num_petals = 100;

function setup() {
    createCanvas(400, 400);
      angleMode(DEGREES);
      for(let i=0; i<num_petals; i++) {
          petals[i] = new Petal(random(0,800),random(-100,0),
            random(6,15), random(1, 3));
      }
  
  }

  //object inheritance: apply action on some objects
  
  function draw() {
      background(0);
    for(let i=0; i<num_petals; i++) {
        petals[i].display();
        petals[i].move(frameCount/60);
    }
  }

  class Petal {
    //hold all variables 
    constructor(tempX, tempY, tempW, tempSpeed) {
        this.x=tempX;
        this.y=tempY;
        this.width=tempW;
        this.height=tempW;
        this.speed=tempSpeed;
    }

    move(t){
        this.y +=pow(this.width,0.5);
        if (this.y>height){
            this.y=-40;
        }
    }



    display(){
        fill(221,198,200);
        ellipse(this.x, this.y, this.width, this.height);
    }

  }

