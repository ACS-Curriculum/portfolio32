import Lin from "./Lin.js";

export default class TreeRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var buttonStart;

      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);

        sketch.noLoop();
        buttonStart = sketch.createButton("reset");
        //buttonStart.position(0, 400);
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(135, 206, 235);
        sketch.strokeWeight(10);
        sketch.translate(sketch.width / 2, sketch.height - 20);
        sketch.branch(2);
      };

      sketch.branch = depth => {
        if (depth < 10) {
          sketch.strokeWeight(2);
          sketch.line(0, 0, 0, -sketch.height / 10); // draw a line going up
          sketch.translate(0, -sketch.height / 10); // move the space upwards
          //rotate(random(-0.05, 0.05)); // random wiggle

          if (sketch.random(1.0) < 0.6) {
            // branching
            sketch.rotate(0.3); // rotate to the right
            sketch.scale(0.8); // scale down

            sketch.push(); // now save the transform state
            sketch.branch(depth + 1); // start a new branch!
            sketch.pop(); // go back to saved state

            sketch.rotate(-0.6); // rotate back to the left

            sketch.push(); // save statesketch.
            sketch.branch(depth + 1); // start a second new branch
            sketch.pop(); // back to saved state
          } else {
            // no branch - continue at the same depth
            sketch.branch(depth);
          }
        }
      };

      sketch.resetIt = () => {
        sketch.redraw();
      };
    }, div);
  }
}
