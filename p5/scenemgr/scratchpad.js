function setup() {
    createCanvas(windowWidth, windowHeight);
    mybaubleSystem = new BaubleSystem(10, 120, 'radial');
}

function draw() {
    background("white");
    let r = frameCount;
    let pal = ['#F3C844', '#EC6959', '#C24488',
        '#7B7EBF', '#4EA1B0', '#50BE8D', '#9ECA7D'
    ];
    let label = ['visits','banquets','meetings','overseas trips']
    let pseudoR = [30, 20, 50, 40];
    translate(windowWidth / 2, windowHeight / 2 - 50);
    for (let i = 0; i < 4; i++) {
        
        rotate(radians(180 / 5));
        push();
        if (r < 10) {
            translate(-10 * r, 0);
        } else {
            translate(-100, 0);
        }
        fill(pal[i])
        ellipse(0, 0, pseudoR[i], pseudoR[i]);
        translate(30,20);
        
        text(label[i], 0, 0);
        pop();

    }
}