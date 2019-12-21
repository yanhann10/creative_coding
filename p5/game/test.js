var spr;
var xdirection = 1;
var nrow = 3,
  ncol = 5;

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
  var edge = false;
  for (var i = 0; i < sprGp.length; i++) {
    var s = sprGp[i];
    s.position.x += 1 * xdirection;
    if (s.position.x > width || s.position.x < 0) {
      xdirection *= -1;
      edge = true;
    }
  }
  console.log(edge);
  if (edge) {
    for (var i = 0; i < sprGp.length; i++) {
      var s = sprGp[i];
      s.position.y += 5;
    }
  }
  drawSprites();
}
