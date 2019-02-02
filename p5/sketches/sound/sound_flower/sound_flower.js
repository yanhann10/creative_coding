//shapes that resemble the cross-section of cut crystal
let fill_color =[];
let w=1200, h=500;
let frameRt=3;

function setup() {
  frameRate(frameRt);
  createCanvas(windowWidth, windowHeight);
  noiseSeed(99);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = color(167,34,110); //purple
  let c2 = color(255); //white

    cross = new CrossSec(windowWidth/2, //x
        windowHeight/2-100, //y
        options.Radius, //radius
        random(3,7), //num of rings
        c1, //dark color
        c2);
  }



function draw() {  

    background(options.Background);

        cross.display(); 

}


class CrossSec{
    //isolines
    constructor(tempX, tempY, tempR,tempN,tempC1, tempC2) {
        this.x=tempX;
        this.y=tempY;
        this.r=tempR;
        this.n=tempN;
        this.c1=tempC1;
        this.c2=tempC2;
    }
    
    display() {
        let mynoiseseed=random(1000);
        let dist=floor(this.r/this.n)
        for (let j=0;j<this.n; j++){
            //repeat light to dark color gradation
            let interC = lerpColor(this.c1,this.c2, j%(this.n/2+1)/(this.n/2));
            beginShape();
            push()
            fill(interC);
            translate(this.x, this.y);
            for (let i=0;i<90;i++) {
                let radius= options.Radius + 
                //this.r doesn't work here
                    map((noise(mynoiseseed+i/5)),0,1,10,60) - dist * j;
                let x=sin(4*i);
                let y=cos(4*i);
                vertex(radius*x, radius*y);
            }
            endShape(CLOSE);
            pop();
            noLoop();
            }
        }
      }