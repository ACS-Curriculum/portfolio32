//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Line, { Point } from './all.js';

export default class PhysicsCircleRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var vect;
      var angle = 360;
      var angle2 = 0;
      var points;
      var timeThis = 0;
      var z = 0;
      var refreshIntervalId;
      var lin;
      var showStuff = '';
      let buttonStart;

      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        points = [];
        refreshIntervalId = setInterval(sketch.timeIt, 10);
        lin = new Line(0, 0, sketch);
        for (var i = 0; i < 450; i++) {
          points[i] = new Point(i, sketch.sin(angle2) * 100, sketch);
          angle2 += 0.05;
        }

        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(220);
        sketch.translate(200, sketch.height / 2);
        for (var i = 0; i < timeThis; i++) {
          var num = points[i].y * 10;
          var newNum = sketch.round(num);
          var newNum1 = newNum / 10;
          //showStuff = "Y " + (points[i].y*100)/100;
          showStuff = 'Y: ' + newNum1;
          points[i].display();
        }
        lin.display();
        lin.move();

        sketch.noStroke();
        sketch.fill(100);
        sketch.textSize(20);
        sketch.text(showStuff, -150, -150);
      };

      sketch.timeIt = () => {
        timeThis += 0.1;
        if (timeThis > 449) {
          clearInterval(refreshIntervalId);
        }
      };
      sketch.resetIt = () => {
        vect;
        angle = 360;
        angle2 = 0;

        timeThis = 0;
        z = 0;
        refreshIntervalId;
        lin;
        showStuff = '';

        points = [];
        refreshIntervalId = setInterval(sketch.timeIt, 10);
        lin = new Line(0, 0, sketch);
        for (var i = 0; i < 450; i++) {
          points[i] = new Point(i, sketch.sin(angle2) * 100, sketch);
          angle2 += 0.05;
        }
      };
      sketch.stopThis = () => {
        sketch.noLoop();
      };
    }, div);
  }
}
