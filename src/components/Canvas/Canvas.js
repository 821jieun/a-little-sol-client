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
      </div>
    )
  }

}

export const mapStateToProps = state => ({
  instruction: state.instruction,
  drawings: state.drawings,
  canvas: state.canvas,
  selectedInstructionText: state.selectedInstructionText
})


export default connect(mapStateToProps)(Canvas)
