export default class RainCatcher {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var xPositions = [200, 150, 250, 300];
      var yPositions = [0, 150, 50, 250];
      var score = 0;
      var snowSpeed;
      var buttonStart;
      var randNum;
      var cols = [
        "#B64EFD",
        "#7946E3",
        "#625AFA",
        "#4668E3",
        "#4EA2FD",
        "#0C1DE8"
      ];
      sketch.setup = () => {
        sketch.createCanvas(400, 400);
        snowSpeed = 2;
        randNum = cols[sketch.floor(sketch.random(cols.length))];
        buttonStart = sketch.createButton("reset");
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(204, 247, 255);
        sketch.drawSnow(snowSpeed);
        sketch.scoreKeeper();
        sketch.fill(0, 0, 0);
        sketch.rect(sketch.mouseX, 385, 75, 15);
      };

      sketch.mousePressed = () => {
        snowSpeed++;
        xPositions.push(sketch.random(1, 399));
        yPositions.push(sketch.random(1, 399));
      };

      sketch.drawSnow = speed => {
        sketch.noStroke();
        if (speed % 2 == 0) {
          sketch.fill(randNum);
        } else {
          sketch.fill(0, 0, 255);
        }
        for (var i = 0; i < xPositions.length; i++) {
          sketch.ellipse(xPositions[i], yPositions[i], 10, 10);
          yPositions[i] += speed;

          if (yPositions[i] > 400) {
            yPositions[i] = 0;
          }
          if (
            yPositions[i] > 385 &&
            xPositions[i] > sketch.mouseX &&
            xPositions[i] < sketch.mouseX + 75
          ) {
            yPositions[i] = 0;
            sketch.textSize(30);
            sketch.text("Nice one!", sketch.mouseX, 320);
            score++;
          }
          if (
            (yPositions[i] > 385 && xPositions[i] < sketch.mouseX) ||
            (yPositions[i] > 385 && xPositions[i] > sketch.mouseX + 75)
          ) {
            yPositions[i] = 0;
            score += -1;
          }
        }
      };

      sketch.scoreKeeper = () => {
        sketch.textSize(30);
        sketch.fill(0, 0, 255);
        sketch.text("Score: " + score, 150, 40);

        if (score >= 10) {
          sketch.background(204, 247, 255);
          sketch.text("Score: " + score, 150, 40);
          sketch.textSize(30);
          sketch.text("You win!", 150, 200);
          sketch.noLoop();
          sketch.fill(0, 0, 0);
          sketch.rect(sketch.mouseX, 385, 75, 15);
        }

        if (score <= -10) {
          sketch.background(204, 247, 255);
          sketch.text("Score: " + score, 150, 40);
          sketch.textSize(20);
          sketch.text("You lose! Better luck next time!", 70, 200);
          sketch.noLoop();
          sketch.fill(0, 0, 0);
          sketch.rect(sketch.mouseX, 385, 75, 15);
        }
      };

      sketch.resetIt = () => {
        xPositions = [200, 150, 250, 300];
        yPositions = [0, 150, 50, 250];
        snowSpeed = 2;
        score = 0;
        randNum = cols[sketch.floor(sketch.random(cols.length))];
        sketch.loop();
      };
    }, div);
  }
}
