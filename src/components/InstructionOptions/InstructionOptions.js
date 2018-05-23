import React from 'react';
import './InstructionOptions.css';
import InstructionText from '../InstructionText/InstructionText';
import { selectInstruction } from '../../actions/index';
import { connect } from 'react-redux';

export class InstructionOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  selectInstruction(text) {
    this.props.dispatch(selectInstruction(text))
  }

  handleClick(index, event) {
    event.preventDefault();
    const text = this.props.instruction[index].text;
    this.selectInstruction(text)
  }

  render() {
    console.log(this.props, 'this dot props in instruction options')
    const instructionOptions = this.props.instruction.map((instruction, index) => {

      let option = instruction.option;
      let instructionClassName = option.split(" ").join("-");

      return <li><a className={instructionClassName} key={index} index={index} onClick={this.handleClick.bind(this, index)} href="#">{option}</a></li>

    });


    return (
      <div className="table">
        <ul className="options">
          {instructionOptions}
        </ul>
      </div>
    )
  }
}
export const mapStateToProps = state => ({
  selectedInstructionText: state.selectedInstructionText,
  drawings: state.drawings,
  canvas: state.canvas,
  currentlyDrawing: state.currentlyDrawing,
  instruction: state.instruction
})


export default connect(mapStateToProps)(InstructionOptions)
