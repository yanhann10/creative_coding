// Mainly based on Coding Challenge 127: Brownian Motion Snowflake by Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// Modified symmetry, color, randomness

let current;
let snowflake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height / 2, 0);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(PI / 6);
  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  // If a particle doesn't move at all we're done
  // This is an exit condition not implemented in the video
  if (count == 0) {
    noLoop();
    console.log("snowflake completed");
  }

  snowflake.push(current);
  current = new Particle(height / 2, 0);

  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
