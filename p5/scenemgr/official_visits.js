function setup() {
  createCanvas(windowWidth, windowHeight);
  mybaubleSystem = new BaubleSystem(6, 100, "raidal");
}

function draw() {
  background(224, 236, 238);
  //background(255);
  fill(250, 0, 0);
  noFill();
  //start drawing from the center of the screen
  translate(windowWidth / 2, windowHeight / 2);
  mybaubleSystem.run();
  noLoop();
}
