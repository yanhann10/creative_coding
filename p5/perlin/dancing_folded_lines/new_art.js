var w = 500;
var h = 500;
var rand1 = [];
var rand2 = [];
var r = 150;

function setup() {
  createCanvas(w, h);
  for (let i = 0; i < h + 4; i += 5) {
    rand1.push(noise(i * 2) * h * 1.2);
  }
  for (let i = 0; i < h + 4; i += 5) {
    rand2.push(random() * h);
  }
  startRecording();
}

function draw() {
  var purple = color(122, 15, 215);
  var darkpurple = color(104, 15, 229);

  var pt2 = 90;
  var pt3 = 160;
  var pt4 = 320;
  var pt5 = 418;
  background(33);
  strokeWeight(0.6);
  stroke(250);
  randomSeed(1);

  push();
  translate(w / 2, h / 2);
  var traceX = r * sin(frameCount / 16);
  var traceY = r * cos(frameCount / 16);
  pop();

  for (let i = 0; i < h + 4; i += 5) {
    stroke(darkpurple);
    line(0, random() * h, pt2, map(traceX + traceY, 0, 800, 150, h - 80));
  }
  for (let i = 0; i < h + 4; i += 5) {
    stroke(purple, Math.abs(250 - i / 5));
    line(pt2, map(traceX + traceY, 0, 800, 150, h - 80), pt3, rand1[i / 5]);
    stroke(darkpurple);
    line(pt3, rand1[i / 5], pt4, map(h - traceY, 0, h, 150, 280));
  }
  for (let i = 0; i < h + 4; i += 5) {
    stroke(purple);
    line(pt4, map(h - traceY, 0, h, 150, 280), pt5, rand2[i / 5]);
    stroke(darkpurple);
    line(pt5, rand2[i / 5], w, map(h - traceX, 0, h, 250, 360));
  }
  if (frameCount > 200) {
    stopRecording();
  }
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}
