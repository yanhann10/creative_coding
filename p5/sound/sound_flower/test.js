let ra=0, rb=0, startT, deltaT = 3000, doit = false;
let w = 200, h = 200;

function setup() {
  createCanvas(w, h);
  background(200, 200, 0);
  startT=millis();
}

function myTimer() {
  if (millis() > startT + deltaT) {
    startT = millis()
    console.log("it is time for it now"); // do what you have to do!
    doit = true;
    rb=0;                  // repeats second circle as loop
  }
}

function draw() {
  ra++;
  //stroke(200, 0, 0);
  //fill(200, 0, 0);
  noFill();
  ellipse(w / 2, h / 2, ra, ra);
  //later, this new circle appear
  if (doit) {
    rb++;
    stroke(0, 200, 0);
    //fill(200,200,0);
    noFill();
    ellipse(w / 2, h / 2, rb, rb);
  }
  myTimer();
}