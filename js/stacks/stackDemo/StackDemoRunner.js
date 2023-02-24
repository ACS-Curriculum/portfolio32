//import Stack from './all.js';
//import Rectangles from './all.js';
//import Buttons from './all.js';
import Stack, { Rectangles, Buttons } from './all.js';

export default class StackDemoRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var myStack;
      var myRect;
      var on = false;
      var button;
      var r;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        //canvas = sketch.createCanvas(400, 400);
        myStack = new Stack(sketch);
        myRect = new Rectangles(1, 360, sketch);
        button = new Buttons(myStack, sketch);
        sketch.fill(0, 0, 255);
        r = sketch.createGraphics(100, 100);
        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(100);
        r.background(0, 0, 255);
        sketch.image(r, 50, 50);
        sketch.fill(255);
        sketch.textSize(14);
        sketch.text('Stacks! \n\nFirst in, \nFirst out: \nFIFO!', 65, 75);
        for (var i = 0; i < myStack.length(); i++) {
          myStack.display();
        }

        sketch.fill(50, 50, 50);
        button.makeButton(20, 315);
        sketch.fill(255);
        sketch.text('push', 25, 340);

        sketch.fill(100, 100, 100);
        button.makeButton(65, 315);
        sketch.fill(255);
        sketch.text('pop', 75, 340);
      };
      sketch.mousePressed = () => {
        button.clicked();
      };

      sketch.resetIt = () => {
        button.clicked();
        for (var i = 0; i < myStack._length; i++) {
          if (
            myStack._storage.rects[i].contains(sketch.mouseX, sketch.mouseY)
          ) {
            //console.log('geterdone');
            myStack._storage.rects[i].changeColor();
          }
        }
      };
    }, div);
  }
}
