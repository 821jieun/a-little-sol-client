export default function sketch (p) {
  p.setup = function() {
    p.createCanvas(710, 400);
    p.background(102);
  }

  p.draw = function () {
    p.stroke(255);
      if (p.mouseIsPressed === true) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }
};
