//shapes that resemble the cross-section of cut crystal
//dense blue rings interspersed by white rings

let fill_color =[];
let cross=[];
let cross_num=1;
let w=800, h=600;


function setup() {
  createCanvas(w, h);
  noiseSeed(99);
  background(255);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = color(106,18,210); //purple
  let c2 = color(255); //white
  //for (let i=0; i<cross_num; i++){
                            // x           , y             ,rad, num
    sec = new CrossSec(300, 300, 80, 5,c1,c2);
 // }
}

function draw() {  
    //for (let i=0; i<cross_num; i++){
        sec.display();
     // }

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
        for (let j=0;j<this.n; j++){
            //repeat light to dark color gradation
            let interC = lerpColor(this.c1,this.c2, j%(this.n/2+1)/(this.n/2));
            beginShape();
            push()
            fill(interC);
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
//to-consider: how to make noise more concentrated in certain range..log?