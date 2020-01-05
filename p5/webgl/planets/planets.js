function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  normalMaterial();

  for (let j = 0; j < 5; j++) {
    push();
    translate(
      sin(frameCount * 0.001 + j) * 100,
      sin(frameCount * 0.001 + j) * 100,
      0.1
    );
    rotateZ(frameCount * 0.002);
    push();
    sphere(20);
    pop();
    pop();
  }
}
