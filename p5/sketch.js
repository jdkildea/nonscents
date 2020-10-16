var font;

function preload() {
  font = loadFont('Inconsolata-Black.ttf');
}

function setup() {
  createCanvas(800, 300);
  background(51);
  textFont(font);
  textSize(128);
  fill(255);
  noStroke();
  text('nonscents', 30, 200);
}

function draw() {

}
