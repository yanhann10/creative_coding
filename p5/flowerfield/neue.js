let flowerfield = [];
let n_flo=600;
let buffer = 20; //avoid shape cut-off at the edge of the screen

function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
    // background(48);
    for (let i = 0; i < n_flo; i++) {
        //dand = new Dandelion(300, 0, 50,100);
        flowerfield[i] = new Dandelion(random(buffer, displayWidth - buffer),
            random(buffer, displayHeight - buffer),
            random(20, 80),//number of petals
            random(5, 60),//length
            random(0.2,1),//span: wide or narrow flowers range 0.5 to 1.2
            0);//rotation angle
    }

}

function draw() {
    
    background(255);
    for (let i = 0; i < n_flo; i++) {
        flowerfield[i].display();
    }

}

class Dandelion {
    constructor(tempX, tempY, tempN, tempL, tempW, tempRotate) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals
        this.l = tempL; //length
        this.w = tempW; //width flowers range 0.5 to 1.2
        this.rotate=tempRotate; //rotation angle
    }



    display() {

        for (var i = 0; i < this.n; i++) {
            var r = random(600);
            fill(color(random(255), random(150, 210), random(200, 255), 118)) // blue
            //set starting position
            beginShape();
            let l = 350;
            push();
            
            translate(this.x, this.y); //translate b4 rotate
            rotate(this.rotate);
            stroke(10, 60);
            curveVertex(0, 0);
            curveVertex(0, this.l);
            curveVertex(random(-this.w * this.l, this.w * this.l), random(0.8 * this.l));
            curveVertex(random(-0.9 * this.l, 0.9 * this.l), random(1.2 * this.l));
            endShape();
            pop();
        }
        for (var i = 0; i < 10; i++) {
            push();
            translate(this.x, this.y);
            rotate(this.rotate);
            fill(color(144, random(200, 255), 144, 60));
            beginShape();
            curveVertex(0, i);
            curveVertex(0, this.l);
            curveVertex(0, 1.6 * this.l);
            curveVertex(random(0.5 * this.l), random(0.5 * this.l));
            endShape();
            pop();
        }


        noLoop();
    }
}