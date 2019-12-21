//run browser-sync start --server --files "*" in the folder after npm install browser-sync
var cannon, cannonball, invaders, fortresses, bullet;
var cannonballs = [];
var maxSpeed = 6;
var horizontalSpeed = 0.8;
var invaderDirection = 1;
var nTouchEdge = 0;
var xdirection = 0;
var ydirection = 0;
var offsetX = 160;
var offsetY = 80;
var invader_W = 40;
var invader_H = 20;
var invader_MARGIN = 8;
var border = 50;
var nrow = 3;
var ncol = 10;
var lvl = 0;

function setup() {
  createCanvas(800, 400);
  //set up player - cannon
  cannon = createSprite(width / 2, height - 50, 40, 10);
  cannon.shapeColor = color(0, 0, 0);
  //set up fortress
  fortresses = new Group();
  for (var r = 0; r < nrow; r++) {
    for (var c = 0; c < ncol; c++) {
      fortress = createSprite(
        100 + 4 * c + 280 * r,
        300 - 5 * Math.sin((c * Math.PI) / (ncol - 1)),
        3,
        10 + 10 * Math.sin((c * Math.PI) / (ncol - 1))
      );
      fortress.shapeColor = color(0, 0, 0);
      fortresses.add(fortress);
    }
  }

  //set up invaders
  invaderImage = loadImage("assets/invader2.png");
  invaders = new Group();

  for (var r = 0; r < nrow; r++) {
    for (var c = 0; c < ncol; c++) {
      var invader = createSprite(
        offsetX + c * (invader_W + invader_MARGIN),
        offsetY + r * (invader_H + invader_MARGIN),
        invader_W,
        invader_H
      );
      invader.addImage(invaderImage);
      invaders.add(invader);
    }
  }
}

function draw() {
  background(247, 134, 131);
  //set cannon in motion
  cannon.setSpeed(xdirection, xdirection);
  //set invaders in motion
  var edge = false;
  for (var i = 0; i < invaders.length; i++) {
    var s = invaders[i];
    s.position.x += 1 * invaderDirection;
    if (s.position.x > width - border || s.position.x < border) {
      invaderDirection *= -1;
      edge = true;
    }
    if (edge) {
      for (var i = 0; i < invaders.length; i++) {
        var s = invaders[i];
        s.position.y += 0.05;
      }
    }
  }

  for (var i = 0; i < cannonballs.length; i++) {
    cannonballs[i].maxSpeed = maxSpeed;
    cannonballs[i].setSpeed(maxSpeed, -90);
    cannonballs[i].bounce(invaders, invaderHit);
    cannonballs[i].bounce(fortresses, fortressHit);
  }

  drawSprites();
}

//callback
function invaderHit(cannonball, invader) {
  invader.remove();
  cannonball.remove();
}

function fortressHit(cannonball, fortress) {
  cannonball.remove();
  fortress.remove();
}

// keyboard control for smooth movement of the cannon
function keyReleased() {
  xdirection = 0;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xdirection = -1;
  } else if (keyCode === RIGHT_ARROW) {
    xdirection = 1;
  } else if (key === " ") {
    var cannonball = createSprite(cannon.position.x, height - 50, 6, 6);
    cannonball.shapeColor = color(255, 255, 255);
    cannonballs.push(cannonball);
    cannonballs.depth = 0;
  }
}
