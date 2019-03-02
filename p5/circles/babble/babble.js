function setup() {
    createCanvas(600, 600);
    myBabble = new Babble(300, 300,5);
}


function draw() {
    background(255);
    myBabble.display_semiTangent()
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
        for (let i=0; i<5; i++)
        ellipse(0, i*10, 60+20*i, 60+20*i);
    }

    display_semiTangent() {
        translate(this.x, this.y);
        noFill();
        for (let i=0; i<5; i++)
        ellipse(0, i*7, 60+20*i, 60+20*i);
    }
}