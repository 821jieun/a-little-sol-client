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
  constructor(props) {
    super(props)
  }

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
      return <li key={index}><img className="drawing" alt={instruction} index={index} data-id={id} src={image}/>
      {instruction}
      <button onClick={this.handleDeleteClick.bind(this, id)}>delete</button></li>
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
