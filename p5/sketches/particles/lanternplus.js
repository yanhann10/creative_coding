let bubbles =[];
let num = 50;
let w=800, h=600;


function setup() {
    createCanvas(w, h);
      for(let i=0; i<num; i++) {
          bubbles[i] = new bubble(random(0,w),random(0,h),
            random(5,15)
            );
      }   
  }

  //object inheritance: apply action on some objects
  
  function draw() {
    background(0);

    for(let i=0; i<num; i++) {
        bubbles[i].display();
        bubbles[i].move();
    }

    if (mouseIsPressed) {
        myBubble=new bubble(mouseX, mouseY,100,100);
        myBubble.display();
        myBubble.move();
    }
        
  }

  class bubble {
    //hold all variables 
    constructor(tempX, tempY, tempW) {
        this.x=tempX;
        this.y=tempY;
        this.width=tempW;
    }

    move(){
        //angle=this.direction+0.4*t;
        this.y+=6;
        this.y=this.y%h
    }


    display(){

        ellipse(this.x, this.y, this.width,this.width);
    }

  }

//to-do: when mouseispressed create a new lantern object
//to-do: when mouseispressed change the color of nearby object