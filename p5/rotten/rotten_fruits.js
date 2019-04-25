let fruits = [];
let ground;

let imgWidth = 660;
let imgHeight = 600;

let xpos_arr = [];
let ypos_arr = [];
let txt_arr = [];
let severity_arr = [];
let counter = 0
let buffer = 50;

//PRELOAD IMAGE AND DATA////////////////////////////////////////////////////////////////
function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
  //SET UP PHYSICS ENGIN//////////////////////////////////////////////////////////////////
  engine = Engine.create();
  world = engine.world;


  //SET UP THE GROUND//////////////////////////////////////////////////////////////////
  let options1 = {
    isStatic: true,
    angle: -0.15
  }
  let options2 = {
    isStatic: true,
    angle: 0.15
  }
  ground1 = Bodies.rectangle(windowWidth / 2 - imgWidth / 2, windowHeight - 100, imgWidth, 10, options1);
  ground2 = Bodies.rectangle(windowWidth / 2 + imgWidth / 2, windowHeight - 100, imgWidth, 10, options2);
  World.add(world, [ground1, ground2]);
}



function draw() {

  background(255);
  //SET UP STATIC IMG//////////////////////////////////////////////////////////////////

  //draw the ground
  if (frameCount > 0) { //change to 500 time delay for video recording purposes
    visualGround();


    //draw tree
    imageMode(CENTER);
    image(img, windowWidth / 2 - 10, windowHeight / 2.5, imgWidth, imgHeight);




    //SET UP ANIMATED IMG//////////////////////////////////////////////////////////////////
    //draw fruit
    Engine.update(engine);

    for (let i = 0; i < fruits.length; i++) {

      fruits[i].display();
      fruits[i].darken();
      fruits[i].showText();
      fruits[i].alpha -= 2;
    }

    if (frameCount % 60 == 0) {
      Engine.update(engine);
      xpos = xpos_arr[counter];
      ypos = ypos_arr[counter];
      txt = txt_arr[counter];
      severity = severity_arr[counter];



      //SHOW FRUIT ONLY WITHIN TREE AREA////////////////////////////////////////
      if (detectCollision(xpos, ypos)) {
        let a = new Fruit(xpos, ypos, 14, txt, 170, 255, severity);
        fruits.push(a);
      }
      counter += 1
    }


    //Sloped ground so not all fruits pile up
    //physicalGround();

  }
}

//DATA//////////////////////////////////////////////////////////////////
function loadData() {
  for (let i = 0; i < table.getRowCount(); i++) {
    row = table.getRow(i);
    xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
    ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);
    txt = row.get('txt');
    severity = row.get('severe_toxic');

    //on the branch but not on the trunk v0
    if (detectCollision(xpos, ypos)) {
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      txt_arr.push(txt)
      severity_arr.push(severity)
    }
  }
}

function detectCollision(xpos, ypos) {
  return collidePointEllipse(xpos, ypos, windowWidth / 2, windowHeight / 2.5, imgWidth - 100, imgHeight / 1.8) === true &
    collidePointRect(xpos, ypos, windowWidth / 2, windowHeight / 2.2, 80, 300) === false
}

//visual components of the ground
function visualGround() {
  noStroke();
  fill(211, 152, 95);
  ellipse(windowWidth / 2, windowHeight + 500, windowWidth + 800, windowHeight + imgHeight);

}

//physical components of the ground
function physicalGround() {
  rectMode(CENTER);
  push();
  fill(0)
  translate(ground1.position.x, ground1.position.y);
  rotate(-0.2)
  rect(0, 0, imgWidth, 10);
  pop();

  push();
  rectMode(CENTER);
  fill(0)
  translate(ground2.position.x, ground2.position.y);
  rotate(0.2)
  rect(0, 0, imgWidth, 10);
  pop();
}


function drawLeaves(x, y, rot, scl) {
  push();
  beginShape();
  translate(x, y);
  rotate(rot)
  fill(92, 166, 28, 200);
  bezier(0, 0, -7, -15, -7, -15, 0, -25);
  bezier(0, 0, 7, -15, 7, -15, 0, -25);
  pop();
  endShape();
}
//tree image source: http://clipart-library.com/images-of-tree.html