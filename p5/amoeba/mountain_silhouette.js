let dist=120;
let height=400;
function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(255);

    beginShape();
    for (let j = 0; j < 3; j++) {
        fill(255-10*j);

        vertex(0, height + dist*j );
        for (let x = 0; x < width; x++) {
            let nx = map(x, 0, width, 0, 10);
            let y = (height+ dist*j) * noise(nx);
            vertex(x, y);
        }
        vertex(width, height+ dist*j)
        endShape();
    }
}