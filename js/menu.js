let x1 = -72;
let x2 = -65;

function setup() {
  var canvas = createCanvas(windowWidth, 200);
  canvas.parent('sketchdiv');
}

function draw() {
  background(255);
  angleMode(DEGREES);
  
  strokeWeight(2);
  
  push();
  translate(width/4-20, height/2+40);
  drawBread();
  pop();
  
  push();
  translate(width/2, height/2);
  drawMuffin();
  pop();
  
  push();
  translate(width*.8, height/2);
  drawPastry();
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, 200);
}

function drawBread() {
  arc(-39, -100, 80, 50, 170, 350);//left bump
  arc(39, -100, 80, 50, 190, 10);//right bump
  line(-77, -92, -75, 30);//left edge
  arc(-70, 30, 10, 10, 90, 180)//bottom left corner
  line(-70, 35, 70, 35);//bottom edge
  line(77, -92, 75, 30);//right edge
  arc(70, 30, 10, 10, 0, 90)//bottom left corner
  
  scale(.92);
  
  push()
  translate(0, -5);
  arc(-43, -100, 70, 50, 170, 330);//left bump
  arc(43, -100, 70, 50, 240, 10);//right bump
  line(-77, -92, -75, -20);//left edge
  line(-75, -10, -75, 30);//left edge
  arc(-70, 30, 10, 10, 90, 180)//bottom left corner
  line(-70, 35, 70, 35);//bottom edge
  arc(70, 30, 10, 10, 0, 90)//bottom right corner
  pop();
  
  line(77, -92, 75, 15);//right edge
  
}

function drawMuffin(){
  fill(255);  

  //outer edges
  arc(0, -30, 150, 70, 175, 5);//top
  line(-73, -22, -65, 50);//left edge of tin
  arc(-60, 50, 10, 10, 90, 180);//bottom left curve of tin
  line(-58, 55, 58, 55);//bottom edge of tin
  arc(60, 50, 10, 10, 0, 90);//bottom right curve of tin
  line(73,-22, 65, 50);//right edge of tin
  
  push();
  for (t=0; t < 19; t += 1){//draws creases on tin
    translate(7, .05);
    rotate(.6);
    line(x1, -19, x2, 56);
  }
  pop();
  
  //bottom of top
  fill(255);
  arc(0, -53, 300, 70, 23, 157);
  
  //speckles on muffin top
  point(-10, -50);
  point(10, -40);
  point(20, -45);
  point(-50, -30);
  point(55, -48);
  point(40, -30);
  point(-20, -25);
  point(-35, -45);
}

function drawPastry() {
  
  rotate(-20);
  
  noFill();
  
  //outer edges
  arc(0, -20, 300, 80, 200, 340);//top edge of danish
  arc(0, 20, 300, 80, 20, 160);//bottom edge of danish
  arc(-70, 0, 60, 130, 110, 250);//left edge of danish
  arc(70, 0, 60, 130, 290, 70);//left edge of danish
  
  //inner perforations
  push()
  rotate(20);
  arc(-60, 15, 50, 100, 290, 70);//left edge of perforation
  arc(-35, 15, 50, 100, 110, 250);//right edge of perforation
  pop();
  
  translate(50, 0);
  
  push()
  rotate(20);
  arc(-60, 15, 50, 100, 290, 70);
  arc(-35, 15, 50, 100, 110, 250);
  pop();
  
  translate(50, 0);
  
  push()
  rotate(20);
  arc(-60, 15, 50, 100, 290, 70);
  arc(-35, 15, 50, 100, 110, 250);
  pop();

  
  
  
  
  
  
  
  
}