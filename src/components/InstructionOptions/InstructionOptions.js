import React from 'react';
import './InstructionOptions.css';
import CanvasContainer from '../../containers/CanvasContainer/CanvasContainer';

export default class InstructionOptions extends React.Component {
  render() {
    const instructionOptions = this.props.map((option, index) => {
      let instructionClassName = option.split(" ").join("-");
      <li><a className={instructionClassName} index={index} href="#">{option}</a></li>

    })
    return (
      <div className="table">
        <ul className="options">
          {instructionOptions}
        </ul>
      </div>
    )
  }
}
