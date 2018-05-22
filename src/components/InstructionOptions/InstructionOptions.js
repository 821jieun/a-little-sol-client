import React from 'react';
import './InstructionOptions.css';
import InstructionText from '../InstructionText/InstructionText';
import { SELECT_INSTRUCTION } from '../../actions';
import { connect } from 'react-redux';

export class InstructionOptions extends React.Component {
  constructor(props) {
    super(props);
  }
  selectInstruction(text) {
    this.props.dispatch(this.selectInstruction(text))
  }

  handleClick(event, index) {
    event.preventDefault();
    const text = this.props[index].text;
    this.selectInstruction(text)
  }

  render() {
    const instruction = this.props;
    let instructionText;

    const instructionOptions = this.props.map((instruction, index) => {

      let option = instruction.option;
      let instructionClassName = option.split(" ").join("-");

      return <li><a className={instructionClassName} index={index} onClick={this.handleClick.bind(this, index)} href="#">{option}</a></li>

    });


    return (
      <div className="table">
        <ul className="options">
          {instructionOptions}
        </ul>
        <InstructionText text={this.props.instructionText} />
      </div>
    )
  }
}
export const mapStateToProps = state => ({
  instructionText: state.instructionText,
  drawings: state.drawings,
  canvas: state.canvas,
  currentlyDrawing: state.currentlyDrawing
})


export default connect(mapStateToProps)(InstructionOptions)
