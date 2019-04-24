let fruits = [];
let ground;

let imgWidth = 660;
let imgHeight = 600;

let xpos_arr = [];
let ypos_arr = [];
let txt_arr = [];
let counter = 0
let buffer = 50;

//PRELOAD IMAGE AND DATA////////////////////////////////////////////////////////////////
function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree9.png")
  //imgApple = loadImage("assets/apple1.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
  //SET UP PHYSICS ENGIN//////////////////////////////////////////////////////////////////
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);


  //SET UP THE GROUND//////////////////////////////////////////////////////////////////
  let options1 = {
    isStatic: true,
    angle: -0.15
  }
  let options2 = {
    isStatic: true,
    angle: 0.15
  }
  ground1 = Bodies.rectangle(windowWidth / 4, windowHeight - 50, windowWidth / 1.9, 10, options1);
  ground2 = Bodies.rectangle(3 * windowWidth / 4, windowHeight - 50, windowWidth / 1.9, 10, options2);
  World.add(world, [ground1, ground2]);
}



function draw() {

  background(255);
  //SET UP STATIC IMG//////////////////////////////////////////////////////////////////
  //draw ground
  noStroke();
  fill(211, 152, 95);
  ellipse(windowWidth / 2, windowHeight + 600, windowWidth + 800, 1400);

  //draw tree
  imageMode(CENTER);
  image(img, windowWidth / 2 - 10, windowHeight / 2.5, imgWidth, imgHeight);

  //SET UP ANIMATED IMG//////////////////////////////////////////////////////////////////
  //draw fruit
  Engine.update(engine);

  for (let i = 0; i < fruits.length; i++) {
    let rot = random(-0.3, 0.3)

    fruits[i].display();
    fruits[i].darken();
    fruits[i].showText();
    fruits[i].alpha--;
  }

  if (frameCount % 60 == 0) {
    Engine.update(engine);
    xpos = xpos_arr[counter];
    ypos = ypos_arr[counter];
    txt = txt_arr[counter];



    //SHOW FRUIT ONLY WITHIN TREE AREA////////////////////////////////////////
    if (detectCollision(xpos, ypos)) {
      let a = new Fruit(xpos, ypos, random(15, 24), txt, 170, 255, random(-0.5, 0.5));
      fruits.push(a);
    }
    counter += 1
  }


  // if (frameCount % 500 == 0 | frameCount % 300 == 0) {
  //   rand_num = int(random(0, fruits.length - 1));

  //   for (let i = 0; i < fruits.length; i++) {
  //     fruits.splice(rand_num, 1);
  //   }
  //}


  //ground in the shape of a small hill so fruits don't pile up
  // rectMode(LEFT);
  // push();
  // translate(ground1.position.x, ground1.position.y);
  // rotate(-0.2)
  // rect(0, 0, width / 4, 10);
  // pop();

  // push();
  // rectMode(LEFT);
  // translate(ground2.position.x, ground2.position.y);
  // rotate(0.2)
  // rect(0, 0, width / 4, 10);
  // pop();

}

//DATA//////////////////////////////////////////////////////////////////
function loadData() {
  for (let i = 0; i < table.getRowCount(); i++) {
    row = table.getRow(i);
    xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
    ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);
    txt = row.get('txt');

    //on the branch but not on the trunk v0
    if (detectCollision(xpos, ypos)) {
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      txt_arr.push(txt)
      //print('new ball', xpos)
    }
  }
}

function detectCollision(xpos, ypos) {
  return collidePointEllipse(xpos, ypos, windowWidth / 2, windowHeight / 2.5, imgWidth - 100, imgHeight / 1.8) === true &
    collidePointRect(xpos, ypos, windowWidth / 2, windowHeight / 2.2, 80, 300) === false
}




//to-do:
//rotate the apple
//raw video
//instantiate fruit before makign it fall
//make leaves dangling
//refinethe ground curvature
//refine video