import React from 'react';
import Canvas from './Canvas/Canvas';
import InstructionOptions from './InstructionOptions/InstructionOptions';

export default class CanvasContainer extends React.Component {
  construction(props) {
    super(props)

    this.state = {
      instructions: ['Wall Drawing #46', 'Wall Drawing #579', 'Wall Drawing #65', 'Plate 3', 'Wall Drawing #118']
    }
  }
  //in componentDidMount(?) get size of viewport in order to set canvas dimensions
  //TODO:write renderCanvas method here
  componentDidMount() {
    canvas = document.getElementById('mycanvas');

   // Set canvas dimensions
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
  }

  render() {
    return (
      <div>
        <InstructionOptions instructions={this.state.instructions}/>
        <Canvas />
      </div>
    )
  }
}
