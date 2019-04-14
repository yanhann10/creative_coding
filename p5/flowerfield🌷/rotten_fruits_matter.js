// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var fruits = [];

var ground;


let xpos_arr = []
let ypos_arr = []
let counter = 0
let buffer = 50;

/*-----------------------------------------*/

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

  var options = {
    isStatic: true,
    angle: -0.1
  }
  ground = Bodies.rectangle(200, 660, width, 10, options);
  World.add(world, ground);
}



function draw() {
  background(255);

  imageMode(CENTER);
  image(img, windowWidth / 3.5, windowHeight / 2, 660, 600);

  //fruit
  Engine.update(engine);

  for (var i = 0; i < fruits.length; i++) {
    fruits[i].display();
  }

  if (frameCount % 60 == 0) {
    xpos = xpos_arr[counter] 
    ypos = ypos_arr[counter]
    if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
      collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
      var a = new Fruit(xpos, ypos, 18);
      fruits.push(a);
    }
    counter += 1
  }

  //ground
  noStroke(255);
  fill(170);
  rect(ground.position.x + 200, ground.position.y, width, 10);

}

//DATA//////////////////////////////////////////////////////////////////
function loadData() {
  for (let i = 0; i < table.getRowCount() / 10; i++) {
    row = table.getRow(i);
    xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
    ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);

    //on the branch but not on the trunk v0
    if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
      collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      print('new ball', xpos)
    }
  }
}

//to-do:
//fix repel
//2-sided tilt
//add text 
//sustain the fruit before the fall
//project data to tree area