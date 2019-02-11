function setup() {
  createCanvas(800, 600);
  frameRate(9);
}

function draw() {
  background(255);
  for (let i = 0; i < 20; i++) {
    let c1 = color('#5A46B2');
    c1.setAlpha(200);
    let c2 = color('#701452');
    c1.setAlpha(200)
    push();
    translate(200, 0);
    stroke(color(c1));
    bezier(11, 250, 61, 151 + i * 4, 100, 176 + i * 4, 122, 192 + i * 3 + 10 * frameCount % 3);
    bezier(122, 192 + i * 3 + 10 * frameCount % 3, 144, 176 + i * 4, 183, 151 + i * 4, 233, 248);
    stroke(c2);
    noFill();
    bezier(233, 250, 183, 350 - 3.6 * i - 10 * frameCount % 3, 71, 350 - 3.6 * i - 10 * frameCount % 3, 11, 250);
    pop();
  }


}