//tangent circles of different radius
let mybaubles = [];
let n_bauble = 10;

function setup() {
    frameRate(1);
    createCanvas(windowWidth, windowHeight);
    // mybauble = new bauble(windowWidth/2, windowHeight/2, 20, 
    //     60, 3, 2, 1);

    for (i = 0; i < n_bauble; i++) {
        mybaubles[i] = new bauble(0, 0, 20,
            10, 3, 2, 1);

    }
}


function draw() {
    background(255);
    // mybauble.display();
    translate(windowWidth / 2, windowHeight / 3)
    for (i = 0; i < n_bauble; i++) {

        rotate(radians(360 /n_bauble));
        translate(100, 0);
        mybaubles[i].display();
        //pop();
    }

}

class bauble {
    constructor(tempX, tempY, tempS,
        tempN, tempD, tempAdj = 0, tempRandom) {
        this.x = tempX; //starting position
        this.y = tempY;
        this.s = tempS; //starting size
        this.n = tempN; //number of circles
        this.d = tempD; //distance in between 
        this.adj = tempAdj; //adjustments to make the circles not touching
        this.rand = tempRandom;
    }

    display() {
        // the bauble object has 3 formats depends on whether the circles are touching and where
        if (this.rand == 1) {
            //random format, circles are tangent to each other at random points
            let r = this.d;
            translate(this.x, this.y);
            noFill();
            for (let i = 0; i < this.n; i++) {
                let randomNoise = random(0, 360);
                let xr = cos(radians(randomNoise)),
                    yr = sin(radians(randomNoise));
                translate(r * xr, r * yr);
                ellipse(0, 0, this.s + 2 * i * r, this.s + 2 * i * r);
            }
            noLoop()


        } else {
            //uniform format, tangent point overlapping (this.adj=0)
            //or on the same line (this.adj!=0)
            translate(this.x, this.y);
            noFill();
            for (let i = 0; i < 5; i++)
                ellipse(0, i * (this.d - this.adj),
                    this.s + 2 * this.d * i, this.s + 2 * this.d * i);
        }
    }




}

//to-do: 
//add layout methods