function setup() {
    var canvas = createCanvas(windowWidth, 200);
    canvas.parent('sketchdiv');
}

function draw() {
  background(255);
  strokeWeight(2);
  angleMode(DEGREES);
  
  translate(width/2, height/2)
  scale(.75);
  drawBag();
}

function windowResized() {
	resizeCanvas(windowWidth, 200);
  }

function drawBag(){
  
  //handle
  arc(0, -50, 100, 150, 180, 360);
  arc(0, -45, 90, 150, 180, 360);
  
  //jagged edge
  push()
  translate(-70, -50)
  for (i=0; i < 15; i++){
    line(0, 0, -5, 5);
    line(0, 0, 5, 5);
    translate(10, 0)
  }
  pop();
  
  line(-75, -45, -80, 100);//left edge of bag
  line(75, -45, 80, 100);//right edge of bag
  line(-80, 100, 80, 100);//bottom edge

  //bottom left corner crease
  line(-72, 20, -75, 95);
  line(-75, 95, -50, 95);
  
  //top right crease
  line(70, -30, 73, 50)
  
  
  
  
  
  
  
  
  
}