class BaubleSystem {
    constructor(tempN, tempDisplacement, tempLayout) {
        this.n = tempN;
        this.d = tempDisplacement;
        this.l = tempLayout;
        this.baubles = [];
    }

    add_bauble() {

        for (let i = 0; i < this.n; i++) {
            this.baubles.push(new bauble(0, 0, 2,
                random(16, 30), 2, //starting size, #circles
                0, 0)); //when last param is 0 all lines are colorful
        }
    }

    display() {

        if (this.l == 'radial') {
            //layout: radial on a circle
            translate(windowWidth / 2, windowHeight / 4);
            for (let bauble of this.baubles) {
                rotate(radians(360 / this.n));
                translate(this.d, 0);
                bauble.display();
            }


        } else if (this.l == 'fan') {
            //layout: fan-shaped, evenly spread out between 30 to 120 degree
            translate(windowWidth / 2, windowHeight / 2);
            for (let bauble of this.baubles) {
                rotate(radians(-180 / (this.n + 1)));
                line(this.d / random(1.5, 3), 0, this.d, 0);
                push();
                translate(this.d, 0);
                //line(0,0,-random(30,100),0);
                bauble.display();
                pop();
            }
        } else if (this.l == 'loom') {
            //layout: double fans, vertical mirror image
            translate(windowWidth / 2, windowHeight / 2);
            beginShape()
            for (let bauble of this.baubles) {
                rotate(radians(-260 / (this.n + 1)));
                line(this.d / random(1.5, 3), 0, this.d, 0);
                push();
                translate(this.d, 0);
                //line(0,0,-random(30,100),0);
                bauble.display();
                pop();

            }
            endShape()


        } else if (this.l == 'scatter') {
            //layout: fan-shaped 
            translate(windowWidth / 2, windowHeight / 2);
            for (let bauble of this.baubles) {
                push();
                translate(random(-300, 300), random(-200, 200));
                bauble.display();
                pop();
            }

        }

    }
}