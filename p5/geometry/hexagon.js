let n = 6;
let r;
let angle = 360 / n;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(255);



    for (let x = 0; x<3; x++) { 
        hexagon(100+x*300, 100);
        hexagon(250+x*300, 100 + 100 * sin(radians(60)));
    }


   
}

function hexagon(x, y) {
    beginShape(TRIANGLE_FAN);
    vertex(x, y);
    let r = 100;
    for (let i = 0; i <= n; i++) {
        let pX = x + r * cos(radians(angle) * i)
        let pY = y + r * sin(radians(angle) * i)
        vertex(pX, pY);
        fill(angle * i + 80, 50, 100);

    }
    endShape();
}