class BaubleSystem {
    constructor(tempN, tempDisplacement, tempLayout) {
        this.n = tempN;
        this.d=tempDisplacement;
        this.l = tempLayout;
        this.baubles = [];
    }

    add_bauble() {

        for (let i = 0; i < this.n; i++) {
            this.baubles.push(new bauble(0, 0, random(8,20),
                20, 2, 0, 1));
        }
    }

    display() {

        if (this.l == 'radial') {
            //layout: radial on a circle
            translate(windowWidth/2, windowHeight/4);
            for (let bauble of this.baubles) {
                rotate(radians(360 / this.n));
                translate(this.d,0);
                bauble.display();
            }

         
        } else if (this.l == 'fan') {
            //layout: fan-shaped 
            translate(windowWidth/2, windowHeight/2);   
            for (let bauble of this.baubles) {
                push();
                rotate(radians(random(-30, -150)));
                translate(this.d, 0);
                line(0,0,-random(30,100),0);
                bauble.display();
                pop();
            }
            
        }

    }
}