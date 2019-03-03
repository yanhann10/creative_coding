let r = 5;

function setup() {
    createCanvas(600, 600);
    mybaubleSystem = new BaubleSystem(3);
}


function draw() {
    background(255);
    ellipse(0, 0, 20, 20);
    noFill()
    mybaubleSystem.display();
    noLoop()
}