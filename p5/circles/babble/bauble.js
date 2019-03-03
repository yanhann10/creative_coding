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
            for (let i = 0; i < this.n; i++)
                ellipse(0, i * (this.d - this.adj),
                    this.s + 2 * this.d * i, this.s + 2 * this.d * i);
        }
    }




}

//to-do: 
//add layout methods