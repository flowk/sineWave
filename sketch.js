let cnv;
let radius = 30;
let forms = 10;
let vertices = 5;
let strk = 2;
let inc;
let wave = 0;
let waveHeight = 100;
let waveFreq = 0;
let period = 3;
let loop = 30;
let offset = 0;


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
	let color =	document.getElementById('clrWheel').value;
	let strk =	document.getElementById('stroke').value;


	strokeWeight(strk);
	stroke(color);

	let value = document.getElementById('vertices').value;
	let forms = document.getElementById('forms').value;
	let waveHeight = document.getElementById('waveHeight').value;
	let offset = document.getElementById('offSet').value;

	vertices = value;
	for(let i=0; i < forms; i++){
		waveFreq = map(i, 0, loop, 0, TWO_PI * period);
		let y = (height/2) + (sin(wave + waveFreq) * waveHeight);
		polygon(vertices, radius * i/2,	i * offset, width/2, y);
	}
	wave += inc;
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}

function polygon(vert, r, offset, posX, posY){
	beginShape(POINTS); // 	beginShape(QUADS); // beginShape();
	for(let i=0; i< vert; i++){
		let angle = map(i, 0, vert, 0 + offset, TWO_PI + offset);
		let x = cos(angle) * r + posX;
		let y = sin(angle) * (r/2) + posY;	
		vertex(x, y);	
	}
	endShape(CLOSE);
}

// COlour WHeel wie mach ich das?
/*
function colorwheel(WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

int colorFromOffset(int offset) {
  return(int) ((offset + OFF_MAX) / (2.8 * OFF_MAX) * 255);
}

*/