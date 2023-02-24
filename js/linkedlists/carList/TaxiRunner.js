//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Taxi, { TaxiRank } from './all.js';

export default class TaxiRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var rank;
      var more;
      var buttonStart;
      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        rank = new TaxiRank(sketch);
        rank.add(new Taxi(2201, 50, 100, sketch.random(255), 0.3, sketch));
        rank.add(new Taxi(2204, 100, 170, 255, 0.5, sketch));
        rank.add(new Taxi(2206, 50, 270, 255, 0.2, sketch));
        //var myCab=rank.get();
        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);

        buttonStart = sketch.createButton('more');
        buttonStart.mousePressed(sketch.moreCar);
      };

      sketch.draw = () => {
        sketch.background(220);
        rank.list();
      };
      sketch.resetIt = () => {
        rank = new TaxiRank(sketch);
        rank.add(new Taxi(2201, 50, 100, sketch.random(255), 0.3, sketch));
        rank.add(new Taxi(2204, 100, 170, 255, 0.5, sketch));
        rank.add(new Taxi(2206, 50, 270, 255, 0.2, sketch));
      };
      sketch.moreCar = () => {
        rank.add(
          new Taxi(
            sketch.floor(sketch.random(8207)),
            50,
            sketch.random(50, 350),
            sketch.random(255),
            sketch.random(0.1, 1),
            sketch
          )
        );
      };
    }, div);
  }
}
