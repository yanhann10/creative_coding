//shapes that resemble the cross-section of cut crystal
let fill_color =[];
let w=1200, h=500;
let frameRt=3;
let flo = []
let n_flo=20
let col=[ "#f0f921",
            "#f7e225",
            "#fccd25",
            "#feb72d",
            "#fca338",
            "#f79044",
            "#f07f4f",
            "#e76e5b",
            "#dd5e66",
            "#d14e72",
            "#c5407e",
            "#b6308b",
            "#a72197",
            "#9511a1",
            "#8305a7",
            "#6e00a8",
            "#5901a5",
            "#43039e",
            "#2c0594",
            "#0d0887"]
function setup() {
  frameRate(frameRt);
  createCanvas(windowWidth, windowHeight);
  noiseSeed(99);
  background(0);
  angleMode(DEGREES);
  colorMode(RGB);
  //start n stop of color range
  let c1 = color(52, 136,60); //green
  let c2 = color(255); //white

  for (let i=0;i<n_flo;i++) {
    flo[i] = new CrossSec(random(80,1200), //x
        random(80,800), //y
        random(10,100), //radius
        random(3,7), //num of rings
        color(col[i]), //dark color
        c2);
  }
}


function draw() {  

    background(0);
    for (let i=0;i<n_flo;i++) {
        flo[i].display(); 

}}


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
            let interC = lerpColor(this.c1,this.c2, j%(this.n/2+1)/(this.n/2+1));
            beginShape();
            push()
            fill(interC);
            translate(this.x, this.y);
            for (let i=0;i<90;i++) {
                let radius= this.r + 
                //this.r doesn't work here
                    map((noise(mynoiseseed+i/1.8)), //increase this for rounder shape
                    0,1,10,80) 
                    - dist * j;
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