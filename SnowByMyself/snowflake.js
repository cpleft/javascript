
function getRandomSize() {
  let r = pow(random(0, 1), 2);
  return constrain(r * 20, 2, 20);
}


class Snowflake {

  constructor() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }


  applyForce(force) {
    // Parallax Effect hack
    let f = force.copy();
    f.mult(this.r);

    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  offScreen() {
    return (this.pos.y > height + this.r);
  }


}
