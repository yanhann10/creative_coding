let t = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);

}


function draw() {
    background(255);
    translate(150, 50);
    noFill();
    for (let i = 0; i < 100; i++) {
        
        translate(t, -0.1);
        stroke(255,random(50,150),0);
        bezier(90-random(0,10)-i/5,3+random(0,10)+i/5,47,52,37,49,6,50);
        bezier(90+random(0,10),100-random(0,10)-i/5,68,72,35,57,0,50);
        
    }
    noLoop();
}

