function setup() {
    createCanvas(800, 600);
    background(255);
  }
  
  function draw() {
    background(255);
    translate(300,300);
    fill(0);
    for (let i=1;i<200; i++) {
        ellipse(sin(i)*100, cos(i)*30,1,1);
        ellipse(sin(i)*160, cos(i)*60,1,1);
        ellipse(sin(i)*200, cos(i)*90,1,1);
    }
    fill(180,0,0,160);
    ellipse(sin(frameCount/60)*100, cos(frameCount/60)*30,20,20);
    fill(255,211,0,160);
    ellipse(sin(frameCount/60-2)*160, cos(frameCount/60-2)*60,20,20);
    fill(0,0, 180,160);
    ellipse(sin(frameCount/60-4)*200, cos(frameCount/60-4)*90,20,20);
  }

