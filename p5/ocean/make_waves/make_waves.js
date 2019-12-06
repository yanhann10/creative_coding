//waves flunctuates and recedes, leaving a static behind

let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
  background(254, 226, 62);
}

function draw() {
  let doff = 0;

  for (i = 0; i < 10; i++) {
    //color in different shade, vary with time
    fill(0, 160 - 20 * i - frameCount / 3, 214 - 20 * i - frameCount / 3);
    //make the distance random
    wave(map(noise(doff), 0, 1, 20, 80) * i);
    doff += 0.1;
  }
}

function wave(distance) {
  //make it mostly black borders with a few white strokes
  if (frameCount % 8 != 0) {
    stroke(color(50));
  } else {
    stroke(color(250));
  }
  beginShape();
  let xoff = 0;
  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 6) {
    // Calculate a y value according to noise, map to
    let y =
      map(noise(xoff, yoff), 0, 1, 100, 200) +
      //add a minor sin term for some waves
      map(sin(x), -1, 1, 0, 20);
    // Set the vertex
    y += distance + frameCount / 2;
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.005;

  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
