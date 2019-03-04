let r = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    mybaubleSystem = new BaubleSystem(8,120,'radial');
}


function draw() {
    //background(224,236,238);
    background(255);
    fill(250,0,0);
    
    
    noFill();
    mybaubleSystem.add_bauble();
    mybaubleSystem.display();
    noLoop()
}