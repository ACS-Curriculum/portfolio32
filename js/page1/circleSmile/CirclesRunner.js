//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Points, { Circles } from "./all.js";

export default class CirclesRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var pts = [];
      var circs = [];
      var angle = 0;
      var angl = 0;
      var ang2 = 0;
      var circs2 = [];
      var x2 = 0;
      var y2 = 0;
      var num = 0;
      var rad = 180;
      var rot = 0;
      var w = 20;
      var leftMouth = 0;
      var rightMouth = 5;
      var eyeSize = 5;
      var cols = ["#F6412D", "#FF5607", "#FF9800", "#FFC100", "#FFEC19"];
      var randCol;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);

        sketch.resetIt();
        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(0);
        sketch.translate(sketch.width / 2, sketch.height / 2);
        if (sketch.frameCount % 120 == 0) {
          randCol = sketch.floor(sketch.random(cols.length));
          circs2.push(new Circles(x2, y2, ang2, rad, w, cols[randCol], sketch));
          ang2 += sketch.PI / 10;
          num++;
          if (num > 19) {
            rad -= 20;
            num = 0;
          }
        }
        sketch.rotate(ang2 * 0.02);
        for (var i = 0; i < 20; i++) {
          sketch.stroke("#F6412D");
          sketch.line(0, 0, sketch.round(pts[i].x), sketch.round(pts[i].y));
          sketch.fill("#F6412D");
          sketch.stroke(0);
          sketch.ellipse(pts[i].x, pts[i].y, 20, 20);
          sketch.fill(255);
          sketch.textSize(14);
          sketch.text(
            "    " +
              i +
              "    x " +
              sketch.round(pts[i].x) +
              ",  y " +
              sketch.round(pts[i].y),
            pts[i].x,
            pts[i].y
          );
        }
        for (var k = 0; k < circs2.length; k++) {
          circs2[k].display();
          circs2[k].move();
        }
        sketch.fill("#FFC100");
        sketch.ellipse(0, 0, 40, 40);
        sketch.ellipse(-10, -5, eyeSize, eyeSize);
        sketch.ellipse(10, -5, 5, 5);
        sketch.arc(leftMouth, rightMouth, 20, 10, 0, sketch.PI);
      };

      sketch.resetIt = () => {
        pts = [];
        circs = [];
        angle = 0;
        angl = 0;
        ang2 = 0;
        circs2 = [];
        x2 = 0;
        y2 = 0;
        num = 0;
        rad = 180;
        rot = 0;
        w = 20;
        leftMouth = 0;
        rightMouth = 5;
        eyeSize = 5;
        cols = ["#F6412D", "#FF5607", "#FF9800", "#FFC100", "#FFEC19"];
        for (var i = 0; i < 20; i++) {
          var x = sketch.cos(angle) * rad;
          var y = sketch.sin(angle) * rad;
          angle += sketch.PI / 10;
          pts.push(new Points(sketch.round(x), sketch.round(y), angle, sketch));
        }
        randCol = sketch.floor(sketch.random(cols.length));
      };
    }, div);
  }
}
