let x = 0;
let side = 18;
function setup() {
  createCanvas(400, 400);

  startRecording();
}

function draw() {
  background(color(5, 250, 200 + (frameCount % 50)));

  for (let i = -300; i < 300; i += 2 * side) {
    for (let j = -300; j < 300; j += side) {
      fill(33, 33, 33, 240);
      push();
      translate(200, 200);
      rotate(x);
      rect(i - ((j / (2 * side)) % 2) * 2 * side, j, side - 2, side - 2);
      pop();
    }
  }
  x += 0.015 * sin(frameCount % 3);

  for (let i = 0; i < 480; i += 2 * side) {
    for (let j = 0; j < 400; j += side) {
      fill(33, 33, 33, 240);
      rect(i - ((j / (2 * side)) % 2) * 2 * side, j, side - 2, side - 2);
    }
  }

  if (frameCount == 200) {
    stopRecording();
  }
}
