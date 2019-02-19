var song;

function preload() {
    song = loadSound('assets/a_taste_of_the_beautiful.mp3');
  }

function setup() {
  createCanvas(720, 200);
  song.loop();
  background(255,0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
