import React from 'react';
import './Canvas.css';
import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';
import InstructionText from '../../components/InstructionText/InstructionText';
import { connect } from 'react-redux';

export class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      instruction: [
        {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'},
        {option: 'Wall Drawing #579', text: 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.'},
        {option: 'Wall Drawing #65', text: 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.'},
        {option: 'Plate 3', text: 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.'},
        {option: 'Wall Drawing #1112',  text:'Square with broken bands of color.'}
      ]
    }
  }

  renderCanvas() {

  }

  componentDidMount() {
    //check viewport size?
    //set it in state
    //depending on the viewport size...
    //
  }
  render() {
    return (
      <div className="canvas">
        <InstructionOptions options={this.state.instruction} />
        <InstructionText text={this.state.instructionText}/>
        <canvas id="draw" width={this.state.canvasSize.width} height={this.state.canvasSize.height}></canvas>
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

export const mapStateToProps = state => ({
  instructionText: state.instructionText,
  drawings: state.drawings,
  canvas: state.canvas,
  currentlyDrawing: state.currentlyDrawing
})


export default connect(mapStateToProps)(Canvas)
// import React from 'react';
// import './Canvas.css';
//
// export default class Canvas extends React.Component {
//
//   render() {
//     return (
//       <div className="canvas">
//         <canvas id="draw"></canvas>
//         <div className="color-buttons">
//           <button className="blue-button">blue</button>
//           <button className="yellow-button">yellow</button>
//           <button className="red-button">red</button>
//           <button className="green-button">green</button>
//         </div>
//
//       </div>
//     )
//   }
// }
