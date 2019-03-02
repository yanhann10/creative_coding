function setup() {
    createCanvas(800, 800);
}

//mouth or eye
function draw() {
    background(255);
    ellipse(300, 300, 30, 30);
    let xoff = 0;
    let angle = 0;

    for (let i = 0; i <= 90; i++) {
        stroke(0,0,205);
        push();
        translate(300, 300);
        rotate(radians(4*i));
        line(0, 0, map(noise(i),0,1,0,100),0);
        pop();
    }
    
}