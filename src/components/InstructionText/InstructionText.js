import React from 'react';
import './InstructionText.css';
import { connect } from 'react-redux';

export class InstructionText extends React.Component {
    render() {
      return (
        <div>
          <h3 className="instruction-header">Instruction: <span className="text">{this.props.selectedInstructionText}</span></h3>
        </div>
      )
    }
}

export const mapStateToProps = state => ({
  selectedInstructionText: state.sol.selectedInstructionText,
})


export default connect(mapStateToProps)(InstructionText)
