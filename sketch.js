let cnv;
var counter = 0;

function setup() {
  // put setup code here
    cnv = createCanvas(windowWidth, windowHeight, WEBGL);
    cnv.parent('p5Sketch');
    //createCanvas(600,600, WEBGL);
    frameRate(30);
}

function draw() {
  // put drawing code here
  background(0);

}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}