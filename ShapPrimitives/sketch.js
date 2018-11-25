

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

}



function draw() {
  fill(255);
  triangle(180, 180, 180, 360, 250, 360);
  // parameters: coordinates of three pointers

  fill(255);
  rect(400, 400, 50, 50);
  // parameters: coordinate of left-top pointer and the width and height

  fill(255);
  quad(600, 600, 650, 600, 650, 650, 600, 650);

  fill(255);
  ellipse(50, 50, 10, 10);

  fill(255);
  arc(600, 600, 100, 100, PI, TWO_PI);
}
