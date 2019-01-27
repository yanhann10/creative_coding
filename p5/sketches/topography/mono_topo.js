let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
  background(255);
}

function draw() {
  background(255);
  let doff=0;
  
  for (i=0; i<10; i++) {
    //color in different shade
    fill(0,0,214-16*i);
    //make the distance random  
    wave(map(noise(doff),0,1,6,30)*i);
    doff+=0.1;
  }
}


function wave(distance){
  beginShape();
  let xoff = 0; 
  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 6) {
    // Calculate a y value according to noise, map to
    let y = map(noise(xoff,yoff), 0, 1, 100,200) + 
    //add a minor sin term for some waves
      map(sin(x),-1,1,0,20);
    // Set the vertex
    vertex(x, y+distance);
    // Increment x dimension for noise
    xoff += 0.05;
    }
  // increment y dimension for noise
  yoff += 0.002;
  
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}