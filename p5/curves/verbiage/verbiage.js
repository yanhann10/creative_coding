let msg = [];
let mov_msg = [];
let thelips;
let fontsize = 20;
let c1, c2;
let frameDivisor = 20;

function setup() {
  createCanvas(800, 600);
   
  thelips = new Lips(200, 0);
  //add words
  ps = new ParticleSystem(createVector(350, 260));
  frameRate(10);
}

function draw() {
  background(255);

  textAlign(CENTER);
  noStroke();

  thelips.display();
  ps.addParticle();
  ps.run();

}


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
      noFill();
      push();
      translate(this.x, this.y);
      stroke(c1);
      //upper lip
      bezier(11, 250, 61, 151 + i * 4, 100, 176 + i * 4, 122, 192 + i * 3 +
        frameCount % frameDivisor);
      bezier(122, 192 + i * 3 +
        frameCount % frameDivisor, 144, 176 + i * 4, 183, 151 + i * 4, 233, 248);
      stroke(c2);
      noFill();
      //lower lip
      bezier(233, 250, 183, 350 - 3.6 * i -
        frameCount % frameDivisor, 71, 350 - 3.6 * i -
        frameCount % frameDivisor, 11, 250);
      pop();
    }
  }
}

//to-do: 
//feed in the text