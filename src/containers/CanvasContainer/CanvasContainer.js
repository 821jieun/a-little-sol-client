import React from 'react';
import Canvas from '../../components/Canvas/Canvas';
import InstructionOptions from '../../components/InstructionOptions/InstructionOptions';

export default class CanvasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      listOfInstructionOptions: ['Wall Drawing #46', 'Wall Drawing #579', 'Wall Drawing #65', 'Plate 3', 'Wall Drawing #1112'],
      instructionText: ['Vertical lines, not straight, not touching, covering the wall evenly.', 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.', 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.', 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.', 'Square with broken bands of color.']
    }
  }
  //TODO:write renderCanvas method here
  renderCanvas() {

  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <InstructionOptions options={this.state.listOfInstructionOptions}/>
        <Canvas instructionText={this.state.instructionText} width={this.state.canvasSize.width} height={this.state.canvasSize.height}/>
      </div>
    )
  }
}
