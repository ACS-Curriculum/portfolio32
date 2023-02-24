//import Circs from "./Circs.js";
//import Lines from "./Lines.js";
import Stack, { Word } from './all.js';

export default class PalinRunner {
  constructor(canvasWidth, canvasHeight, div) {
    new p5(function(sketch) {
      var word1;
      var word2;
      var num;
      var canvas;
      var s1;
      var s2;
      var myFont;
      var result;
      var buttonStart;
      sketch.preload = () => {
        result = sketch.loadStrings('stacks.txt');
      };

      sketch.setup = () => {
        sketch.createCanvas(canvasWidth, canvasHeight);
        sketch.cursor(sketch.HAND);
        word1 = new Word('house', 90, 80, sketch);
        word2 = new Word('mouse', 440, 30, sketch);

        s1 = new Stack();
        s1.push1(word1);
        s1.push1(word2);
        sketch.noLoop();
        buttonStart = sketch.createButton('reset');
        buttonStart.mousePressed(sketch.resetIt);
      };

      sketch.draw = () => {
        sketch.background(46, 9, 39);
        sketch.fill(255, 140, 0);
        sketch.textSize(20);
        sketch.text('Palindrome with a Stack!', 140, 35);

        word1.update();
        word1.display();
        word2.update();
        word2.display();
        s1.toString();
        var ind = sketch.floor(sketch.random(result.length));
        sketch.isPalindrome(result[ind]);
      };
      sketch.resetIt = () => {
        sketch.redraw();
      };
      sketch.isPalindrome = word => {
        s2 = new Stack();
        for (var i = 0; i < word.length; ++i) {
          sketch.fill(255, 255, 255);
          sketch.textSize(20);
          sketch.text(word[i], 40, 20 + i * 25);
          //console.log(word[i]);
          s2.push1(word[i]);
        }
        var rword = '';
        while (s2.length() > 0) {
          rword += s2.pop1();
        }
        sketch.textSize(20);
        sketch.text(rword, 100, 30 + i * 20);

        if (word == rword) {
          sketch.fill(4, 117, 111);
          sketch.textSize(40);
          sketch.text('yes!', 270, 270);
          return true;
        } else {
          sketch.fill(255, 45, 0);
          sketch.textSize(40);
          sketch.text('no!', 270, 270);
          //return false;
        }
      };
    }, div);
  }
}
