import React from 'react';
import './Canvas.css';
import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';
import InstructionText from '../../components/InstructionText/InstructionText';
import { connect } from 'react-redux';

export class Canvas extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   canvasSize: {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   }
    // }
  }

  renderCanvas() {

  }

  componentDidMount() {
    //check viewport size?
    //set it in state
    //depending on the viewport size...
    //dispatch it?
  }

  render() {
    return (
      <div className="canvas">
        <InstructionOptions />
        <InstructionText text={this.props.selectedInstructionText}/>
        <canvas id="draw" width={this.props.canvasSize.width} height={this.props.canvasSize.height}></canvas>
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
  instruction: state.instruction,
  drawings: state.drawings,
  canvas: state.canvas,
  currentlyDrawing: state.currentlyDrawing,
  selectedInstructionText: state.selectedInstructionText,
  canvasSize: state.canvasSize
})


export default connect(mapStateToProps)(Canvas)
///
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
