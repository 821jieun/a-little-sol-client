import React from 'react';
import './InstructionOptions.css';
import CanvasContainer from '../../containers/CanvasContainer/CanvasContainer';

export default class InstructionOptions extends React.Component {
  render() {
    const instructions = this.props.map((instruction, index) => {
      let instructionClassName = instruction.split(" ").join("-");
      <li><a className={instructionClassName} index={index} href="#">{instruction}</a></li>

    })
    return (
      <div className="table">
        <ul className="options">
          {instructions}
        </ul>
      </div>
    )
  }
}
