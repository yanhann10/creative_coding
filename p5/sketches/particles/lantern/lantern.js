let lanterns = [];
let num_lanterns = 100;
let w = 800;
let h = 600;


function setup() {
    createCanvas(w, h);
    angleMode(DEGREES);
    for (let i = 0; i < num_lanterns; i++) {
        lanterns[i] = new lantern(random(-1.5 * w, 1.5 * w), random(h, 2 * h),
            random(8, 14), //size
            random(1, 3), //speed
            100, //direction
            random(-4, 4) / 10 //tilt angle
        );
    }
    c1 = color(204, 87, 43);
    c2 = color(226, 178, 57);


}

function draw() {
    background(0);





   // for (let i = 0; i < lanterns.length; i++) {
      //  lanterns[i].display();
     //   lanterns[i].move(frameCount / 10);
    //}

    for (const l of lanterns) {
        l.display();
        l.move(frameCount / 30);
    }
}

class lantern {
    //hold all variables 
    constructor(tempX, tempY, tempW, tempSpeed, tempDirection, tempTilt) {
        this.x = tempX;
        this.y = tempY;
        this.width = tempW;
        this.height = tempW;
        this.speed = tempSpeed;
        this.direction = tempDirection;
        this.tilt = tempTilt;
    }

    move(t) {
        //angle=this.direction+0.4*t;
        this.x += sin(t);
        if (this.x > w) {
            this.x = this.x % w;
        }
        if (this.x < 0) {
            this.x = w - this.x;
        }
        //y speed based on object size
        this.y -= pow(this.width, 0.6);
        if (this.y < 0) {
            this.y = h;
        }
    }



    display() {
        //vary the color based on size
        let shade = this.width / 12;
        fill(shade * 253, shade * 105, shade * 2);

        //change the color of those near the mouse
        let dst = dist(this.x, this.y, mouseX, mouseY);
        if (dst < 120) {
            fill(shade * 167, shade * 34, shade * 110);
        }

        rotate(this.tilt);
        quad(this.x - this.width, this.y - 1.8 * this.height,
            this.x + this.width, this.y - 1.8 * this.height,
            this.x + this.width / 1.8, this.y,
            this.x - this.width / 1.8, this.y
        );

        fill(226, 178, 57);
        ellipse(this.x, this.y, this.width, 0.4 * this.width);
        noStroke();
        //the flame
        fill(250, 239, 129);
        ellipse(this.x, this.y, this.width / 5, 0.4 * this.width / 3);
    }

}


function mousePressed() {
    let myLantern = new lantern(mouseX, mouseY, 8, //size
        random(1, 3), //speed
        100, //direction
        random(-4, 4) / 10 //tilt angle
    )
    lanterns.push(myLantern);
}

//to-do: when mouseispressed create a new lantern object