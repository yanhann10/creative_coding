let n = 6;
let r = 60;
let angle = 360 / n;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100);
    frameRate(10);
}

function draw() {
    background(255);
    randomSeed(10);
    let nX = 300 / r / 2;
    let nY = 600 / r / 2;
    let shiftX = map(mouseX, 0, 600, 1.8*r, 2.5*r)
    for (let x = 0; x < nX; x++) {
        for (let y = 0; y < nY; y++) {
            let h = r * sin(radians(60));
            hexagon(r + x * r * 3, r + 2 * h * y);
            hexagon(shiftX + x * r * 3, r + h + 2 * h * y);
        }
    }
}

function hexagon(x, y) {
    beginShape(TRIANGLE_FAN);
    vertex(x, y);
    for (let i = 0; i <= n; i++) {
        let pX = x + r * cos(radians(angle) * i)
        let pY = y + r * sin(radians(angle) * i)
        vertex(pX, pY);
        fill(angle * i + 80, 50, 100);
    }
    endShape();
}

