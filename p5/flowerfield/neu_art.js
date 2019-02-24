function setup() {
    createCanvas(800, 700);
    // background(48);
    petals();
    stalk();
  }
  
  function petals() {
    // noStroke();
  

    for (var i = 0; i < 100; i++) {
      var r = random(600);
      // fill(color(random(200, 255), random(200, 255), random(255), 78)) // yellow
      fill(color(random(255), random(200, 210), random(200, 255), 78)) // blue
  
      beginShape();
    //   curveVertex(400, 0);
    //   curveVertex(400, 350);
    //   curveVertex(random(400), random(600));
    //   curveVertex(random(400), random(400));
      curveVertex(200, 0);
      curveVertex(200, 350);
      curveVertex(random(400), random(260));
      curveVertex(random(400), random(200));
      endShape();
    }
   
  }
  
  function stalk() {
    for (var i = 0; i < 30; i++) {
      fill(color(144, random(200, 255), 144, 60));
      beginShape();
      curveVertex(200, i);
      curveVertex(200, 350);
      curveVertex(200, 600);
      curveVertex(random(400), random(600));
      endShape();
    }
  }