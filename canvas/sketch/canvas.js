//based on Mattdesl's Creative Coding with Canvas & WebGL class
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var perlin = new toxi.math.noise.PerlinNoise();
var c = canvas.getContext("2d");
const nColor = 5;
const palette = ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"].slice(
  0,
  nColor
);

//set up data structure
const createGrid = (n, r) => {
  const points = [];
  const margin = 100;
  const interval = (canvas.width - 2 * margin) / (n - 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const u = 100 + i * interval;
      const v = 100 + j * interval;
      const radius = Math.abs(randn_bm() * r);
      points.push({
        color: palette[Math.floor(Math.random() * 5)],
        position: [u, v],
        radius: radius,
        rotation: perlin.noise(u, v),
      });
    }
  }
  return points;
};

//helper funcs
const lerp = (a, b, p) => {
  return (b - a) * p + a;
};

//gaussian random
const randn_bm = () => {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};

const points = createGrid(30, 30).filter(() => Math.random() > 0.5);

//sketch
points.forEach((data) => {
  const { color, position, radius, rotation } = data;

  const [u, v] = position;
  c.fillStyle = color;
  c.font = `${radius}px "Helvetica"`;
  c.save();
  c.translate(u, v);
  c.rotate(rotation);
  c.fillText("%", 0, 0);
  c.restore();
});
