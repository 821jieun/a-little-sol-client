import React from 'react';
import './Gallery.css';
import { connect } from 'react-redux';
import {getGallery, deleteCanvas} from '../../actions/index';


export const mapStateToProps = (state) => {
  return {
    drawings: state.sol.drawings
  }
}
export class Gallery extends React.Component {

  componentDidMount() {
    this.props.dispatch(getGallery())
  }

  handleDeleteClick(id, event) {
    event.preventDefault();
    this.props.dispatch(deleteCanvas(id))
  }

  render() {

    const galleryOptions = this.props.drawings.map((drawing, index) => {
      const instruction = drawing.instruction;
      const image = `${drawing.canvas}`;
      const id = drawing.id
      return <li key={index} className="saved-canvases"><img className="drawing" alt={instruction} index={index} data-id={id} src={image}/>
        <div className="instruction-and-delete-button">
          <p className="instruction">{instruction}</p>
          <button className="delete-button" onClick={this.handleDeleteClick.bind(this, id)}>delete</button>
        </div></li>

    });

    return (
      <div className="gallery">
        <ul className="gallery-drawings">
          {galleryOptions}
        </ul>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Gallery)
