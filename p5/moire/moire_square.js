let x = 0;
let side = 18;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);

  startRecording();
}

function draw() {
  //background(color(5, 250, 200 + (frameCount % 50)));
  //let c1 = color(216, 245, 47, 200);
  let c1 = color(134, 255, 255, 200);
  let c2 = color(179, 255, 47, 200);
  let c3 = color(140, 223, 58, 200);

  if (frameCount < 100) {
    background(lerpColor(c1, c2, frameCount / 100));
  } else {
    background(lerpColor(c2, c3, (frameCount - 100) / 100));
  }

  //console.log(frameCount);

  for (let i = -300; i < 300; i += 2 * side) {
    for (let j = -300; j < 300; j += side) {
      noStroke();
      fill(33, 250);
      push();
      translate(200, 200);
      rotate(x);
      rect(i - ((j / (2 * side)) % 2) * 2 * side, j, side - 1, side - 1);
      pop();
    }
  }
  x += 0.015 * sin(frameCount % 3);

  for (let i = 0; i < 480; i += 2 * side) {
    for (let j = 0; j < 400; j += side) {
      noStroke();
      fill(33, 250);
      rect(i - ((j / (2 * side)) % 2) * 2 * side, j, side - 1, side - 1);
    }
  }

  if (frameCount == 200) {
    stopRecording();
  }
}
