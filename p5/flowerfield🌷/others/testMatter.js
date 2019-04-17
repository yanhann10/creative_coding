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
var Fruites = [];



function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options1 = {
    isStatic: true,
    angle:-0.2
  }
  var options2 = {
    isStatic: true,
    angle:0.2
  }
  ground1 = Bodies.rectangle(100, height-20, width-10, 10, options1);
  ground2 = Bodies.rectangle(300, height-20, width-10, 10, options2);
  //ground1 = new Ground(200, 300,400,30,0.1);
  World.add(world, [ground1,ground2]);
}

function mousePressed() {
  Fruites.push(new Fruit(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < Fruites.length; i++) {
    Fruites[i].display();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  push();
  translate(ground1.position.x, ground1.position.y);
  rotate(-0.2)
  rect(0, 0, width/2, 10);
  pop();
  push();
  translate(ground2.position.x, ground2.position.y);
  rotate(0.2)
  rect(0, 0, width/2, 10);
  pop();

}
