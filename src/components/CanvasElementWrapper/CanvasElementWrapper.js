import React from 'react';
import {saveCanvasToGallery, screenResize} from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    selectedInstructionText: state.sol.selectedInstructionText,
    canvas: state.sol.canvas,
    screenWidth: state.ui.screenWidth
  }

};

  export default connect(
    mapStateToProps
  )(class CanvasElementWrapper extends React.Component {
    constructor() {
      super()

      this.state = {
        height: window.innerHeight
      }
    }

    componentDidMount() {
      this.setCanvasHeight();
      this.screenResize();
      this.updateCanvas();
    }

    screenResize() {
      console.log('inside canvas element wrapper')
      this.props.dispatch(screenResize(this.props.screenWidth))
    }
    setCanvasHeight() {
      let height = window.innerHeight;
      console.log(`i, the canvas, herby declare, i am this tall! ${height}`)
      this.setState({
        height: height
      })
    }

    updateCanvas() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
      const r = 10; // draw radius
      ctx.lineWidth = r * 2;
      ctx.lineCap = "round";//butt||square
      ctx.fillStyle = "black";
      var draw = false;
      var lineStart = true;
      var lastX, lastY;

      function yesDraw() { draw = true; lineStart = true }

      // touch
      function touchMove(e) {
         const bounds = canvas.getBoundingClientRect();
         const x = e.pageX - bounds.left - window.scrollX;
         const y = e.pageY - bounds.top - window.scrollY;
         // const x = e.pageX - bounds.left - scrollX;
         // const y = e.pageY - bounds.top - scrollY;
         if(draw && x > -r && x < canvas.width + r && y > -r && y < canvas.height + r){
            drawing(x,y);
         }
      }
      //touch
      document.addEventListener("touchmove",touchMove);
      document.addEventListener("touchdown",yesDraw);
      document.addEventListener("touchup",noDraw);

      // mouse
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

//
  saveCanvasToGallery(instruction, canvas) {
    this.props.dispatch(saveCanvasToGallery(instruction, canvas))
  }

  handleClick(event) {
    event.preventDefault();
    const canvasToSaveToGallery = this.refs.canvas;
    const canvasAsDataUrl = canvasToSaveToGallery.toDataURL('image/jpeg');
    this.saveCanvasToGallery(this.props.selectedInstructionText, canvasAsDataUrl);
  }
    render() {
      return (
        <div>
          <canvas id="draw" ref="canvas" height={this.state.height} width={this.props.screenWidth}></canvas>
          <div className="save-and-reset-buttons">
            <button className="save-button" onClick={this.handleClick.bind(this)}>save</button>
            <button className="reset-button">reset</button>
          </div>
        </div>
      )
    }
  }
)
