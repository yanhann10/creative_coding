function setup() {
    createCanvas(800, 400);
    
}

function draw() {

    variableEllipse(mouseX, mouseY);
}

function variableEllipse(x, y) {
    if (mouseIsPressed === true) {
        noStroke();
        fill(100,100);
        ellipse(x, y,
            30 * noise(frameCount), 30 * noise(frameCount)
        );
       
    }
}