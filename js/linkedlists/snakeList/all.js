export default class Node {
  constructor(x, y, xdirection, ydirection, p5) {
    this.p5 = p5;
    this.wall = false;
    this.x = x;
    this.y = y;
    this.prev;
    this.next;
    this.xdirection = xdirection;
    this.ydirection = ydirection;
    //this.r = this.p5.random(100, 255);
    this.r = 250;
    this.g = 200;
    this.b = 200;
    this.scl = 20;
  }
  displayNode() {
    this.p5.fill(this.r, this.g, this.b);
    //rect(this.x, this.y, scl, scl);
    this.p5.textSize(16);
    this.p5.fill(255);
    this.p5.textSize(25);
    this.p5.text('😊', this.x + 2, this.y + 15);
  }
  checkBounds() {
    this.x = this.p5.constrain(this.x, 0, this.p5.width - this.scl);
    this.y = this.p5.constrain(this.y, 0, this.p5.height - this.scl);
  }
  updatePosition() {
    this.x = this.x + this.xdirection * this.scl;
    this.y = this.y + this.ydirection * this.scl;
    this.checkBounds();
  }
  updateDirection() {
    if (this.prev != null) {
      console.log('this prev ' + this.prev.xdirection);
      this.xdirection = this.prev.xdirection;
      this.ydirection = this.prev.ydirection;
    }
  }
}

export class LinkedList {
  constructor(theList, p5) {
    this.head = theList;
    this.end = theList;
    this.size = 0;
    this.p5 = p5;
    this.scl = 20;
    this.foodx = this.p5.floor(this.p5.random(this.p5.width));
    this.foody = this.p5.floor(this.p5.random(this.p5.height));
  }

  updateDirections() {
    var current = this.head;
    current = this.end;
    //console.log(current);
    while (current != null) {
      current.updateDirection();
      current = current.prev;
    }
  }
  display() {
    var current = new Node();
    current = this.head;
    while (current != null) {
      current.displayNode();
      current.updatePosition();
      current = current.next;
    }
  }
  dir(x, y) {
    this.head.xdirection = x;
    this.head.ydirection = y;
    //console.log('and ' + this.head.xdirection);
  }

  addNodeInTheHead() {
    var node = new Node();
    node = this.head;
    if (this.head.ydirection == -1) {
      node = new Node(
        this.head.x,
        this.head.y - this.scl,
        this.head.xdirection,
        this.head.ydirection,
        this.p5
      );
    }
    if (this.head.xdirection == 1) {
      node = new Node(
        this.head.x + this.scl,
        this.head.y,
        this.head.xdirection,
        this.head.ydirection,
        this.p5
      );
    }
    if (this.head.ydirection == 1) {
      node = new Node(
        this.head.x,
        this.head.y + this.scl,
        this.head.xdirection,
        this.head.ydirection,
        this.p5
      );
    }
    if (this.head.xdirection == -1) {
      node = new Node(
        this.head.x - this.scl,
        this.head.y,
        this.head.xdirection,
        this.head.ydirection,
        this.p5
      );
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  move() {
    this.addNodeInTheHead();
    this.deleteNodeInTail();
  }
  addFront(node) {
    node.next = this.head;
    if (this.size == 0) {
      this.end = node;
    } else {
      this.head.prev = node;
    }
    this.head = node;
    this.size++;
  }

  deleteNodeInTail() {
    this.end = node;
    var node = this.end.prev;
  }
  addFood() {
    this.foodx = this.p5.floor(this.p5.random(this.p5.width));
    this.foody = this.p5.floor(this.p5.random(this.p5.height));

    var foodPosx = this.p5.floor(this.foodx / this.scl);
    var foodPosy = this.p5.floor(this.foody / this.scl);
    //this.deleteNodeInTailfoodx = foodPosx * this.scl;
    this.foody = foodPosy * this.scl;
    this.foodx = foodPosx * this.scl;
  }
  eatFood() {
    var d = this.p5.dist(this.head.x, this.head.y, this.foodx, this.foody);
    if (d < 1) {
      this.addFood();
      return true;
    }
    return false;
  }
  displayFood() {
    this.p5.fill(255);
    //rect(foodx, foody, scl, scl);
    this.p5.textSize(25);
    this.p5.text('🍔', this.foodx + 3, this.foody + 15);
  }
}
