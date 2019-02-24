let flowerfield = [];
let n_flo=600;
let buffer = 20; //avoid shape cut-off at the edge of the screen

function setup() {
    createCanvas(displayWidth, displayHeight);
    // background(48);
    for (let i = 0; i < n_flo; i++) {
        //dand = new Dandelion(300, 0, 50,100);
        flowerfield[i] = new Dandelion(random(buffer, displayWidth - buffer),
            random(buffer, displayHeight - buffer),
            random(20, 80),
            random(5, 60));
    }

}

function draw() {

    background(255);
    //dand.display();
    for (let i = 0; i < n_flo; i++) {
        //dand = new Dandelion(300, 0, 50,100);
        flowerfield[i].display();
    }

}

class Dandelion {
    constructor(tempX, tempY, tempN, tempL, tempS) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals
        this.l = tempL; //length
        this.s = tempS; //span: wide or narrow flowers
    }



    display() {

        for (var i = 0; i < this.n; i++) {
            //set starting position


            var r = random(600);
            // fill(color(random(200, 255), random(200, 255), random(255), 78)) // yellow
            fill(color(random(255), random(200, 210), random(200, 255), 118)) // blue

            beginShape();
            let l = 350;
            push();
            stroke(10, 100);
            translate(this.x, this.y);
            //   curveVertex(400, 0);
            //   curveVertex(400, 350);
            //   curveVertex(random(400), random(600));
            //   curveVertex(random(400), random(400));

            curveVertex(0, 0);
            curveVertex(0, this.l);
            curveVertex(random(-0.9 * this.l, 0.9 * this.l), random(0.8 * this.l));
            curveVertex(random(-0.9 * this.l, 0.9 * this.l), random(1.2 * this.l));
            endShape();
            pop();
        }
        for (var i = 0; i < 10; i++) {
            push();
            translate(this.x, this.y);
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