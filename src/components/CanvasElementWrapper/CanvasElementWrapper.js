import React from 'react';

export default class CanvasElementWrapper extends React.Component {
  constructor() {
    super()

    this.state = {
      width: 250,
      height: 250
    }
  }

  componentDidMount() {
    this.setCanvasHeightAndWidth();
    this.updateCanvas();
  }

  setCanvasHeightAndWidth() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(`i, the canvas, herby declare, i am this wide: ${width} and this tall! ${height}`)
    this.setState({
      width: width,
      height: height
    })
  }

  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    // const ctx = this.refs.canvas.getContext("2d");
    const r = 10; // draw radius
    ctx.lineWidth = r * 2;
    ctx.lineCap = "round";
    ctx.fillStyle = "black";
    var draw = false;
    var lineStart = true;
    var lastX, lastY;



    function yesDraw() { draw = true; lineStart = true }

    function mouseMove(e) {
       const bounds = canvas.getBoundingClientRect();
       const x = e.pageX - bounds.left - window.scrollX;
       const y = e.pageY - bounds.top - window.scrollY;
       // const x = e.pageX - bounds.left - scrollX;
       // const y = e.pageY - bounds.top - scrollY;
       if(draw && x > -r && x < canvas.width + r && y > -r && y < canvas.height + r){
          drawing(x,y);
       }
    }
    function noDraw() { draw = false }
    document.addEventListener("mousemove",mouseMove);
    document.addEventListener("mousedown",yesDraw);
    document.addEventListener("mouseup",noDraw);
    function drawing(x, y) {
      if(lineStart){
         lastX = x;
         lastY = y;
         lineStart = false;
      }
      ctx.beginPath();
      ctx.lineTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
    }
  }

  render() {
    return (
      <canvas ref="canvas" width={this.state.width} height={this.state.height}></canvas>
    )
  }
}
