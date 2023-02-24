export default class Points {
  constructor(x, y, angle, p5) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.angle = angle;
  }
}

export class Circles {
  constructor(x1, y1, ang, rad, w, col, p5) {
    this.p5 = p5;
    this.x = 0;
    this.y = 0;
    this.x1 = x1;
    this.y1 = y1;
    this.ang = ang;
    this.rad = rad;
    this.w = w;
    this.dx = 0;
    this.dy = 0;
    this.e = 0.04;
    this.col = col;
  }
  display() {
    this.p5.noStroke();
    this.p5.fill(this.col);
    this.p5.ellipse(this.x, this.y, this.w, this.w);
  }
  display2() {
    this.p5.noStroke();
    this.p5.fill(this.col);
    this.x = this.x * 100;
    this.y = this.y * 100;
    this.p5.ellipse(this.x, this.y, this.w, this.w);
  }
  displayLines() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.line(0, 0, this.x, this.y);
  }
  move() {
    this.dx = this.x1 - this.x;
    this.dy = this.y1 - this.y;
    if (this.x < this.dx) {
      this.x += this.dx * this.e;
    }
    if (this.y < this.dy) {
      this.y += this.dy * this.e;
    }
    if (this.x > this.dx) {
      this.x += this.dx * this.e;
    }
    if (this.y > this.dy) {
      this.y += this.dy * this.e;
    }
  }
  setX(n) {
    this.x1 = n;
  }
  setY(n) {
    this.y1 = n;
  }
  setCol(col) {
    this.col = col;
  }
}
