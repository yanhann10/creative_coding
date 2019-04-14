// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

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

/*-----------------------------------------*/

function preload() {
  table = loadTable("data/df_tsne_output.csv", "header");
  img = loadImage("assets/tree2.png")
}


function setup() {
  createCanvas(800, 660);

  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 10, options);

  World.add(world, ground);
}



function draw() {
  background(255);
  imageMode(CENTER);
  image(img, windowWidth / 2, windowHeight / 2, 800, 660);

  //fruit
  Engine.update(engine);

  for (var i = 0; i < fruits.length; i++) {
    fruits[i].display();
  }

  if (frameCount % 60 == 0) {
    xpos = random(600)
    ypos = random(600)
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
  rotate(PI / 3.0);
  rect(ground.position.x + 100, ground.position.y, width / 2, 10);

}

//to-do:
//fix repel
//tilt the ground
//add text 
//sustain the fruit before the fall