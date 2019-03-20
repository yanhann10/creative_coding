//based on this news story https://www.nytimes.com/2019/03/08/world/europe/uk-royal-family-workload.html
let mgr;

function setup() {
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene(Animation1);
    mgr.addScene(Animation2);
    mgr.addScene(Animation3);

    mgr.showNextScene();
}

function draw() {
    mgr.draw();
}

function mousePressed() {
    mgr.mousePressed();
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================

function Animation1() {
    let textX;
    let textY;

    this.enter = function () {
        textX = 10;
        textY = 0;

        background("blue");
        textAlign(CENTER);
        textFont('Mukta Mahee');
        fill("white");
        textSize(62);
        text("The Events They Attended", width / 2, height / 2 - 80);
        textSize(30);
        text("Counting British Royal Family's Workload\n", width / 2, height / 2);
        textSize(14);
        text("... click to continue.\n\n", width / 2, height / 2 + 60);
    }

    this.keyPressed = function () {
        text(keyCode, textX, textY += 10);
        if (textY > height) {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function () {
        this.sceneManager.showNextScene();
    }
}


function Animation2() {
    
        let pal = ['#F3C844', '#EC6959', '#C24488',
            '#7B7EBF', '#4EA1B0', '#50BE8D', '#9ECA7D'
        ];
        let label = ['visits','banquets','meetings','overseas trips']
        let pseudoR = [30, 20, 50, 40];
        
    this.draw = function () {
        background("white");
        let r = frameCount;
        
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

    this.mousePressed = function () {
        this.sceneManager.showNextScene();
    }
}


// When defining scenes, you can also 
// put the setup, draw, etc. methods on prototype
function Animation3() {
    let mybaubleSystem = new BaubleSystem(4,80,'fan');

    this.draw = function () {
        background("white");
        translate(windowWidth/2, windowHeight/2-50);
        mybaubleSystem.run();
    }
    this.mousePressed = function () {
        this.sceneManager.showNextScene();
    }
}