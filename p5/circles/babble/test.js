let r = 5;

function setup() {
    createCanvas(600, 600);
    mybaubleSystem = new BaubleSystem(5,'fan');
}


function draw() {
    background(255);
    fill(250,0,0);
    ellipse(windowWidth/2, windowHeight/3,10,10);
    translate(windowWidth/2, windowHeight/3);
    noFill();
    mybaubleSystem.add_bauble();
    mybaubleSystem.display();
    noLoop()
}