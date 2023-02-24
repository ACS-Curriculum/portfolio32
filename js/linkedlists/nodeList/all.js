export default class Node {
  constructor(next, x, y, num, p5) {
    this.p5 = p5;
    this.x = x; //use this for ellipses
    this.y = y;
    this.xVar = 0;
    this.next = next;
    this.size = 20;
    this.num = num;
  }

  setNext(n) {
    this.next = n;
  }

  display() {
    this.p5.stroke('#FF581B');
    this.p5.strokeWeight(2);
    this.p5.fill(255, 0, 0);
    this.p5.ellipse(this.x, this.y, this.size, this.size);
    this.p5.fill(255);
    this.p5.textSize(14);
    this.p5.text(this.p5.str(this.num), this.x - 5, this.y + 5);
  }
}

export class NodeList {
  constructor(theList, p5) {
    this.theList = theList;
    this.x = 45;
    this.y = 320;
    this.p5 = p5;

    //for the lines below
    this.x1 = this.x; //where it starts
    this.y1 = this.y;

    this.x2 = this.x; //where the line is going
    this.y2 = this.y;

    this.x3 = this.x; //where line is going but draws/subtracts distance from x1
    //x3-x1
    this.y3 = this.y;

    this.countNode = 0;
  }

  add() {
    this.countNode += 1;
    var newNode = new Node(
      this.theList,
      this.x,
      this.y,
      this.countNode,
      this.p5
    );
    this.x += 45;
    this.x3 += 45;
    newNode.setNext(this.theList);
    this.theList = newNode;
    if (this.countNode > 7) {
      //this.countNode = 0;
      //newNode = null;
      //nl = new NodeList(newNode, this.p5);
    }
  }

  count() {
    var count = 0;
    var nodes = this.theList;
    while (nodes != null) {
      nodes = nodes.next;
      count++;
    }
    return count;
  }

  displayList() {
    var nodes = this.theList;
    while (nodes != null) {
      nodes.display();
      nodes = nodes.next;
    }
  }
  displayLine() {
    this.x1 += (this.x3 - this.x1) * 0.06;
    this.y1 += (this.y3 - this.y1) * 0.06;
    this.p5.stroke('#FF581B');
    this.p5.strokeWeight(2);
    this.p5.line(this.x1, this.y1, this.x2, this.y2);
  }
}
