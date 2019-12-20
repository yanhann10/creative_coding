var spr;
var xdirection = 1;
var nrow = 3,
  ncol = 5;
var nbounce = 0;
function setup() {
  createCanvas(400, 400);
  sprGp = new Group();

  for (var r = 0; r < nrow; r++) {
    for (var c = 0; c < ncol; c++) {
      spr = createSprite(80 + 60 * r, height / 2 - 30 * c, 20, 20);
      sprGp.add(spr);
    }
  }
}
function draw() {
  background(50);

  for (var i = 0; i < sprGp.length; i++) {
    var s = sprGp[i];
    s.position.x += 1 * xdirection;
    if (s.position.x > width || s.position.x < 0) {
      xdirection *= -1;
      nbounce += 1;
      console.log(nbounce);
    }
  }

  drawSprites();
}
