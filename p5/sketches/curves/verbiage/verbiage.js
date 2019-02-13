let msg = [];
let thelips;
let fontsize = 20;
let c1, c2;

function setup() {
  createCanvas(800, 600);
  frameRate(8);
  thelips = new Lips(200, 0);
  for (let i = 0; i < 10; i++) {

    msg[i] = new Blah('blah', 322, 270);
  }
}

function draw() {
  background(255);

  textAlign(CENTER);
  noStroke();
  thelips.display();
  for (let i = 0; i < msg.length; i++) {
    msg[i].display();
    msg[i].update();
  }

}

//to-do: add size later on if needed, so far only intend to have 1
class Lips {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  display() {
    for (let i = 0; i < 20; i++) {
      let c1 = color('#5A46B2');
      c1.setAlpha(200);
      let c2 = color('#701452');
      c1.setAlpha(200)


      push();
      translate(this.x, this.y);
      stroke(c1);
      bezier(11, 250, 61, 151 + i * 4, 100, 176 + i * 4, 122, 192 + i * 3 + 20 * frameCount % 3);
      bezier(122, 192 + i * 3 + 20 * frameCount % 3, 144, 176 + i * 4, 183, 151 + i * 4, 233, 248);
      stroke(c2);
      noFill();
      bezier(233, 250, 183, 350 - 3.6 * i - 10 * frameCount % 3, 71, 350 - 3.6 * i - 10 * frameCount % 3, 11, 250);
      pop();
    }
  }
}

//to-do: vary texts
class Blah {
  constructor(tempTxt, tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.text = tempTxt;
  }

  update() {
    this.x += random(-1, 4);
    this.y += random(1, 8);

  }

  display() {
    textSize(fontsize);
    fontsize += 0.01;
    text(this.text, this.x, this.y);
  }
}


//to-do: delay the text
//accommodate two different frameRate