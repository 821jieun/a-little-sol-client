
import React from 'react';
import {saveCanvasToGallery, screenResize} from '../../actions';
import { connect } from 'react-redux';
import './CanvasElementWrapper.css';

const mapStateToProps = (state) => {

  return {
    selectedInstructionText: state.sol.selectedInstructionText,
    canvas: state.sol.canvas,
    screenWidth: state.ui.screenWidth,
    currentUser: state.auth.currentUser
  }

};

  export default connect(
    mapStateToProps
  )(class CanvasElementWrapper extends React.Component {
    constructor() {
      super()

      this.state = {
        height: window.innerHeight,
        strokeStyle: 'black',
        clearRect: false,
        redirectToLogin: false
      }
    }

    componentDidMount() {
      this.setCanvasHeight();
      this.screenResize();
      this.updateCanvas();
      this.mobileTouchListeners();
    }

    componentDidUpdate() {
      this.updateCanvas();
      this.mobileTouchListeners();
    }

//
    //for mobile touch functionality
    mobileTouchListeners() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
      const r = 5; // draw radius
      let lastPt = null;
      ctx.lineWidth = r * 2;
      ctx.lineCap = "round";//butt||square
      ctx.strokeStyle = this.state.strokeStyle;

      canvas.addEventListener("touchmove", draw, false);
      canvas.addEventListener("touchend", end, false);

      function draw(e) {
        e.preventDefault();
        if (lastPt != null) {
          ctx.beginPath();
          ctx.moveTo(lastPt.x, lastPt.y);
          ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
          ctx.stroke();
        }
        lastPt = {x: e.touches[0].pageX, y:e.touches[0].pageY};
      }
      function end(e) {
        e.preventDefault();
        lastPt = null;
      }
    }

    screenResize() {
      this.props.dispatch(screenResize(this.props.screenWidth))
    }

    setCanvasHeight() {
      let height = window.innerHeight;
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
      ctx.strokeStyle = this.state.strokeStyle;
      var draw = false;
      var lineStart = true;
      var lastX, lastY;

      function yesDraw() {
        draw = true;
        lineStart = true;
      }


      // mouse
      function mouseMove(e) {
         const bounds = canvas.getBoundingClientRect();
         const x = e.pageX - bounds.left - window.scrollX;
         const y = e.pageY - bounds.top - window.scrollY;
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


    saveCanvasToGallery(instruction, canvas) {
      this.props.dispatch(saveCanvasToGallery(instruction, canvas));
    }
    //handle click on save button
    handleClick(event) {
      event.preventDefault();
      const canvasToSaveToGallery = this.refs.canvas;
      const canvasAsDataUrl = canvasToSaveToGallery.toDataURL();
      this.saveCanvasToGallery(this.props.selectedInstructionText, canvasAsDataUrl);
    }

    handleResetClick(event) {
      event.preventDefault();
      this.setState({
        clearRect: true
      })
    }

    handleColorClick(color, event) {
      event.preventDefault();
      this.setState({
        strokeStyle: color
      })

    }
    render() {
      if (this.state.clearRect) {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0,  canvas.width, canvas.height);
      }

      return (
        <div>
          <canvas
            id="draw"
            className="canvas"
            ref="canvas"
            height={this.state.height}
            width={this.props.screenWidth}
            aria-live="assertive"
            role="img"
            aria-label="drawing canvas"
            aria-atomic="true"
            tabindex="0">Unfortunately, your browser does not support HTML5 Canvas.
          </canvas>
          <div className="save-and-reset-buttons">
            <button id="save" className="save-button" onClick={this.handleClick.bind(this)}>save</button>
            <button className="reset-button" onClick={this.handleResetClick.bind(this)}>reset</button>
              <div className="color-buttons">
                <button className="black-button" onClick={this.handleColorClick.bind(this, 'black')}>black</button>
                <button className="blue-button" onClick={this.handleColorClick.bind(this, 'blue')}>blue</button>
                <button className="yellow-button" onClick={this.handleColorClick.bind(this, 'yellow')}>yellow</button>
                <button className="red-button" onClick={this.handleColorClick.bind(this, 'red')}>red</button>
                <button className="green-button" onClick={this.handleColorClick.bind(this, 'green')}>green</button>
              </div>
          </div>
        </div>
      )
    }
  }
)
