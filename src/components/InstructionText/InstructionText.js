import React from 'react';
import './InstructionText.css';

export default function InstructionText(props){
    return (
      <div>
        <h3 className="instruction-header">Instruction: </h3>
        <span className="text">{this.props.text}</span>
      </div>
    )
}
