export default class Graph2Runner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      let rootOne = "";
      let rootTwo = "";
      let rootThree = "";
      let randNum = 1;
      let xmin = -10;
      let xmax = 10;
      let newPtsx = [];
      let newPtsy = [];
      //range of y-values
      let ymin = -10;
      let ymax = 10;
      let x = xmin;
      //calculate the range
      let rangex = xmax - xmin;
      let rangey = ymax - ymin;
      let xscl, yscl;
      let midpt = 0;
      var count = 0;
      let graphType = "";
      var buttonStart;

      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight, div);
        xscl = sketch.width / rangex;
        yscl = -sketch.height / rangey;
        randNum = sketch.floor(sketch.random(1, 9));

        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(255);
        sketch.translate(sketch.width / 2, sketch.height / 2);
        sketch.grid(xscl, yscl);
        sketch.noFill();
        sketch.strokeWeight(2);
        sketch.stroke(255, 0, 0);
        sketch.graphFunction();
      };

      sketch.f = x => {
        if (randNum == 1) {
          graphType = "polynomial";
          return 6 * x ** 3 + 19 * x ** 2 + 3 * x - 10;
        } else if (randNum == 2) {
          graphType = "wrong quadratic";
          return sketch.pow(2 * x, 2) - 8 * x + 3; //quadratic--this is wrong
        } else if (randNum == 3) {
          graphType = "quadratic";
          return 2 * x ** 2 - 8 * x + 3; //quadratic--this is right
        } else if (randNum == 4) {
          graphType = "cubic";
          return sketch.pow(x, 3) - 4 * x; //cubic
        } else if (randNum == 5) {
          graphType = "exponential";
          return sketch.pow(2, x); //exponential
        } else if (randNum == 6) {
          graphType = "cubic";
          return 2 * (x + 1) ** 3 - 1; //cubic
        } else if (randNum == 7) {
          graphType = "to the 8th";
          return 1 - (1 - x) ** 8;
        } else if (randNum == 8) {
          graphType = "x to less than one";
          return x ** 0.125;
        } else if (randNum == 9) {
          graphType = "x to less than one";
          return sketch.sin(x);
        }
      };

      sketch.graphFunction = () => {
        var x1 = x * xscl;
        var y1 = sketch.f(x) * yscl;
        var x2 = (x + 0.1) * xscl;
        var y2 = sketch.f(x + 0.1) * yscl;
        x += 0.1;

        newPtsx.push(sketch.createVector(x1, y1));
        newPtsy.push(sketch.createVector(x2, y2));

        sketch.stroke(0, 0, 255);
        sketch.strokeWeight(4);
        if (newPtsx.length > 1) {
          for (var i = 0; i < newPtsx.length; i++) {
            sketch.line(newPtsx[i].x, newPtsx[i].y, newPtsy[i].x, newPtsy[i].y);
          }
        }
        //getRoots
        sketch.stroke(1);
        sketch.strokeWeight(2);
        if (y1 < 4 && y1 > -4) {
          count += 1;
          if (count == 1) {
            var result1 = sketch.round(100 * x) / 100;
            rootOne = result1;
          }
          if (count == 2) {
            var result2 = sketch.round(100 * x) / 100;
            rootTwo = result2;
          }
          if (count == 3) {
            var result3 = sketch.round(100 * x) / 100;
            rootThree = result3;
          }
        }
        sketch.stroke(0);
        sketch.strokeWeight(1.5);
        sketch.text("Root1: " + rootOne, -200, 50);
        sketch.text("Root2: " + rootTwo, -200, 75);
        sketch.text("Root3: " + rootThree, -200, 100);
        sketch.text("Graph-type: " + graphType, -200, 125);
      };

      sketch.startGraph = () => {
        xmin = -10;
        xmax = 10;
        newPtsx = [];
        newPtsy = [];
        //range of y-values
        ymin = -10;
        ymax = 10;
        x = xmin;
        //calculate the range
        rangex = xmax - xmin;
        rangey = ymax - ymin;
        xscl, yscl;

        xscl = sketch.width / rangex;
        yscl = -sketch.height / rangey;
        count = 0;
        rootOne = "";
        rootTwo = "";
        rootThree = "";
        randNum = sketch.floor(sketch.random(1, 9));
        graphType = "";
      };
      sketch.average = (a, b) => {
        return (a + b) / 2;
      };
      sketch.getRoots = (num1, num2) => {
        var lower = num1;
        var upper = num2;
        var midpt = 0;

        for (var i = 0; i < 20; i++) {
          midpt = sketch.average(lower, upper);
          if (lower < 0) {
            if (midpt == 0) {
              return midpt;
            } else if (sketch.f(midpt) < 0) {
              upper = midpt;
            } else {
              lower = midpt;
            }
          } else if (lower > 0) {
            if (midpt == 0) {
              return midpt;
            } else if (sketch.f(midpt) > 0) {
              upper = midpt;
            } else {
              lower = midpt;
            }
          }
        }

        return midpt;
      };
      sketch.grid = (xscl, yscl) => {
        sketch.strokeWeight(1);
        sketch.textSize(20);
        sketch.stroke(0, 255, 255);
        for (let i = xmin; i <= xmax + 1; i++) {
          sketch.line(i * xscl, ymin * yscl, i * xscl, ymax * yscl);
          sketch.text(i, i * xscl, 0);
        }
        for (let i = ymin; i <= ymax + 1; i++) {
          sketch.line(xmin * xscl, i * yscl, xmax * xscl, i * yscl);
          sketch.text(i, 0, i * yscl);
        }
        sketch.stroke(0);
        sketch.line(0, ymin * yscl, 0, ymax * yscl);
        sketch.line(xmin * xscl, 0, xmax * xscl, 0);
      };
      sketch.resetIt = () => {
        sketch.startGraph();
        randNum = sketch.floor(sketch.random(1, 9));
      };
    }, div);
  }
}
