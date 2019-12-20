//run bnrower-sync start --server --files "*" in the folder after npm install bnrower-sync
var cannon, cannonball, invaders;
var cannonballs = [];
var maxSpeed = 6;
var horizontalSpeed = 0.8;
var invaderDirection = 1;
var nbounce = 0;
var xdirection = 0;
var ydirection = 0;
var invader_W = 40;
var invader_H = 20;
var invader_MARGIN = 8;
var border = 50;
var nrow = 3;
var ncol = 10;

function setup() {
  createCanvas(800, 400);
  invaderImage = loadImage("assets/invader2.png");
  cannon = new Cannon(width / 2, height - 50);
  invaders = new Group();

  var offsetX = 160;
  var offsetY = 80;

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
  //cannon is the player
  cannon.show();
  cannon.move();

  for (var i = 0; i < invaders.length; i++) {
    var s = invaders[i];
    s.position.x += 1 * invaderDirection;
    if (s.position.x > width - border || s.position.x < border) {
      invaderDirection *= -1;
      nbounce += 1;
    }
    if (nbounce % 2 === 0) {
      s.position.y += 0.05;
    } else {
      s.position.y += 0;
    }
  }

  var idx = floor(random(0, 9));
  if (frameCount % 120 == 0) {
    var bullet = createSprite(
      invaders[idx].position.x,
      invaders[idx].position.y,
      8,
      8
    );
    bullet.setSpeed(8, 90);
  }

  for (var i = 0; i < cannonballs.length; i++) {
    cannonballs[i].maxSpeed = maxSpeed;
    cannonballs[i].shapeColor = color(255, 255, 255);
    cannonballs[i].setSpeed(maxSpeed, -90);
    cannonballs[i].bounce(invaders, invaderHit);
  }

  drawSprites();
}

//callback
function invaderHit(cannonball, invader) {
  invader.remove();
  cannonball.remove();
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
    var cannonball = createSprite(cannon.x + invader_W / 2, height - 50, 8, 8);
    cannonballs.push(cannonball);
    cannonballs.depth = 0;
  }
}

// Player
class Cannon {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }
  show() {
    noStroke();
    rect(this.x, this.y, 40, 20);
  }
  move() {
    this.x += 5 * xdirection;
  }
}
