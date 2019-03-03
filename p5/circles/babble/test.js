let r = 5;

function setup() {
    createCanvas(600, 600);
    mybaubleSystem = new BaubleSystem(8,100,'radial');
}


function draw() {
    background(255);
    fill(250,0,0);
    
    
    noFill();
    mybaubleSystem.add_bauble();
    mybaubleSystem.display();
    noLoop()
}