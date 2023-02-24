export default class Taxi {
  constructor(newID, tempX, tempY, tempPaint, tempSpeed, p5) {
    this.p5 = p5;
    this.taxiID = newID;
    this.head = null;
    this.next = null;
    this.x = tempX;
    this.y = tempY;
    this.paint = tempPaint;
    this.speed = tempSpeed;
  }
  displayCar() {
    this.p5.rectMode(this.p5.CENTER);
    this.p5.fill(this.paint, 0, 0);
    this.p5.rect(this.x - 10, this.y - 30, 50, 20);
    this.p5.rect(this.x, this.y - 10, 75, 20);
    this.p5.fill(212, 242, 252);
    this.p5.rect(this.x + 5, this.y - 30, 15, 15);
    this.p5.fill(0);
    this.p5.ellipse(this.x - 25, this.y, 20, 20);
    this.p5.ellipse(this.x + 25, this.y, 20, 20);
    this.x += this.speed;
    if (this.x > 450) {
      this.x = this.p5.random(-150);
    }
  }
}

export class TaxiRank {
  constructor(p5) {
    this.p5 = p5;
    var head = new Taxi();
    this.head = null;
    var tail = new Taxi();
    tail = null;
  }

  add(newNode) {
    if (this.head == null) {
      this.head = newNode;
      //this.tail = newNode;
      return;
    } else {
      if (newNode != null) {
        var current = new Taxi();
        current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = newNode;
        //tail=newNode;
        newNode.prev = current;
      }
    }
  }

  list() {
    //var countY = this.p5.height / 2;
    var current = new Taxi();
    current = this.head;
    while (current != null) {
      current.displayCar(p5);
      this.p5.fill(255);
      this.p5.textSize(14);
      this.p5.text(current.taxiID, current.x - 18, current.y - 10);
      current = current.next;
      //countY += 20;
    }
  }

  get() {
    if (this.head == null) {
      return null; //no cabs
    } else {
      var returnVal = new Taxi();
      returnVal = this.head;
      this.head = this.head.next; //move cabs along one line
      //this.head.prev = null;
      return returnVal;
    }
  }

  isEmpty() {
    if (head == null) return true;
    return false;
  }
}
