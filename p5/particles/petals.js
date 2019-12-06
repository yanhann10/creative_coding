let petals = [];
let num_petals = 100;
let w = 800;
let h = 600;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  for (let i = 0; i < num_petals; i++) {
    petals[i] = new Petal(
      random(-1.5 * w, 1.5 * w),
      random(h, 2 * h),
      random(6, 12),
      random(1, 3),
      100
    );
  }
}

//object inheritance: apply action on some objects

function draw() {
  background(0);
  for (let i = 0; i < num_petals; i++) {
    petals[i].display();
    petals[i].move(frameCount / 10);
  }
}

class Petal {
  //hold all variables
  constructor(tempX, tempY, tempW, tempSpeed, tempDirection) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempW;
    this.height = tempW;
    this.speed = tempSpeed;
    this.direction = tempDirection;
  }

  move(t) {
    //angle=this.direction+0.4*t;
    this.x += sin(t);
    if (this.x > w) {
      this.x = this.x % w;
    }
    this.y -= pow(this.width, 0.5);
    if (this.y < 0) {
      this.y = h;
    }
  }

  display() {
    fill(221, 198, 200);
    rect(
      this.x - this.width,
      this.y - 2 * this.height,
      2 * this.width,
      3 * this.height
    );
    ellipse(this.x, this.y, this.width, this.height);
  }
}
