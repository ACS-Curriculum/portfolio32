import SmAng, { Circles, SmCirc } from './all.js';

export default class CircleOrangeRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var circ;
      var circ2;
      var circs;
      var circs2;
      var smAng;
      var smAngs;
      var smCircs;
      var angle;
      var smAngle;
      var x1;
      var y1;
      var x2;
      var y2;
      var x3;
      var y3;
      var x4 = 0;
      var y4 = 0;
      var rad;
      var w;
      var col = 0;
      var index = 0;
      var count = 0;
      var c1 = 0;
      var c2 = 0;
      var num = 0;
      var offsetx;
      var offsety;
      var totalCount = 0;
      var git = 0;
      var git2 = 0;
      var cs = [0, 1, 2, 3, 4, 5, 6, 7];
      var numCS = 0;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        rad = 150;
        w = 60;
        angle = sketch.PI / 4;
        smAngle = sketch.PI / 4;
        x1 = sketch.cos(angle) * rad;
        y1 = sketch.sin(angle) * rad;
        x3 = 0;
        y3 = 0;
        circs = [];
        circs2 = [];
        circ = new Circles(x1, y1, angle, rad, w, col, sketch);
        circs.push(circ);

        //circ2 = new Circles(x1, y1, angle, rad, w, col);
        circs2.push(circ);
        smAngs = [];
        smCircs = [];

        for (var j = 0; j < 9; j++) {
          x3 = sketch.cos(smAngle) * 30 + 105;
          y3 = sketch.sin(smAngle) * 30 + 105;
          smAng = new SmAng(x3, y3, smAngle, sketch);
          smAngs.push(smAng);
          smAngle += sketch.PI / 4;
        }
        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background('#F29F05');
        sketch.translate(sketch.width / 2, sketch.height / 2);

        if (sketch.frameCount % 12 == 0) {
          circs.push(new Circles(x1, y1, angle, rad, w, 0, sketch));
          //smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y));
        }

        sketch.drawArms();
        if (totalCount > 71) {
          sketch.rotate(git);
          git += 0.005;
        }
        circ.display();
        circ.move();
        for (var i = 0; i < circs.length; i++) {
          circs[i].display();
          circs[i].move();
        }
        if (numCS.length > 0) {
          for (var j = 0; j < numCS; j++) {
            sketch.fill('#F2B705');
            circs2[j].display();
          }
        }
        if (smCircs.length > 0) {
          for (var k = 0; k < smCircs.length; k++) {
            smCircs[k].display();
          }
        }
      };

      sketch.resetIt = () => {
        x2;
        y2;
        x4 = 0;
        y4 = 0;
        col = 0;
        index = 0;
        count = 0;
        c1 = 0;
        c2 = 0;
        num = 0;
        totalCount = 0;
        git = 0;
        git2 = 0;
        cs = [0, 1, 2, 3, 4, 5, 6, 7];
        numCS = 0;

        circs = [];
        circs2 = [];
        smAngs = [];
        smCircs = [];

        for (var j = 0; j < 9; j++) {
          x3 = sketch.cos(smAngle) * 30 + 105;
          y3 = sketch.sin(smAngle) * 30 + 105;
          smAng = new SmAng(x3, y3, smAngle, sketch);
          smAngs.push(smAng);
          smAngle += sketch.PI / 4;
        }

        rad = 150;
        w = 60;
        angle = sketch.PI / 4;
        smAngle = sketch.PI / 4;
        x1 = sketch.cos(angle) * rad;
        y1 = sketch.sin(angle) * rad;
        x3 = 0;
        y3 = 0;

        circ = new Circles(x1, y1, angle, rad, w, col, sketch);
        circs.push(circ);

        //circ2 = new Circles(x1, y1, angle, rad, w, col);
        circs2.push(circ);
      };
      sketch.addCirc = n => {
        angle += sketch.PI / 4;
        x1 = sketch.cos(angle) * rad;
        y1 = sketch.sin(angle) * rad;
        circ = new Circles(x1, y1, angle, rad, w, col, sketch);
        circs.push(circ);
        circs2.push(circ);
        numCS += 1;
        if (n == 0) {
          offsetx = 105;
          offsety = 105;
        } else if (n == 1) {
          offsetx = 0;
          offsety = 150;
          //numCS+=1;
        } else if (n == 2) {
          offsetx = -105;
          offsety = 105;
        } else if (n == 3) {
          offsetx = -150;
          offsety = 0;
        } else if (n == 4) {
          offsetx = -105;
          offsety = -105;
        } else if (n == 5) {
          offsetx = 0;
          offsety = -150;
        } else if (n == 6) {
          offsetx = 105;
          offsety = -105;
        } else if (n == 7) {
          offsetx = 150;
          offsety = 0;
        }
        for (var j = 0; j < 9; j++) {
          x3 = sketch.cos(smAngle) * 30 + offsetx;
          y3 = sketch.sin(smAngle) * 30 + offsety;
          smAng = new SmAng(x3, y3, smAngle, sketch);
          smAngs.push(smAng);
          smAngle += sketch.PI / 4;
        }
      };
      sketch.coll = (one, two) => {
        var d = sketch.dist(one.x, one.y, two.x, two.y);
        if (d < w) {
          return true;
        }
        return false;
      };

      sketch.drawArms = () => {
        if (circs[1] != null && num == 0) {
          if (sketch.coll(circs[0], circs[1]) == true) {
            c1 = 255;
            circs[0].setCol(c1);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;

            if (count == 9) {
              count = 0;
              num = 1;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }

        if (circs[2] != null && num == 1) {
          if (sketch.coll(circs[1], circs[2]) == true) {
            circs[1].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              count = 0;
              num = 2;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }

        if (circs[3] != null && num == 2) {
          if (sketch.coll(circs[2], circs[3]) == true) {
            circs[2].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 3;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }
        if (circs[4] != null && num == 3) {
          if (sketch.coll(circs[3], circs[4]) == true) {
            circs[3].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 4;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }
        if (circs[5] != null && num == 4) {
          if (sketch.coll(circs[4], circs[5]) == true) {
            circs[4].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 5;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }
        if (circs[6] != null && num == 5) {
          if (sketch.coll(circs[5], circs[6]) == true) {
            circs[5].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 6;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }

        if (circs[7] != null && num == 6) {
          if (sketch.coll(circs[6], circs[7]) == true) {
            circs[6].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 7;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }
        if (circs[8] != null && num == 7) {
          if (sketch.coll(circs[7], circs[8]) == true) {
            circs[7].setCol(255);
            circs.shift();
            smCircs.push(new SmCirc(smAngs[index].x, smAngs[index].y, sketch));
            index++;
            count++;
            if (count == 9) {
              num = 8;
              count = 0;
              totalCount += 9;
              sketch.addCirc(num);
            }
          }
        }

        sketch.rotate(git2);
        //git2 += 0.02;
      };
    }, div);
  }
}
