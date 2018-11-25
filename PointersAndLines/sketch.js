var d = 40;
var p1 = 400;
var p2 = 400 + d;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}




function draw() {
  stroke(255);
  line(p1, p1, p2, p2);

  stroke(255);
  point(p1, p2);
}
