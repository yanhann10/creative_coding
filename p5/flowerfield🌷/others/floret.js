let flowerfield = [];
let n_flo = 500;
let buffer = 20; //avoid shape cut-off at the edge of the screen
let ps;


function preload() {
    table = loadTable("data/df_tsne_output.csv", "header");
}

function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
    // background(48);
    //add smoke particle
    
    loadData();
    ps = new ParticleSystem(createVector(100, 100));

}

function draw() {

    background(255);


    //add smoke particles
    ps.addParticle();
    ps.run();
    for (let i = 0; i < flowerfield.length; i++) {
        flowerfield[i].display();
    }

}


function loadData() {
    flowerfield = [];

    for (var i = 0; i < table.getRowCount() / 5; i++) {
        var row = table.getRow(i);
        var xpos = map(row.get('x1'), -25, 30, buffer, displayWidth - buffer);
        var ypos = map(row.get('x2'), -25, 30, buffer, displayHeight - buffer);


        flowerfield[i] = new Floret(xpos, //x
            ypos, //y
            random(20, 30), //number of petals
            random(2, 20), //length
            0); //rotation angle

    }
}


class Floret {
    constructor(tempX, tempY, tempN, tempL, tempRotate = 0) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals
        this.l = tempL; //length
        this.rotate = tempRotate; //rotation angle
    }



    display() {

        for (var i = 0; i < this.n; i++) {
            var r = random(600);
            fill(color(random(255), random(180, 210), random(200, 255), 118)) // blue
            //set starting position
            //fill(0);
            beginShape();
            let l = 350;

            push();
            translate(this.x, this.y); //translate b4 rotate
            rotate(this.rotate);
            stroke(10, 60);
            curveVertex(0, 0);
            curveVertex(0, this.l);
            curveVertex(random(-this.l, this.l), random(1.2 * this.l));
            curveVertex(random(-2 * this.l, 2 * this.l), random(1.5 * this.l));
            endShape();
            pop();


        }
        noLoop();
    }

    smoke() {
        
    }
}

//to-do:
//bloom
//smoke particle
//fire particle
//change the look of the flower
//encode severe_toxic	obscene	threat	insult
//add css