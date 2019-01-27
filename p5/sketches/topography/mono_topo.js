let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
  background(255);
}

function draw() {

 let distance=0
  wave(distance);
  wave(10);
  wave(20);
}


function wave(distance){
  fill(255);

  beginShape();
  let xoff = 0; 
  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 6) {
    // Calculate a y value according to noise, map to
    let y = map(noise(xoff), 0, 1, 100,200) + 
    //add a minor sin term for some waves
      map(sin(x),-1,1,0,20);
    // Set the vertex
    vertex(x, y+distance);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}