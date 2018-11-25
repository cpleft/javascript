var angles = [60, 90, 120, 120];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  noStroke();
  noLoop();
}


function draw() {
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle);
    lastAngle += radians(angles[i]);
  }
}
