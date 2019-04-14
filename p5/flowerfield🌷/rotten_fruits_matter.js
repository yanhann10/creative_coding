// BASED on Daniel Shiffman's https://youtu.be/urR596FsU68

// module aliases
let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let ground;

let fruits = [];
let xpos_arr = []
let ypos_arr = []
let counter = 0
let buffer = 50;

let width=800;

//PRELOAD IMG & DATA FILES////////////////////////////////////////////////////////////

function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree2.png")
}


function setup() {
  createCanvas(800, 760);

//SET UP PHYSICS ENGIN//////////////////////////////////////////////////////////////////
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  let options1 = {
    isStatic: true,
    angle: -0.2
  }
  let options2 = {
    isStatic: true,
    angle: 0.01
  }
  ground1 = Bodies.rectangle(0, 760, 1800, 10, options1);
  //ground2 = Bodies.rectangle(400, height, width/2, 10, options2);

  World.add(world, [ground1]);
}



function draw() {
  background(255);

  //loadData();
  //tree
  imageMode(CENTER);
  image(img, windowWidth / 3.5, windowHeight /2.5, 800, 660);

  //fruit
  Engine.update(engine);

  for (let i = 0; i < fruits.length; i++) {
    fruits[i].display();
    fruits[i].showText();
  }

  if (frameCount % 60 == 0) {
    xpos = random(600)
    ypos = random(600)
    if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
      collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
      let a = new Fruit(xpos, ypos, 18);
      fruits.push(a);
    }
    counter += 1
  }

  //ground
  noStroke();
  fill(0)
  rect(ground1.position.x, ground1.position.y, 800, 10);
  //rect(ground2.position.x, ground2.position.y, width / 2, 10);

}

//DATA//////////////////////////////////////////////////////////////////

// function loadData() {
//   for (let i = 0; i < table.getRowCount() / 10; i++) {
//     row = table.getRow(i);
//     xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
//     ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);

//     //on the branch but not on the trunk v0
//     if (collidePointEllipse(xpos, ypos, 400, 300, 700, 500) === true &
//       collidePointRect(xpos, ypos, 380, 260, 80, 300) === false) {
//       xpos_arr.push(xpos)
//       ypos_arr.push(ypos)
//       print('new ball',xpos)
//     }
//   }
// }

//to-do:
//fix repel
//2-sided tilt
//add text 
//sustain the fruit before the fall
//project data to tree area