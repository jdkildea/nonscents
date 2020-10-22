function setup() {
    var canvas = createCanvas(windowWidth, 350);
    canvas.parent('sketchdiv');
	background(255);
}

var angleEnd = 350;
var gap = 4;//gap between layers
var spacing = 25;//distancing from beginning of each layer

function draw() {
	translate(width/2-200, height/2-100);
	
	angleMode(DEGREES);
	
	scale(1.5);
	
	drawPlatter();
	
	drawCake();
	
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }

function drawCake() {
	noStroke();
	
	fill(255);
	
	beginShape();
	vertex(-1, 50);
	vertex(266, 4);
	vertex(266, 4+3*(gap+spacing));
	vertex(-1, 50+3*(gap+spacing));
	endShape(CLOSE);
	
	fill('#D9A3B5');
	arc(0, 50, 600, 200, 330, angleEnd, PIE);//top of slice
		
	fill('#421E2A');
	beginShape();//top layer
	vertex(-1, 50+gap);
	vertex(266, 4+gap);
	vertex(266, 25+gap);
	vertex(-1, 70+gap);
	endShape(CLOSE);
	
	fill('#C191A1');
	beginShape();//second layer
	vertex(-1, 50+spacing+gap);
	vertex(266, 4+spacing+gap);
	vertex(266, 25+spacing+gap);
	vertex(-1, 70+spacing+gap);
	endShape(CLOSE);
	
	fill('#421E2A');
	beginShape();//third layer
	vertex(-1, 50+2*spacing+gap);
	vertex(266, 4+2*spacing+gap);
	vertex(266, 25+2*spacing+gap);
	vertex(-1, 70+2*spacing+gap);
	endShape(CLOSE);
	
	fill('#C191A1');
	beginShape();//fourth layer
	vertex(-1, 50+3*spacing+gap);
	vertex(266, 4+3*spacing+gap);
	vertex(266, 25+3*spacing+gap);
	vertex(-1, 70+3*spacing+gap);
	endShape(CLOSE);
}

function drawPlatter(){
	push();
	
	fill(250);
	stroke(255);
	strokeWeight(10);
	rotate(-5);
	ellipse(100, 120, 400, 150);

	pop();
	
	
	
}