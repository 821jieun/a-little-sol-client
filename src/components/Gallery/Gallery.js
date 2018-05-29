import React from 'react';
import './Gallery.css';
import { connect } from 'react-redux';
import {getGallery} from '../../actions/index';

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


  handleDeleteClick(index, e) {
    e.preventDefault();
    this.deleteCanvas(index)
  }

  render() {
  
    const galleryOptions = this.props.drawings.map((drawing, index) => {
      const instruction = drawing.instruction;
      const image = `${drawing.canvas}`;

      console.log(image, 'image')
      const id = drawing.id
      return <li key={index}><img className="drawing" alt={instruction} index={index} data-id={id} src={image}/>{instruction}</li>
      // return <li><img className="drawing" key={index} alt={instruction} index={index} data-id={id} src={image}/><button onClick={this.handleDeleteClick.bind(this, index)}>delete</button>{instruction}</li>
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
