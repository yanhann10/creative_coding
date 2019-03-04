let pal = ['#F3C844', '#F1B34B', '#EC6959', '#DD406E', '#C24488',
'#A562A7', '#7B7EBF', '#4EA1B0', '#50BE8D', '#9ECA7D'];

class bauble {
    constructor(tempX, tempY, tempS,
        tempN, tempD, 
        tempAdj = 0, tempRandom) {
        this.x = tempX; //starting position
        this.y = tempY;
        this.s = tempS; //starting size
        this.n = tempN; //number of circles
        this.d = tempD; //distance in between 
        //this.c = tempC; //one end of the color gradient
        this.adj = tempAdj; //adjustments to make the circles not touching
        this.rand = tempRandom; //whether it's random format
    }

    display() {
        // the bauble object has 3 formats depends on whether the circles are touching and where
        if (this.rand == 1) {
            //random format, circles are tangent to each other at random points
            let r = this.d;
            translate(this.x, this.y);
            stroke(color(pal[int(random(0,9))]));
            for (let i = 0; i < this.n; i++) {
                let randomNoise = random(0, 360);
                let xr = cos(radians(randomNoise)),
                    yr = sin(radians(randomNoise));

                //stroke color
                let c1 =  color(0,191,255); //color(255, 165, 0)
                let c2 = color(255); 
                let interC = lerpColor(c1,c2, i/(this.n-1));
                strokeWeight(2.2); 
                //fill(interC); 
                translate(r * xr, r * yr);
                ellipse(0, 0, this.s + 2 * i * r, this.s + 2 * i * r);
            }
            noLoop()


        } else {
            //uniform format, tangent point overlapping (this.adj=0)
            //or on the same line (this.adj!=0)
            translate(this.x, this.y);
            noFill();
            //stroke color
              
            let c1 = color(0,191,255); // color(255, 165, 0) 
            let c2 = color(255); 
            
            for (let i = 0; i < this.n; i++) {
                let interC = lerpColor(c1,c2, i/(this.n-1));
                stroke(interC);
                ellipse(0, i * (this.d - this.adj),
                    this.s + 2 * this.d * i, this.s + 2 * this.d * i);
            }
        }
    }




}
