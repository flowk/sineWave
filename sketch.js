let cnv;
let radius = 50;
let vertices = 5;
let strk = 5;

function setup() {
  // put setup code here
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5Sketch');
    //createCanvas(600,600, WEBGL);
    frameRate(30);
}

function draw() {
  // put drawing code here
  background(0);
	noFill();
	let strk = 	document.getElementById('stroke').value;

	strokeWeight(strk);
	stroke(128, 0, 128);

	let value = document.getElementById('vertices').value;
	vertices = value;
	for(let i=0; i < 10; i++){
		polygon(vertices, radius * i, width/2, height/2);
	}
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}

function polygon(vert, r, posX, posY){
	beginShape();
	for(let i=0; i< vert; i++){
		let angle = map(i, 0, vert, 0, TWO_PI);
		let x = cos(angle) * r + posX;
		let y = sin(angle) * (r/2) + posY;	
		vertex(x, y);	
	}
	endShape(CLOSE);
}