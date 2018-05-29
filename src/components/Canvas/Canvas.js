import React from 'react';
import './Canvas.css';
import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';
import InstructionText from '../../components/InstructionText/InstructionText';
import { connect } from 'react-redux';
import CanvasElementWrapper from '../CanvasElementWrapper/CanvasElementWrapper';
import Gallery from '../Gallery/Gallery';

export class Canvas extends React.Component {


  // canvas element
  render() {
    return (
      <div className="canvas">
        <InstructionOptions />
        <InstructionText text={this.props.selectedInstructionText}/>
        <CanvasElementWrapper />
        <div className="color-buttons">
          <button className="black-button">black</button>
          <button className="blue-button">blue</button>
          <button className="yellow-button">yellow</button>
          <button className="red-button">red</button>
          <button className="green-button">green</button>
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
