import Lin from "./Lin.js";

export default class PaintRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        sketch.fill(0);
        sketch.noStroke();
      };

      sketch.makeDrawing = levs => {
        sketch.ellipse(0, 0, 150, 150);
        if (levs > 0) {
          sketch.push();
          sketch.translate(130, -20);
          sketch.rotate(
            sketch.map(sketch.mouseY, 0, sketch.height, 0, sketch.radians(90))
          );
          sketch.scale(sketch.map(sketch.mouseX, 0, sketch.width, 0, 1));
          sketch.makeDrawing(levs - 1);
          sketch.pop();

          sketch.push();
          sketch.rotate(sketch.radians(-80));
          sketch.translate(100, -90);
          sketch.rotate(
            sketch.map(sketch.mouseY, 0, sketch.height, 0, sketch.radians(90))
          );
          sketch.scale(sketch.map(sketch.mouseX, 0, sketch.width, 0, 1));
          sketch.makeDrawing(levs - 1);
          sketch.pop();
        }
      };

      sketch.draw = () => {
        sketch.background(255);
        sketch.translate(150, 250);
        sketch.makeDrawing(10);
      };
    }, div);
  }
}
