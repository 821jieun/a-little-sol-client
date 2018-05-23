// import React from 'react';
// import Canvas from '../../components/Canvas/Canvas';
// import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';
// import InstructionText from '../../components/InstructionText/InstructionText';
// import { connect } from 'react-redux';

// export class CanvasContainer extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       canvasSize: {
//         width: window.innerWidth,
//         height: window.innerHeight
//       },
//       instruction: [
//         {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'},
//         {option: 'Wall Drawing #579', text: 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.'},
//         {option: 'Wall Drawing #65', text: 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.'},
//         {option: 'Plate 3', text: 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.'},
//         {option: 'Wall Drawing #1112',  text:'Square with broken bands of color.'}
//       ]
//     }
//   }
//
//   renderCanvas() {
//
//   }
//
//
//
//   componentDidMount() {
//     //check viewport size
//     //set it in state
//     //depending on the viewport size, set the touch verse mouse up boolean in state
//
//   }
//
//   render() {
//     return (
//       <div>
//         <InstructionOptions options={this.state.instruction} />
//         <InstructionText text={this.state.instructionText}/>
//         <Canvas width={this.state.canvasSize.width} height={this.state.canvasSize.height}/>
//       </div>
//     )
//   }
// }
//
// export const mapStateToProps = state => ({
//   instructionText: state.instructionText,
//   drawings: state.drawings,
//   canvas: state.canvas,
//   currentlyDrawing: state.currentlyDrawing
// })
//
//
// export default connect(mapStateToProps)(CanvasContainer)
