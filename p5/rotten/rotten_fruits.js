// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var fruits = [];

var ground;


let xpos_arr = [];
let ypos_arr = [];
let txt_arr = [];
let counter = 0
let buffer = 50;

//PRELOAD IMAGE AND DATA////////////////////////////////////////////////////////////////
function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree2.png")
}


function setup() {
  createCanvas(800, 680);
  loadData();
  //SET UP PHYSICS ENGIN//////////////////////////////////////////////////////////////////
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);


  //SET UP THE GROUND//////////////////////////////////////////////////////////////////
  var options1 = {
    isStatic: true,
    angle: -0.15
  }
  var options2 = {
    isStatic: true,
    angle: 0.15
  }
  ground1 = Bodies.rectangle(200, height - 10, width / 1.9, 10, options1);
  ground2 = Bodies.rectangle(600, height - 10, width / 1.9, 10, options2);
  World.add(world, [ground1, ground2]);
}



function draw() {
  background(255);

  imageMode(CENTER);
  image(img, windowWidth / 3.2, windowHeight / 2.5, 700, 580);

  //fruit
  Engine.update(engine);

  for (var i = 0; i < fruits.length; i++) {
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
    if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
      collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
      var a = new Fruit(xpos, ypos, random(15, 24), txt, 204, 255);
      fruits.push(a);
    }
    counter += 1
  }


  if (frameCount % 500 == 0 | frameCount % 300 == 0) {
    rand_num = int(random(0, fruits.length - 1));

    for (var i = 0; i < fruits.length; i++) {
      fruits.splice(rand_num, 1);
    }
  }

  //ground in the shape of a small hill so fruits don't pile up

  // rectMode(CENTER);
  // push();
  // translate(ground1.position.x, ground1.position.y);
  // rotate(-0.2)
  // rect(0, 0, width/1.9, 10);
  // pop();
  // push();
  // translate(ground2.position.x, ground2.position.y);
  // rotate(0.2)
  // rect(0, 0, width/1.9, 10);
  // pop();

}

//DATA//////////////////////////////////////////////////////////////////
function loadData() {
  for (let i = 0; i < table.getRowCount() / 10; i++) {
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
  return collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
    collidePointRect(xpos, ypos, 380, 260, 80, 300) === false
}

//to-do:
//fix dynamic position of the tree
//darken the fruit