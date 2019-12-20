//run bnrower-sync start --server --files "*" in the folder after npm install bnrower-sync
var cannon, cannonball, wallTop, wallBottom, wallLeft, wallRight;
var borders;
var maxSpeed = 6;
var WALL_THICKNESS = 30;
var border_W = 40;
var border_H = 20;
var border_MARGIN = 8;
var nrow = 3;
var ncol = 10;

function setup() {
  createCanvas(800, 400);
  invaderImage = loadImage("assets/invader2.png");
  cannon = createSprite(width / 2, height - 50, 100, 10);
  cannon.immovable = true;

  wallTop = createSprite(
    width / 2,
    -WALL_THICKNESS / 2,
    width + WALL_THICKNESS * 2,
    WALL_THICKNESS
  );
  wallTop.immovable = true;

  wallBottom = createSprite(
    width / 2,
    height + WALL_THICKNESS / 2,
    width + WALL_THICKNESS * 2,
    WALL_THICKNESS
  );
  wallBottom.immovable = true;

  wallLeft = createSprite(
    -WALL_THICKNESS / 2,
    height / 2,
    WALL_THICKNESS,
    height
  );
  wallLeft.immovable = true;

  wallRight = createSprite(
    width + WALL_THICKNESS / 2,
    height / 2,
    WALL_THICKNESS,
    height
  );
  wallRight.immovable = true;

  borders = new Group();

  var offsetX = width / 2 - ((ncol - 1) * (border_MARGIN + border_W)) / 2;
  var offsetY = 80;

  for (var r = 0; r < nrow; r++)
    for (var c = 0; c < ncol; c++) {
      var border = createSprite(
        offsetX + c * (border_W + border_MARGIN),
        offsetY + r * (border_H + border_MARGIN),
        border_W,
        border_H
      );
      border.addSpeed(0.5, 0);
      border.bounce(wallRight);
      border.addImage(invaderImage);
      border.shapeColor = color(255, 255, 255);
      borders.add(border);
      border.immovable = true;
      console.log(border.getBoundingBox().center.x > 500);
    }

  //the easiest way to avoid pesky multiple collision is to
  //have the cannonball bigger than the borders
  cannonball = createSprite(width / 2, height - 200, 5, 5);
  cannonball.maxSpeed = maxSpeed;
  cannon.shapeColor = cannonball.shapeColor = color(255, 255, 255);
}

function draw() {
  background(247, 134, 131);

  cannon.position.x = constrain(
    mouseX,
    cannon.width / 2,
    width - cannon.width / 2
  );

  cannonball.bounce(wallTop);
  cannonball.bounce(wallBottom);
  cannonball.bounce(wallLeft);
  cannonball.bounce(wallRight);

  if (cannonball.bounce(cannon)) {
    var swing = (cannonball.position.x - cannon.position.x) / 3;
    cannonball.setSpeed(maxSpeed, cannonball.getDirection() + swing);
  }

  cannonball.bounce(borders, borderHit);

  drawSprites();
}

function mousePressed() {
  if (cannonball.velocity.x == 0 && cannonball.velocity.y == 0)
    cannonball.setSpeed(maxSpeed, -90);
}

function borderHit(cannonball, border) {
  border.remove();
  cannonball.remove();
}
