//run browser-sync start --server --files "*" in the folder after npm install browser-sync
var cannon, cannonball, invaders, fortresses, bullet;
var bullets = [];
var cannonballs = [];
var maxSpeed = 6;
var bulletFreq = 40;
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
var nrow = 4;
var ncol = 10;
var lvl = 0;
var score = 0;
var textFill = 0;

function setup() {
  createCanvas(800, 400);
  ///////////////////////////////////////////////////////////////////////////
  ////////////////////////////// set up cannon    ////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  cannon = createSprite(width / 2, height - 50, 40, 10);
  cannon.shapeColor = color(0, 0, 0);
  cannon.immovable = true;

  ///////////////////////////////////////////////////////////////////////////
  ////////////////////////////// set up fortress ////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  fortresses = new Group();
  for (var r = 0; r < nrow; r++) {
    for (var c = 0; c < ncol; c++) {
      fortress = createSprite(
        100 + 4 * c + 180 * r,
        300 - 5 * Math.sin((c * Math.PI) / (ncol - 1)),
        3,
        10 + 10 * Math.sin((c * Math.PI) / (ncol - 1))
      );
      fortress.shapeColor = color(0, 0, 0);
      fortress.immovable = true;
      fortresses.add(fortress);
    }
  }

  ///////////////////////////////////////////////////////////////////////////
  ////////////////////////////// set up invaders ////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

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
  background(255, 180, 0);
  cannon.position.x = constrain(mouseX, border, width - border);
  //set cannon in motion
  cannon.setSpeed(xdirection, xdirection);
  //set invaders in motion
  var edge = false;
  for (var i = 0; i < invaders.length; i++) {
    var s = invaders[i];
    s.position.x += 1 * invaderDirection;
    ///////////////////////////////////////////////////////////////////////////
    //////////////////////////random invaders fire bullets ////////////////////
    ///////////////////////////////////////////////////////////////////////////
    var j = Math.floor(random(0, invaders.length));
    var k = Math.floor(random(0, invaders.length));

    if (frameCount % bulletFreq === 0 && (i == j || i == k)) {
      var bullet = createSprite(
        invaders[j].position.x,
        invaders[j].position.y,
        6,
        6
      );
      bullet.shapeColor = color(random(0, 255), random(100, 200), 255);
      bullets.push(bullet);
      bullet.setSpeed(5, 90);
    }

    //invaders gradually move towards the player
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

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].bounce(cannon, cannonHit);
    bullets[i].bounce(fortresses, fortressErode);
    if (bullets[i].position.y > 500) {
      bullets.splice(0, 1);
    }
  }

  ///////////////////////////////////////////////////////////////////////////
  //////////////////////////cannon fires cannonballs     ////////////////////
  ///////////////////////////////////////////////////////////////////////////

  for (var i = 0; i < cannonballs.length; i++) {
    cannonballs[i].maxSpeed = maxSpeed;
    cannonballs[i].setSpeed(maxSpeed, -90);
    cannonballs[i].bounce(invaders, invaderHit);
    cannonballs[i].bounce(fortresses, fortressHit);
  }

  ///////////////////////////////////////////////////////////////////////////
  /////////////////////  adjust difficulty of the gam////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  if (bulletFreq > 2 && frameCount % 100 == 0) {
    var scale = Math.floor(score / 10);
    bulletFreq -= 2 * scale;
  }
  if (score < 10 && frameCount % 100 == 0) {
    bulletFreq += 2;
  }
  ///////////////////////////////////////////////////////////////////////////
  //////////////////////////score of the game ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  showScore();
  drawSprites();
}

function showScore() {
  textSize(28);
  fill(0);
  if (score >= 0 && invaders.length > 0) {
    text("Score: " + str(score), width - 150, 50);
  }

  if (score < 0) {
    text("Bye 💨", width - 150, 50);
  }

  if (invaders.length === 0) {
    text("Winning 👍", width - 150, 50);
  }
}

///////////////////////////////////////////////////////////////////////////
//////////////////////////handle collisons ///////////////////////////////
///////////////////////////////////////////////////////////////////////////
function invaderHit(cannonball, invader) {
  invader.remove();
  cannonball.remove();
  score += 1;
}

function fortressHit(cannonball, fortress) {
  cannonball.remove();

  if (fortress.height > 2) {
    fortress.position.y -= 1;
    fortress.height -= 2;
  }
}

function fortressErode(bullet, fortress) {
  bullet.remove();
  if (fortress.height > 2) {
    fortress.position.y += 1;
    fortress.height -= 2;
  }
}

function cannonHit(bullet) {
  bullet.remove();
  score -= 1;
  textFill = 255;
}

///////////////////////////////////////////////////////////////////////////
//////////////////////////mouse actions ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function mouseClicked() {
  fireCannonBall();
}

function fireCannonBall() {
  var cannonball = createSprite(cannon.position.x, height - 50, 6, 6);
  cannonball.shapeColor = color(255, 255, 255);
  cannonballs.push(cannonball);
  cannonballs.depth = 0;
}
