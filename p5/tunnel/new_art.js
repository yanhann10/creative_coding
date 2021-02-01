//inspired by Naoki with modifications https://www.openprocessing.org/sketch/816606

let W = 400;
let C = 0;
function setup() {
  createCanvas(400, 320);
  startRecording();
}

function draw() {
  blendMode(BLEND);
  background(33);
  noFill();
  blendMode(SCREEN);

  x = y = W / 2;
  D = W;

  translate(0, 80);
  for (i = C++; i < C + 160; i++) {
    x += max(-0.1, cos(noise(i * 0.02) * 10) * 4);
    y += min(-0.1, sin(noise(i * 0.02) * 9) * 2);
    D *= 0.97;
    noFill();

    for (let j = 0; j < 3; j++) {
      //stroke(247,202,25,100)
      stroke(89, 10, 223, 100);
      strokeWeight(1);
      arc(x, y, D, D * 0.9, -PI, 0);
      stroke(89, 10, 223, 80);
      strokeWeight(3);
      arc(x, y, D, D * 0.9, -PI, 0);
      //stroke(247,202,25,10)
      stroke(89, 10, 223, 20);
      strokeWeight(5);
      arc(x, y, D, D * 0.9, -PI, 0);
    }
  }
  if (frameCount === 150) {
    stopRecording();
  }
}
