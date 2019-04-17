let x = [20, 40, 60, 80, 100, 120];
let y = [30, 90, 60, 120, 180, 150];
let ts = [1, 4, 6, 8, 10, 12];
let dt = 3000;
let donow = false;
let rr;
function setup() {
    createCanvas(720, 400);

}

function draw() {
    background(255);
    console.log(donow);
    console.log(rr)
    for (let i = 0; i < 6; i++) {
        stroke(255, 0, 0);
        ellipse(2 * x[i], 2 * y[i], 2, 2)
        enlargingCircle(2 * x[i], 2 * y[i]);
    }
}

function start() {
    print("start");
    donow = true;
    rr = 255;
}

function enlargingCircle(xpos, ypos) {
    fill(0, 0, 20, rr);
    rr--;
    if (rr<=10) {
        donow = false;
        setTimeout(start, dt);
        ellipse(xpos, ypos, rr/50, rr/50);
    }
}