function setup() {
    createCanvas(600, 600);
    myBabble = new Babble(300, 300, 5);
}


function draw() {
    background(255);
    myBabble.display_Random();
}

class Babble {
    constructor(tempX, tempY, tempN) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals

    }

    display() {
        translate(this.x, this.y);
        noFill();
        for (let i = 0; i < 5; i++)
            ellipse(0, i * 10, 60 + 20 * i, 60 + 20 * i);
    }

    display_semiTangent() {
        translate(this.x, this.y);
        noFill();
        for (let i = 0; i < 5; i++)
            ellipse(0, i * 7, 60 + 20 * i, 60 + 20 * i);
    }

    display_Random() {
        let r = 10;
        //push();
        translate(this.x, this.y);
        noFill();



        point(0,0);
        //ellipse(10 * cos(30), 10 * sin(30),80,80);

        let randomAngle = random(0, 360);
        for (let i = 0; i < 5; i++) {
            push();
            translate(r * i* cos(randomAngle), r * i* sin(randomAngle));
            ellipse(0,0, 60 + 2 * i * r, 60 + 2 * i * r);
            
            pop();
    }
        noLoop();
    }

}