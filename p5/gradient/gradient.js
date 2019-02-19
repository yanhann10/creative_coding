// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(710, 400);

  // Define colors
  c1 = color(204,87,43);
  c2 = color(226,178,57);

  noLoop();
}

function draw() {

  setGradient(150, 90, 60, 40, c1, c2);
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();

    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x+(i-h)/4, i, x + w- (i-h)/4, i);
    }

}