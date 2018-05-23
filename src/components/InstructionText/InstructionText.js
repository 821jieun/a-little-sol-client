import React from 'react';
import './InstructionText.css';

export default function InstructionText(props){
    return (
      <div>
        <h3 className="instruction-header">Instruction:<span className="text">{props.selectedInstructionText}</span></h3>

      </div>
    )
}
