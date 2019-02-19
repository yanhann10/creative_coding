function setup() {
    createCanvas(600, 600);
    frameRate(10);
}

//mouth or eye
function draw() {
    background(255);

    for (i=0;i<4;i++) {
        for (j=0;j<4;j++) {
            fill(sin(i)*50,0,random(40,90));
            ellipse(100+103*i, 200+103*j, 100, 100*sin(frameCount/10));
    }}
}