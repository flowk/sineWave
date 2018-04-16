let cnv;
let radius = 30;
let forms = 10;
let vertices = 5;
let strk = 5;
let inc;
let wave = 0;
let waveHeight = 100;
let waveFreq = 0;
let period = 3;
let loop = 30;


function setup() {
  // put setup code here
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5Sketch');
    //createCanvas(600,600, WEBGL);
		frameRate(30);
		inc = PI/30;
}

function draw() {
  // put drawing code here
  background(0);
	noFill();
	let period =	document.getElementById('period').value;

	strokeWeight(1);
	stroke(128, 0, 128);

	let value = document.getElementById('vertices').value;
	let forms = document.getElementById('forms').value;
	let waveHeight = document.getElementById('waveHeight').value;


	vertices = value;
	for(let i=0; i < forms; i++){
		waveFreq = map(i, 0, loop, 0, TWO_PI * period);
		let y = (height/2) + (sin(wave + waveFreq) * waveHeight);
		polygon(vertices, radius * i/2, width/2, y);
	}
	wave += inc;
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