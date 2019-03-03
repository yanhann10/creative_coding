//tangent circles of different radius
function setup() {
    createCanvas(600, 600);
    myBabble = new Babble(300, 300, 5, 5);
}


function draw() {
    background(255);
    myBabble.display_Random();
}

class Babble {
    constructor(tempX, tempY, tempN, tempD, tempAdj = 0) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of circles
        this.d = tempD; //distance in between 
        this.adj = tempAdj; //adjustments to make the circles not touching

    }

    display() {
        translate(this.x, this.y);
        noFill();
        for (let i = 0; i < 5; i++)
            ellipse(0, i * (this.d - this.adj),
                60 + 2 * this.d * i, 60 + 2 * this.d * i);
    }


    display_Random() {
        let r = this.d;
        translate(this.x, this.y);
        noFill();
        point(0, 0);

        for (let i = 0; i < this.n; i++) {         
            let randomNoise = random(0, 180);
            let xr = cos(radians(randomNoise)),
                yr = sin(radians(randomNoise));
            translate(r * xr, r * yr);
            ellipse(0, 0, 60 + 2 * i * r, 60 + 2 * i *r);

            
        }
        noLoop()
    }

}

//to-do: 
//add layout methods