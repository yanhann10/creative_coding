function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
}

function draw() {

    background(255);
    let r =200;
    let g = 200; 
    let b =20;
    let d = 0;
    let rl=lerp(r, d, frameCount/600);
    let bl=lerp(b, d, frameCount/600)
    let gl=lerp(b, d, frameCount/600)
    fill (rl, bl, gl);
    for (let i=)
    ellipse(50,50,50,50)

}


function scorchFill() {

}