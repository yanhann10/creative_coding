//shapes that resemble the cross-section of cut crystal
let fill_color =[];
let cross=[];
let cross_num=8;
let w=1200, h=500;
let frameRt=3;
let radius;

function setup() {
  frameRate(frameRt);
  createCanvas(w, h);
  noiseSeed(99);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = color(48,153,30); //purple
  let c2 = color(255); //white
  for (let i=0; i<cross_num; i++){
    cross[i] = new CrossSec(random(100,1000), //x
        random(100,400), //y
        80, //radius
        19, //num of rings
        c1, //dark color
        c2);
  }

}

function draw() {  

    background(255);
    for (let i=0; i<cross_num; i++){
        cross[i].display(); 
    }
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
            let interC = lerpColor(this.c1,this.c2, j/(this.n));
            beginShape();
            push()
            fill(interC);
            translate(this.x, this.y);
            for (let i=0;i<20;i++) {
                if (i%2==0) {
                radius= map(noise(this.r), 0, 1, 18, 128) + 
                    map((noise(i/5)),0,1,10,80) - dist * j;}
                    else {
                      radius= map(noise(this.r), 0, 1, 18, 88) + 
                    map((noise(i/5)),0,1,30,40) - dist * j;}
                stroke(255);
                let x=sin((18*i)) ;
                let y=cos((18*i)) ;
               
               
                curveVertex(radius*x, radius*y);
                
            }
            endShape(CLOSE);
            pop();
           
            }
        }
}
//to-do: push alternative big and small radius
