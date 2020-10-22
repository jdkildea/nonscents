function setup() {
	var canvas = createCanvas(windowWidth, 200);
	canvas.parent('sketchdiv');
	background(255);
}

var angleEnd = 350;
var gap = 4;//gap between layers
var spacing = 25;//distancing from beginning of each layer

function draw() {
	translate(width/2-100, height/2-70);
	
	angleMode(DEGREES);
	
	scale(.75);

	strokeWeight(2);
	
	drawPlatter();
	
	drawCake();
	
	
}

function windowResized() {
	resizeCanvas(windowWidth, 200);
  }

function drawCake() {
	stroke(0);
	strokeWeight(1.5);
	fill(255);
	
    strokeWeight(2);
  
	beginShape();
	vertex(-1, 50);
	vertex(266, 4);
	vertex(266, 4+3*(gap+spacing));
	vertex(-1, 50+3*(gap+spacing));
	endShape(CLOSE);
	
	arc(0, 50, 600, 200, 330, angleEnd, PIE);//top of slice
		
	beginShape();//top layer
	vertex(-1, 50+gap);
	vertex(266, 4+gap);
	vertex(266, 25+gap);
	vertex(-1, 70+gap);
	endShape(CLOSE);
	
	beginShape();//second layer
	vertex(-1, 50+spacing+gap);
	vertex(266, 4+spacing+gap);
	vertex(266, 25+spacing+gap);
	vertex(-1, 70+spacing+gap);
	endShape(CLOSE);
	
	beginShape();//third layer
	vertex(-1, 50+2*spacing+gap);
	vertex(266, 4+2*spacing+gap);
	vertex(266, 25+2*spacing+gap);
	vertex(-1, 70+2*spacing+gap);
	endShape(CLOSE);
	
	beginShape();//fourth layer
	vertex(-1, 50+3*spacing+gap);
	vertex(266, 4+3*spacing+gap);
	vertex(266, 25+3*spacing+gap);
	vertex(-1, 70+3*spacing+gap);
	endShape(CLOSE);
}

function drawPlatter(){
	push();
	
	stroke(0);
	rotate(-5);
	ellipse(100, 120, 400, 150);

	pop();
	
	
	
}