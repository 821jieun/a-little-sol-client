import React from 'react';
import './Canvas.css';
import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';
import InstructionText from '../../components/InstructionText/InstructionText';
import { connect } from 'react-redux';
import P5Wrapper from 'react-p5-wrapper';
import CanvasElementWrapper from '../CanvasElementWrapper/CanvasElementWrapper';
import sketch from '../sketch';
import {setCanvasSize, saveCanvas} from '../../actions';

export class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }

  //??????
  // _onresize () {
  //   let w = window.innerWidth;
  //   let h = window.innerHeight;
  //   canvas.size(w,h);
  //   width = w;
  //   height = h;
  // };
  // setCanvasSize(width, height) {
  //   this.props.dispatch(setCanvasSize(width, height))
  // }

  updateCanvas() {
    let width = window.innerWidth
    let height = window.innerHeight
    console.log(width, height, 'width and height here!')
    // this.setCanvasSize(width, height)
  }

  componentDidMount() {
    //check viewport size?
    //set it in state
    //depending on the viewport size...
    //dispatch it?
    this.updateCanvas();
  }

  saveCanvas(instruction, canvas) {
    this.props.dispatch(saveCanvas(instruction, canvas))
  }

  handleClick(event) {
    event.preventDefault();
    console.log('hello1!!!! you made it!!')
    //save instruction off of store state into a variable
    //save canvas image off of store state ? into a variable
  }
  //with p5 wrapper
  // render() {
  //   return (
  //     <div className="canvas">
  //       <InstructionOptions />
  //       <InstructionText text={this.props.selectedInstructionText}/>
  //       <P5Wrapper id="draw" width={this.props.canvasSize.width} height={this.props.canvasSize.height} sketch={sketch}/>
  //       <div className="color-buttons">
  //         <button className="black-button">black</button>
  //         <button className="blue-button">blue</button>
  //         <button className="yellow-button">yellow</button>
  //         <button className="red-button">red</button>
  //         <button className="green-button">green</button>
  //       </div>
  //       <div className="save-and-reset-buttons">
  //         <button className="save-button" onClick={this.handleClick.bind(this)}>save</button>
  //         <button className="reset-button">reset</button>
  //       </div>
  //     </div>
  //   )
  // }

  // canvas element
  render() {
    return (
      <div className="canvas">
        <InstructionOptions />
        <InstructionText text={this.props.selectedInstructionText}/>
        <CanvasElementWrapper id="draw" width={this.state.canvasSize.width} height={this.state.canvasSize.height}/>
        <div className="color-buttons">
          <button className="black-button">black</button>
          <button className="blue-button">blue</button>
          <button className="yellow-button">yellow</button>
          <button className="red-button">red</button>
          <button className="green-button">green</button>
        </div>
        <div className="save-and-reset-buttons">
          <button className="save-button" onClick={this.handleClick.bind(this)}>save</button>
          <button className="reset-button">reset</button>
        </div>
      </div>
    )
  }

}

export const mapStateToProps = state => ({
  instruction: state.instruction,
  drawings: state.drawings,
  canvas: state.canvas,
  currentlyDrawing: state.currentlyDrawing,
  selectedInstructionText: state.selectedInstructionText,
  canvasSize: state.canvasSize
})


export default connect(mapStateToProps)(Canvas)
