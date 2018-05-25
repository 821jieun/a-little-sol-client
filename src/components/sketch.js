export default function sketch (p) {
  p.setup = function() {
   p.createCanvas(710, 400);
    p.background('#d3d3d3');
  }

  p.draw = function () {
    p.stroke(51);
      if (p.mouseIsPressed === true) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  }

};



// export default connect(mapStateToProps)(InstructionOptions)

//mobile
// ??
// var ptouchIsDown;
// var pmouseIsPressed;
// function setup() {
//   // uncomment this line to make the canvas the full size of the window
//   createCanvas(windowWidth, windowHeight);
//   strokeWeight(5);
//   stroke(0);
//   fill(0);
//   background(255);
//   ptouchIsDown = touchIsDown;
//   pmouseIsPressed = mouseIsPressed;
// }
//
// function draw() {
//   if (ptouchIsDown && touchIsDown){
//     stroke(255, 0, 0);
//     line(touchX, touchY, ptouchX, ptouchY);
//   }
//   if (pmouseIsPressed && mouseIsPressed){
//     stroke(0, 0, 255);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//   }
//   ptouchIsDown = touchIsDown;
//   pmouseIsPressed = mouseIsPressed;
// }
//
// function touchMoved(){
//   //stroke(255, 0, 0);
//   //line(touchX, touchY, ptouchX, ptouchY);
//   return false;
// }
//
// function touchEnded(){
//   //stroke(0, 0, 255);
//   //line(touchX, touchY, ptouchX, ptouchY);
//   return false;
// }

// function mouseDragged(){
  //stroke(0, 255, 0);
  //line(mouseX, mouseY, pmouseX, pmouseY);
// }
