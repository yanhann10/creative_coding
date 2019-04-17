function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
}

function draw() {

    background(255);
    v=0.5
    c = color('hsb(160, 100%, v)');
    fill(c); // Use 'c' as fill color
    ellipse(50,50,50,50)

}
