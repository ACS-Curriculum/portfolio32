export default class Stack {
  constructor(p5) {
    this.p5 = p5;
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }
  display() {
    if (this.dataStore.length > 0) {
      for (var i = 0; i < this.dataStore.length; i++)
        this.dataStore[i].display();
    }
  }
  peek() {
    return this.dataStore[this.top - 1];
  }

  pop() {
    this.top--;
    return this.dataStore.pop();
  }

  clear1() {
    this.top = 0;
    this.dataStore.length = 0;
  }

  length() {
    return this.top;
  }
}

export class Rectangles {
  constructor(c, c1, p5) {
    this.p5 = p5;
    this.x = 200;
    this.y = c;
    this.w = 40;
    this.h = 40;
    this.r = 20;
    this.brightness = 150;
    this.c1 = c1;
    //console.log('hey ' + this.c1);
  }

  contains(px, py) {
    let d = this.p5.dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  changeColor(num) {
    this.brightness = num;
  }
  display() {
    this.p5.fill(255, 0, 0);
    this.p5.rect(this.x, this.y, this.w, this.h);
    this.p5.fill(255);
    this.p5.text(this.p5.str(this.c1), this.x + 5, this.y + 25);
  }
}

export class Buttons {
  constructor(myStack, p5) {
    this.p5 = p5;
    this.x = 0;
    this.y = 0;
    this.w = 40;
    this.h = 40;
    this.change = 360;
    this.count = 0;
    this.stack = myStack;
  }

  makeButton(x, y) {
    this.p5.rect(x, y, this.w, this.h);
  }
  clicked() {
    if (
      this.p5.mouseX > 65 &&
      this.p5.mouseX < 105 &&
      this.p5.mouseY > 315 &&
      this.p5.mouseY < 355
    ) {
      this.p5.cursor(this.p5.HAND);
      this.stack.pop();
      this.change = this.change + 45;
      this.count = this.count -= 1;
    } else if (
      this.p5.mouseX > 20 &&
      this.p5.mouseX < 60 &&
      this.p5.mouseY > 315 &&
      this.p5.mouseY < 355
    ) {
      this.p5.cursor(this.p5.HAND);
      this.change = this.change - 45;
      this.count = this.count += 1;
      this.stack.push(new Rectangles(this.change, this.count, this.p5));
    }
  }
}
