import React from 'react';
import './Canvas.css';
import CanvasContainer from '../../containers/CanvasContainer/CanvasContainer';

export default class Canvas extends React.Component {

  render() {
    return (
      <div className="canvas">
        <h3 className="instruction-header">Instruction: </h3>
        <span className="instruction-text"></span>
        <canvas id="draw"></canvas>
        <div className="color-buttons">
          <button className="blue-button">blue</button>
          <button className="yellow-button">yellow</button>
          <button className="red-button">red</button>
          <button className="green-button">green</button>
        </div>

      </div>
    )
  }
}
