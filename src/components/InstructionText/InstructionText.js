import React from 'react';
import './InstructionText.css';

export default InstructionText extends React.Component {
  render() {
    return (
      <div>
        <h3 className="instruction-header">Instruction: </h3>
        <span className="text">{this.props.text}</span>
      </div>
    )
  }
}
