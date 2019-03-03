class BaubleSystem {
    constructor(tempN) {
        this.n = tempN;
        this.baubles = [];
    }

    add_bauble() {
        for (i = 0; i < this.n; i++) {
            this.baubles.push(new bauble(0, 0, 20,
                60, 3, 2, 1));
        }
    }

    display() {
        //layout: radial on a circle
        rotate(radians(360 / this.n));
        translate(100, 0);

        for (let bauble of this.baubles) {
            bauble.display();
        }

    }
}