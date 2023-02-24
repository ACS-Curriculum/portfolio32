export default class Points {
  constructor(x, y, p5) {
    this.x = x;
    this.y = y;
    this.p5 = p5;
    this.fr = this.newRandomVec();
    this.vx = this.fr.x;
    this.vy = this.fr.y;

    //this.vects = this.p5.createVector(this.x, this.y);
    //this.vects = this.p5.Vector(x, y);
  }
  newRandomVec() {
    var vec = new p5.Vector(this.x, this.y);
    return vec;
  }
  display(p5) {
    this.p5.stroke("#FFC100");
    this.p5.line(0, 0, this.vx, this.vy);
  }
}

export class Circles {
  constructor(x, y, ang, rad, w, randCol, p5) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.e = 0.04;
    this.dx = 100;
    this.dy = 100;
    this.ang = ang;
    this.x1 = this.p5.cos(this.ang) * rad;
    this.y1 = this.p5.sin(this.ang) * rad;
    this.w = w;
    this.randCol = randCol;
  }
  display() {
    this.p5.fill(this.randCol);
    this.p5.ellipse(this.x, this.y, this.w, this.w);
  }
  move() {
    this.dx = this.x1 - this.x;
    this.dy = this.y1 - this.y;
    if (this.x > this.dx) {
      this.x += this.dx * this.e;
    }
    if (this.y > this.dy) {
      this.y += this.dy * this.e;
    }
    if (this.x < this.dx) {
      this.x += this.dx * this.e;
    }
    if (this.y < this.dy) {
      this.y += this.dy * this.e;
    }
  }
}
