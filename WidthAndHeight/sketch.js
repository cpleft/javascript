function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(127);
  for (var i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}
