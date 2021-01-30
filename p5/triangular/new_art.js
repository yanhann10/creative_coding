//based on the triangular mesh tutorial from maxwellito https://generativeartistry.com/tutorials/triangular-mesh/
//modified shape, randomness, border etc

let dotLine;
let odd = true;

let dim;
let gap;
let lines = [];
let fil;

function setup() {
  dim = min(windowWidth, windowHeight) * 0.8;
  gap = dim / 66;

  createCanvas(dim, dim);
  strokeJoin(ROUND);
  createLines(800, 22);
}

function createLines(dim, interval) {
  lines = [];
  var gap = dim / interval;
  for (var y = gap / 2; y <= dim; y += gap) {
    odd = !odd;
    const line = [];
    for (var x = gap / 4; x <= dim; x += gap) {
      const xrand = (noise(x) * 0.4 * y) / 350 - 0.2;
      const yrand = (Math.random() * 1 * y) / 350 - 0.45;
      let gapy = gap * 1.5;
      line.push({
        x: x + xrand * gap + (odd ? gap / 2 : 0),

        y: y + yrand * gapy,
        opacity: map((xrand + yrand) / 2, -0.4, 0.4, 0, 1),
      });
    }
    lines.push(line);
  }
}

function draw() {
  clear();
  var blue = color(33, 142, 138);
  var purple = color(59, 5, 79);
  var red = color(225, 42, 98);
  var orange = color(255, 114, 0);
  var yellow = color(254, 181, 56);

  var pal = [purple, blue, red, orange, yellow];

  var triMesh = new Mesh(lines, pal);
  triMesh.show();
  noLoop();
}

class Mesh {
  constructor(lines, pal) {
    this.lines = lines;
    this.pal = pal;
  }

  _tri(p1, p2, p3) {
    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  }

  show() {
    for (var y = 0; y < this.lines.length - 1; y++) {
      odd = !odd;
      dotLine = [];
      var cols = [];
      for (var i = 0; i < this.lines[y].length; i++) {
        dotLine.push(odd ? this.lines[y][i] : this.lines[y + 1][i]);
        dotLine.push(odd ? this.lines[y + 1][i] : this.lines[y][i]);
      }
      for (var i = 0; i < dotLine.length - 2; i++) {
        stroke(255);
        strokeWeight(8);
        let ncolor = this.pal.length;
        let col =
          i % 2
            ? this.pal[Math.floor(random() * ncolor)]
            : random() < 0.1
            ? color(132, 133, 135) //grey
            : this.pal[Math.floor(random() * ncolor)];

        fill(col);
        this._tri(dotLine[i], dotLine[i + 1], dotLine[i + 2]);
      }
    }
  }
}

function keyPressed() {
  if (key == "s") saveCanvas("canvas.png");
}
