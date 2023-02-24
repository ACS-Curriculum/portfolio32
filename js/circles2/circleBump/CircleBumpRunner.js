//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Points, { Circles } from './all.js';

export default class CircleBumpRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var circ;
      var pt;
      var pts;
      var circs;
      var circs2;
      var x1;
      var y1;
      var x2;
      var y2;
      var rad;
      var w;
      var col = 0;
      var index = 0;
      var cols;
      var angle;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        cols = [
          '#F72585',
          '#B5179E',
          '#7209B7',
          '#560BAD',
          '#480CA8',
          '#3A0CA3',
          '#3F37C9',
          '#4361EE',
          '#4895EF',
          '#4CC9F0'
        ];
        rad = 150;
        w = 30;
        angle = -sketch.PI / 4;
        circs = [];
        pts = [];
        x1 = sketch.cos(angle) * rad;
        y1 = sketch.sin(angle) * rad;
        circ = new Circles(x1, y1, angle, rad, w, col, sketch);
        circs.push(circ);

        for (var i = 0; i < 24; i++) {
          //var n = cols[floor(random(cols.length))];
          x2 = sketch.cos(angle) * rad;
          y2 = sketch.sin(angle) * rad;
          angle += sketch.PI / 12;
          pt = new Points(x2, y2, angle, sketch);
          pts.push(pt);
        }

        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(220);
        sketch.translate(sketch.width / 2, sketch.height / 2);

        if (sketch.frameCount % 120 == 0) {
          var n = cols[sketch.floor(sketch.random(cols.length))];
          circs.push(new Circles(x1, y1, angle, rad, w, n, sketch));
          angle += sketch.PI / 4;
        }
        sketch.makeSprocket();

        circ.display();
        circ.move();
        for (var i = 0; i < circs.length; i++) {
          circs[i].display();
          circs[i].displayLines();
          circs[i].move();
        }
      };

      sketch.resetIt = () => {
        rad = 150;
        w = 30;
        angle = -sketch.PI / 4;
        circs = [];
        pts = [];
        x1 = sketch.cos(angle) * rad;
        y1 = sketch.sin(angle) * rad;
        circ = new Circles(x1, y1, angle, rad, w, col, sketch);
        circs.push(circ);
        for (var i = 0; i < 24; i++) {
          //var n = cols[floor(random(cols.length))];
          x2 = sketch.cos(angle) * rad;
          y2 = sketch.sin(angle) * rad;
          angle += sketch.PI / 12;
          pt = new Points(x2, y2, angle, sketch);
          pts.push(pt);
        }
      };

      sketch.coll = (one, two) => {
        if (one != null) {
          var d = sketch.dist(one.x, one.y, two.x, two.y);
        }
        if (d < w) {
          return true;
        }
        return false;
      };
      sketch.makeSprocket = () => {
        //var n=cols[floor(random(cols.length))];
        circs[0].setCol(255);
        if (circs[1] != null) {
          if (sketch.coll(circs[0], circs[1]) == true) {
            circs[1].setX(pts[1].x);
            circs[1].setY(pts[1].y);
            var n = cols[sketch.floor(sketch.random(cols.length))];
            circs[1].setCol(n);
            circs[0].setCol(n);
          }
          if (circs[2] != null) {
            if (sketch.coll(circs[0], circs[2]) == true) {
              circs[2].setX(pts[2].x);
              circs[2].setY(pts[2].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[2].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[3] != null) {
            if (sketch.coll(circs[0], circs[3]) == true) {
              circs[3].setX(pts[3].x);
              circs[3].setY(pts[3].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[3].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[4] != null) {
            if (sketch.coll(circs[0], circs[4]) == true) {
              circs[4].setX(pts[4].x);
              circs[4].setY(pts[4].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[4].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[5] != null) {
            if (sketch.coll(circs[0], circs[5]) == true) {
              circs[5].setX(pts[5].x);
              circs[5].setY(pts[5].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[5].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[6] != null) {
            if (sketch.coll(circs[0], circs[6]) == true) {
              circs[6].setX(pts[6].x);
              circs[6].setY(pts[6].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[6].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[7] != null) {
            if (sketch.coll(circs[0], circs[7]) == true) {
              circs[7].setX(pts[7].x);
              circs[7].setY(pts[7].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[7].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[8] != null) {
            if (sketch.coll(circs[0], circs[8]) == true) {
              circs[8].setX(pts[8].x);
              circs[8].setY(pts[8].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[8].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[9] != null) {
            if (sketch.coll(circs[0], circs[9]) == true) {
              circs[9].setX(pts[9].x);
              circs[9].setY(pts[9].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[9].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[10] != null) {
            if (sketch.coll(circs[0], circs[10]) == true) {
              circs[10].setX(pts[10].x);
              circs[10].setY(pts[10].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[10].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[11] != null) {
            if (sketch.coll(circs[0], circs[11]) == true) {
              circs[11].setX(pts[11].x);
              circs[11].setY(pts[11].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[11].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[12] != null) {
            if (sketch.coll(circs[0], circs[12]) == true) {
              circs[12].setX(pts[12].x);
              circs[12].setY(pts[12].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[12].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[13] != null) {
            if (sketch.coll(circs[0], circs[13]) == true) {
              circs[13].setX(pts[13].x);
              circs[13].setY(pts[13].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[13].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[14] != null) {
            if (sketch.coll(circs[0], circs[14]) == true) {
              circs[14].setX(pts[14].x);
              circs[14].setY(pts[14].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[14].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[15] != null) {
            if (sketch.coll(circs[0], circs[15]) == true) {
              circs[15].setX(pts[15].x);
              circs[15].setY(pts[15].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[15].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[16] != null) {
            if (sketch.coll(circs[0], circs[16]) == true) {
              circs[16].setX(pts[16].x);
              circs[16].setY(pts[16].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[16].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[17] != null) {
            if (sketch.coll(circs[0], circs[17]) == true) {
              circs[17].setX(pts[17].x);
              circs[17].setY(pts[17].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[17].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[18] != null) {
            if (sketch.coll(circs[0], circs[18]) == true) {
              circs[18].setX(pts[18].x);
              circs[18].setY(pts[18].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[18].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[19] != null) {
            if (sketch.coll(circs[0], circs[19]) == true) {
              circs[19].setX(pts[19].x);
              circs[19].setY(pts[19].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[19].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[20] != null) {
            if (sketch.coll(circs[0], circs[20]) == true) {
              circs[20].setX(pts[20].x);
              circs[20].setY(pts[20].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[20].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[21] != null) {
            if (sketch.coll(circs[0], circs[21]) == true) {
              circs[21].setX(pts[21].x);
              circs[21].setY(pts[21].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[21].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[22] != null) {
            if (sketch.coll(circs[0], circs[22]) == true) {
              circs[22].setX(pts[22].x);
              circs[22].setY(pts[22].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[22].setCol(n);
              circs[0].setCol(n);
            }
          }
          if (circs[23] != null) {
            if (sketch.coll(circs[0], circs[23]) == true) {
              circs[23].setX(pts[23].x);
              circs[23].setY(pts[23].y);
              var n = cols[sketch.floor(sketch.random(cols.length))];
              circs[23].setCol(n);
              circs[0].setCol(n);
            }
          }
        }
      };
    }, div);
  }
}
