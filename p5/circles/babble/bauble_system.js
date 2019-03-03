class BaubleSystem {
    constructor(tempN, tempLayout) {
        this.n = tempN;
        this.l = tempLayout;
        this.baubles = [];
    }

    add_bauble() {

        for (let i = 0; i < this.n; i++) {
            this.baubles.push(new bauble(0, 0, 20,
                10, 3, 2, 1));
        }
    }

    display() {

        if (this.l == 'radial') {
            //layout: radial on a circle

            //push(); 


            for (let bauble of this.baubles) {
                rotate(radians(360 / this.n));
                translate(140,0);
                bauble.display();
            }

            //pop();
        } else if (this.l == 'fan') {
            //layout: fan-shaped 
            
            for (let bauble of this.baubles) {
                push();
                rotate(radians(random(-30, -180)));
                translate(100, 0);
                bauble.display();
                pop();
            }
            
        }

    }
}