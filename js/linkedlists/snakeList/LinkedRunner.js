//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Node, { LinkedList } from './all.js';

export default class LinkedRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var head;
      var foodx;
      var foody;
      var total;
      var count = 1;
      var scl = 20;
      var s = 'Snake Linked List!';
      var list;
      var node;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        //foodx = sketch.floor(sketch.random(sketch.width));
        //foody = sketch.floor(sketch.random(sketch.height));
        node = new Node(100, 100, 0, 0, sketch);
        list = new LinkedList(node, sketch);
        list.addFood();
        sketch.frameRate(4);

        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(150);

        list.display();
        list.updateDirections();
        list.displayFood();
        sketch.text(s, 20, 20);

        if (list.eatFood()) {
          s = 'mmmmmm';
          list.addNodeInTheHead();
          //foodx = sketch.floor(sketch.random(sketch.width));
          //foody = sketch.floor(sketch.random(sketch.height));
          list.addFood();
        }
      };
      sketch.resetIt = () => {
        node = new Node(100, 100, 0, 0, sketch);
        list = new LinkedList(node, sketch);
        list.addFood();
        sketch.frameRate(4);
      };
      sketch.keyPressed = () => {
        if (sketch.keyCode === sketch.UP_ARROW) {
          list.dir(0, -1);
        } else if (sketch.keyCode === sketch.RIGHT_ARROW) {
          list.dir(1, 0);
        } else if (sketch.keyCode === sketch.DOWN_ARROW) {
          list.dir(0, 1);
        } else if (sketch.keyCode === sketch.LEFT_ARROW) {
          list.dir(-1, 0);
        }
      };
    }, div);
  }
}
