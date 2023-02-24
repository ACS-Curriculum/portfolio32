export default class Lines {
  constructor(x, y, p5) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.angle = 0;
  }
  display() {
    this.p5.stroke(255, 0, 0);
    this.p5.strokeWeight(2);
    this.p5.line(this.x - 100, this.y, this.x - 100, 0);
    this.p5.stroke(0, 0, 0);
    this.p5.ellipse(this.x - 100, 0, 20, 20);
    this.p5.ellipse(this.x - 100, this.y, 20, 20);

    this.p5.ellipse(-100, 0, 20, 20);
    this.p5.line(-200, 0, 400, 0);

    this.p5.beginShape();
    this.p5.noFill();
    this.p5.vertex(-100, 0);
    this.p5.vertex(this.x - 100, this.y);
    this.p5.endShape();
  }
  move() {
    //this.x = map(cos(this.angle), -1, 1, -100, 100);
    //this.y = map(sin(this.angle), -1, 1, -100, 100);
    this.x = this.p5.cos(this.angle) * 100;
    this.y = this.p5.sin(this.angle) * 100;
    this.angle -= 0.05;
  }
}

export class Point {
  constructor(x, y, p5) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
  }
  display() {
    this.p5.noFill();
    this.p5.ellipse(-100, 0, 200, 200);
    this.p5.stroke(255, 0, 0);
    this.p5.strokeWeight(4);
    this.p5.point(this.x, this.y);
  }
}
