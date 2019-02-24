let flowerfield = [];
let n_flo = 500;
let buffer = 20; //avoid shape cut-off at the edge of the screen

function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
    // background(48);
    for (let i = 0; i < n_flo; i++) {
        //dand = new Dandelion(300, 0, 50,100);
        flowerfield[i] = new Floret(random(buffer, displayWidth - buffer),
            random(buffer, displayHeight - buffer),
            random(20, 80), //number of petals
            random(5, 80), //length
            0); //rotation angle
    }

}

function draw() {

    background(255);
    for (let i = 0; i < n_flo; i++) {
        flowerfield[i].display();
    }

}

class Floret {
    constructor(tempX, tempY, tempN, tempL, tempRotate=0) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals
        this.l = tempL; //length
        this.rotate = tempRotate; //rotation angle
    }



    display() {

        for (var i = 0; i < this.n; i++) {
            var r = random(600);
            fill(color(random(255), random(180, 210), random(200, 255), 118)) // blue
            //set starting position
            //fill(0);
            beginShape();
            let l = 350;
            
            push();
            translate(this.x, this.y); //translate b4 rotate
            rotate(this.rotate);
            stroke(10, 60);
            curveVertex(0, 0);
            curveVertex(0, this.l);
            curveVertex(random(-this.l, this.l), random(1.2 * this.l));
            curveVertex(random(-2 * this.l, 2 * this.l), random(1.5 * this.l));
            endShape();
            pop();

            
        }
        noLoop();
    }
}