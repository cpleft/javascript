let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  frameRate(30);
}


function draw() {
  background(0);
  y = y + 1;
  if (y > height) 
    y = 0;
  line(0, y, width, y);
}
