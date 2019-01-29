//shapes that resemble the cross-section of a raw colored crystal
let fill_color =[];
let cross=[];
let cross_num=1;
let w=800, h=600;

function setup() {
  createCanvas(w, h);
  background(255);
  angleMode(DEGREES);
  //for (let i=0; i<cross_num; i++){
                            // x           , y             ,rad, num
    sec = new CrossSec(300, 300, 80, 5);
 // }
}

function draw() {  
    //for (let i=0; i<cross_num; i++){
        sec.display();
     // }

}


class CrossSec{
    //isolines
    constructor(tempX, tempY, tempR,tempN) {
        this.x=tempX;
        this.y=tempY;
        this.r=tempR;
        this.n=tempN
    }
    
    display() {
        for (let j=0;j<this.n; j++){
            beginShape();
            push()
            translate(this.x, this.y);
            for (let i=0;i<90;i++) {
                let radius=this.r+ map(noise(i/5),0,1,6,60) - 20 * j;
                let x=sin(4*i);
                let y=cos(4*i);
                vertex(radius*x, radius*y);
            }
            endShape(CLOSE);
            pop();
            noLoop()
            }
        }
}

