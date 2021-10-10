/////////////////////////////param///////////////////////////////////

var numShapes = 9;
var radius = 20;
var bigRadius;
var bgColor = ["#fff", "#000"];
var fillColor = ["green", "system2"];

let fg_colors_dct = {
  green: ["#205374", "#27a09e", "#30ce88	", "#7de393	", "#d3f5ee"],
  system2: ["#e31f4f", "#f0ac3f", "#18acab", "#26265a", "#ea7d81", "#dcd9d0"],
};
// gui
var visible = true;
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bigRadius = height / 5.0;

  gui = createGui("param").setPosition(width - 220, 20);
  sliderRange(0, 100, 1);
  gui.addGlobals("numShapes");
  sliderRange(0, 50, 1);
  gui.addGlobals("radius", "fillColor", "bgColor");
}

function draw() {
  // clear to reset param
  clear();
  console.log(bgColor);
  background(bgColor);

  noLoop();
  let colors = fg_colors_dct[fillColor];
  let n_colors = colors.length;

  // draw primitives
  for (var i = 0; i < numShapes; i++) {
    var angle = (TWO_PI / numShapes) * i;
    var x = width / 2 + cos(angle) * bigRadius;
    var y = height / 2 + sin(angle) * bigRadius;
    var d = 2 * radius;
    noStroke();
    fill(colors[i % n_colors]);

    circle(x, y, d);
  }
}

/////////////////////////////interaction///////////////////////////////////
function keyPressed() {
  switch (key) {
    case "p":
      visible = !visible;
      if (visible) {
        gui.show();
      } else {
        gui.hide();
      }
      break;
  }
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("sketch_" + fillColor + bgColor, "png");
  }
}
