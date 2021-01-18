// Based on Coding Train by Daniel Shiffman http://patreon.com/codingtrain
// modified color, rules, trees

var angle;
var axiom = "F";
var sentence = axiom;
var len = 100;
var counter = 0;
var colors = ["#E6A0C4", "#C6CDF7", "#D8A499", "#7294D4"];
//["#ff577f", "#ff884b", "#ffc764", "#cdfffc", "#662E9B"];
var size = 0.5;
var angle;
var rules = [];
var ntree = 50;
var interval = 380 / ntree;
var scale;

var randn_bm = () => {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

rules[0] = {
  // a: "F",
  // b: "FF+[+F-F-F]-[-F+F+F]",
  a: "F",
  b: "F[+F]F[-F][F]",
};

function generate() {
  len *= size;
  counter += 1;

  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;

  if (counter < Math.floor(random(3, 6))) {
    generate();
    counter += 1;
  }
  return sentence;
}

function turtle(x, y, colors, sentence) {
  resetMatrix();
  push();
  translate(x, y);
  let strokeC = color(colors);
  strokeC.setAlpha(random(88, 128));
  if (y < 150) {
    scale = 0.2;
  } else if (y < 250) {
    scale = 0.6;
  } else {
    scale = random(0.4, 1);
  }
  stroke(strokeC);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len * scale);
      translate(0, -len * scale);
    } else if (current == "+") {
      rotate(angle + randn_bm() * 0.2);
    } else if (current == "-") {
      rotate(-angle + randn_bm() * 0.2);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
  pop();
}

function setup() {
  createCanvas(400, 400);
  angle = radians(25);

  sentence = generate();
}

function draw() {
  noLoop();
  background("ghostwhite");
  for (let j = 1; j < ntree; j++) {
    turtle(
      j * interval + (random() * interval) / 2,
      random(100, 380),
      colors[j % colors.length],
      sentence
    );
  }
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}
