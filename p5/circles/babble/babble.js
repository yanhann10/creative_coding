//tangent circles of different radius
function setup() {
    frameRate(1);
    createCanvas(windowWidth, windowHeight);
    myBabble = new Babble(windowWidth/2, windowHeight/3, 20, 
        60, 3, 2, 1);
}


function draw() {
    background(255);
    myBabble.display();
}

class Babble {
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
        console.log(this.rand);
        if (this.rand==1) {
            //random format, circles are tangent to each other at random points
            let r = this.d;
            translate(this.x, this.y);
            noFill();
            for (let i = 0; i < this.n; i++) {
                let randomNoise = random(0, 180);
                let xr = cos(radians(randomNoise)),
                    yr = sin(radians(randomNoise));
                translate(r * xr, r * yr);
                ellipse(0, 0, this.s + 2 * i * r, this.s + 2 * i * r);              
            }
            noLoop()


        }
        else {
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