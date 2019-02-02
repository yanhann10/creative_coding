//  Mic input

let fill_color =[];
let cross_num=5;
let w=1200, h=500;
let frameRt=3;
let input;

function setup() {
  createCanvas(480, 270);
  //sound
  //input = new p5.AudioIn();
  //input.start();
  //initiate object
  frameRate(frameRt);
  createCanvas(w, h);
  noiseSeed(99);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = [color(167,34,110), color(236,32,73), color(242,107,56), 
    color(247,219,79), color(47,149,153)]; //purple
  let c2 = color(255); //white





function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  //var vol = input.getLevel();
  fill(127);
  stroke(0);
  let cross = new CrossSec(230, //x
    250, //y
    80, //radius
    random(3,7), //num of rings
    c1[0], //dark color
    c2);
}

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
                let radius= map(noise(mynoiseseed+this.r), 0, 1, 18, 128) + 
                    map((noise(mynoiseseed+i/5)),0,1,10,60) - dist * j;
                let x=sin(4*i);
                let y=cos(4*i);
                vertex(radius*x, radius*y);
            }
            endShape(CLOSE);
            pop();
           
            }
        }
}