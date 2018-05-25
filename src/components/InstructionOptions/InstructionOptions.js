import React from 'react';
import './InstructionOptions.css';
import { selectInstruction } from '../../actions/index';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  console.log('state of the state', state);
  return {
    screenWidth: state.ui.screenWidth,
    selectedInstructionText: state.sol.selectedInstructionText,
    drawings: state.sol.drawings,
    canvas: state.sol.canvas,
    instruction: state.sol.instruction
  }
}

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
    // debugger;
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



export default connect(mapStateToProps)(InstructionOptions)
