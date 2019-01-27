let petals =[];
let num_petals = 100;
let w=800;
let h=600;

function setup() {
    createCanvas(w, h);
      angleMode(DEGREES);
      for(let i=0; i<num_petals; i++) {
          petals[i] = new Petal(random(-1.5*w,1.5*w),random(h,2*h),
            random(6,12), //size
            random(1, 3), //speed
            100);
      }
  
  }

  //object inheritance: apply action on some objects
  
  function draw() {
      background(0);
    for(let i=0; i<num_petals; i++) {
        petals[i].display();
        petals[i].move(frameCount/10);
    }
  }

  class Petal {
    //hold all variables 
    constructor(tempX, tempY, tempW, tempSpeed,tempDirection) {
        this.x=tempX;
        this.y=tempY;
        this.width=tempW;
        this.height=tempW;
        this.speed=tempSpeed;
        this.direction=tempDirection;
    }

    move(t){
        //angle=this.direction+0.4*t;
        this.x+=sin(t);
        if (this.x>w){
            this.x=this.x % w;
        }
        if (this.x<0){
            this.x=w-this.x;
        }
        //y speed based on object size
        this.y -=pow(this.width,0.6);
        if (this.y<0){
            this.y=h;
        }
    }



    display(){
        //vary the color based on size
        let shade=this.width/12;
        fill(shade*204, shade*87,shade*43);
        quad(this.x-1.2*this.width, this.y-2*this.height,
            this.x+1.2*this.width, this.y-2*this.height,
            this.x+this.width/1.7, this.y,
            this.x-this.width/1.7, this.y
            );
            
       // rect(this.x-this.width, this.y-2*this.height, 
           // 2*this.width, 3*this.height);
        fill(226,178,57);
        ellipse(this.x, this.y, this.width, 0.6*this.width);
    }

  }

