let petals =[];
let num_petals = 100;
let w=800;
let h=600;


function setup() {
    createCanvas(w, h);
      angleMode(DEGREES);
      for(let i=0; i<num_petals; i++) {
          petals[i] = new Petal(random(-1.5*w,1.5*w),random(h,2*h),
            random(8,14), //size
            random(1, 3), //speed
            100, //direction
            random(-4,4)/10 //tilt angle
            );
      }
    c1 = color(204,87,43);
    c2 = color(226,178,57);
  
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
    constructor(tempX, tempY, tempW, tempSpeed,tempDirection, tempTilt) {
        this.x=tempX;
        this.y=tempY;
        this.width=tempW;
        this.height=tempW;
        this.speed=tempSpeed;
        this.direction=tempDirection;
        this.tilt=tempTilt;
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
        if (mouseIsPressed){
        //change the color of nearby lanterns
            if (petals[i].x>400) {
                fill(shade*145, shade*95,shade*225);
            }
            else {}
        }
        else {
            fill(shade*204, shade*87,shade*43);
        }
    

        rotate(this.tilt);
        quad(this.x-this.width, this.y-1.8*this.height,
            this.x+this.width, this.y-1.8*this.height,
            this.x+this.width/1.8, this.y,
            this.x-this.width/1.8, this.y
            );

        fill(226,178,57);
        ellipse(this.x, this.y, this.width, 0.4*this.width);
        noStroke();
        //the flame
        fill(250,239,129);
        ellipse(this.x, this.y, this.width/5, 0.4*this.width/3);
    }

  }

//to-do: when mouseispressed create a new lantern object
//to-do: when mouseispressed change the color of nearby object