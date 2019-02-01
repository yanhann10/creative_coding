let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('assets/mountain.jpg');
  createCanvas(720, 400);
}

function draw() {
  image(bg,0,0);
  ellipse(50,50,20,20);
  stroke(226, 204, 0);
  line(0, y, width, y);


}