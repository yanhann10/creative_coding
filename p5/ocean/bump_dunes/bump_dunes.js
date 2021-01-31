//let noiseScale = 0.01;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(5, 15, 1);
}

function draw() {
  frameRate(6);
  background(33);
  colorMode(RGB);
  let noiseScale = (5 + (frameCount % 5)) / 1000;
  let w = 400;

  for (let i = 10; i >= 0; i--) {
    if (i % 2 == 0) {
      band = 0;
    } else if (i % 4 == 1) {
      band = 1;
    } else {
      band = 2;
    }
    canyon(w, i ** 1.7 * 10, band, noiseScale);
  }
}

function canyon(w, top, band, noiseScale) {
  var lightpink = color(232, 173, 187);
  var lightblue = color(104, 198, 223);
  var darkpurple = color(104, 15, 229);

  for (let x = 0; x < w; x += 2) {
    randomSeed(1);
    let noiseVal = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
    if (band === 0) {
      stroke(33);
    } else if (band === 1) {
      strokeWeight(5);
      stroke(lerpColor(lightblue, darkpurple, noiseVal));
    } else {
      strokeWeight(5);
      stroke(lerpColor(lightpink, darkpurple, noiseVal));
    }
    line(x, height - noiseVal * top + Math.abs((w / 2 - x) / 5), x, w);
    // stroke(130,80,200,255-noiseVal*255);
    // stroke(lerpColor(lightblue, purple, noiseVal));
    // line(x, noiseVal * 100 - 2, x, 0);
  }
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}
