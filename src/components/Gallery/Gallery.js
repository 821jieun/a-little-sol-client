import React from 'react';
import './Gallery.css';
import { connect } from 'react-redux';
import {deleteCanvas} from '../../actions/index';

export const mapStateToProps = (state) => {
  return {
    drawings: state.sol.drawings
  }
}
export class Gallery extends React.Component {

  deleteCanvas(canvas) {
    this.props.dispatch(deleteCanvas(canvas))
  }

  handleDeleteClick(index, e) {
    e.preventDefault();
    this.deleteCanvas(index)
  }

  render() {
    console.log(this.props.drawings, 'inside drawings in gallery')
    const galleryOptions = this.props.drawings.map((drawing, index) => {
      const instruction = drawing.instruction;
      const image = drawing.canvas;
      const id = drawing.id
      return <li><img className="drawing" key={index} index={index} data-id={id} src={image}/><button onClick={this.handleDeleteClick.bind(this, index)}>delete</button>{instruction}</li>
    });

    return (
      <div className="gallery">
        <h2>My Gallery</h2>
        <ul className="gallery-drawings">
          {galleryOptions}
        </ul>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Gallery)
