export default class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push1(element) {
    //num = num + 30;
    this.dataStore[this.top++] = element;
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  pop1() {
    var test = --this.top;
    return this.dataStore[test];
  }

  clear1() {
    this.top = 0;
    this.dataStore.length = 0;
  }

  length() {
    return this.top;
  }
}

export class Word {
  constructor(w, tempX, tempY, p5) {
    this.p5 = p5;
    this.dataStore = [];
    this.xpos = tempX;
    this.ypos = tempY;
    this.angle = this.p5.random(0, this.p5.TWO_PI);
    this.yoffset = 0.0;
    this.word = w;
  }
  update() {
    this.angle += 0.05;
    this.yoffset = this.p5.sin(this.angle) * 20;
  }
  display() {
    this.p5.fill(0, 0, 255);
    //text(this.word, this.xpos, this.ypos + this.yoffset)
  }
}
