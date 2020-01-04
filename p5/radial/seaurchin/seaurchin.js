let starDusts = [];
let num = 5;
function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < num; i++) {
    starDusts[i] = new StarDust(
      random(50, width - 50),
      random(50, height - 50),
      random(60, 110)
    );
  }
}

function draw() {
  background(255);
  for (let i = 0; i < starDusts.length; i++) {
    starDusts[i].display();
  }
  console.log();
}

function mousePressed() {
  console.log(mouseX, mouseY);
  let myStarDust = new StarDust(mouseX, mouseY, random(80, 110));
  starDusts.push(myStarDust);
}

class StarDust {
  constructor(tempX, tempY, size) {
    this.x = tempX;
    this.y = tempY;
    this.size = size;
  }

  display() {
    noStroke();
    ellipse(this.x, this.y, 20);
    let xoff = 0;
    let angle = 0;

    for (let i = 0; i <= 30; i++) {
      stroke(100 + Math.floor(i / 2), 0, 255);
      push();
      translate(this.x, this.y);
      rotate(radians(12 * i));
      line(0, 0, map(noise(i), 0, 1, 0, this.size), 0);
      //filter(BLUR, 3);
      pop();
    }
  }
}
