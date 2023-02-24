import Node, { NodeList } from './all.js';

export default class NodeListRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var nl;
      var newNode;
      var showFace = false;
      var bg;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        bg = 0;
        //var newNode = new Node(newNode, 145, 100, 0);
        newNode = null;
        nl = new NodeList(newNode, sketch);
        buttonStart = sketch.createButton('addIt');
        buttonStart.mousePressed(sketch.addIt);
      };

      sketch.draw = () => {
        sketch.background(bg);
        if (nl.count() > 0) {
          nl.displayLine();
          nl.displayList();
        }
        if (showFace == true) {
          sketch.face();
          sketch.noStroke();
          sketch.fill(255, 0, 0);
          sketch.ellipse(360, 320, 20, 20);

          sketch.fill(255);
          sketch.textSize(14);
          sketch.text(sketch.str(8), 355, 325);
        }
      };
      sketch.addIt = () => {
        nl.add();
        if (nl.count() > 6) {
          showFace = true;
          bg = '#ffb200';
          if (nl.count() > 7) {
            newNode = null;
            nl = new NodeList(newNode, sketch);
          }
        } else {
          showFace = false;
          bg = 0;
        }
      };
      sketch.face = () => {
        //background("#ffb200");
        sketch.noFill();
        sketch.strokeWeight(12);
        sketch.stroke(0);
        sketch.arc(sketch.width / 2, 240, 75, 75, 0, sketch.PI); // upper half of circle
        sketch.strokeWeight(2);
        sketch.textSize(60);
        sketch.text('Linked List!', 57, 90);
        sketch.strokeWeight(12);
        sketch.line(162, 240, 162, 150);
        sketch.line(238, 240, 238, 150);
        //line(100, 300, 300, 300);

        sketch.noStroke();
        sketch.fill(255);
        sketch.ellipse(110, 150, 55, 55);
        sketch.ellipse(285, 150, 55, 55);
        sketch.stroke(2);
        sketch.strokeWeight(12);
        sketch.point(110, 150);
        sketch.point(285, 150);
      };
    }, div);
  }
}
