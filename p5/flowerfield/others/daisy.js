
var angle = 0;
//inspiration from https://github.com/processing/p5.js/blob/c1c94803c002432bad795d8269af2fedbecd34bb/test/manual-test-examples/webgl/curves/sketch.js
function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw()
{
    background(255);
    strokeWeight(2);

    stroke(255, 235, 59);
    fill(255,180,200);
    ellipse(0, -120, 30, 30);
    fill(25, 210, 225);

    push();
    translate(0, -120, 0);
    for (var i = 0; i < 20; i++) {
        var _x = 20 * Math.cos(radians(i));
        var _y = 20 * Math.sin(radians(i));
        beginShape();
        vertex(_x, _y,0);
        bezierVertex(-50, -250, //controls flower size
            -20, 100, -10, -10, _x, _y, 0);
        rotateZ(1);
        endShape();
    }
    pop();




}