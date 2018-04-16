var OFF_MAX = 200;
var counter = 0;

function setup() {
  // put setup code here
    //createCanvas(windowWidth, windowHeight);
    createCanvas(600,600, WEBGL);
    //stroke(0);     // Set line drawing color to white
    frameRate(30);
}

function draw() {
  // put drawing code here

  background(0);


}


function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}