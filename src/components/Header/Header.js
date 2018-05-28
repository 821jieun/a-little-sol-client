import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {getGallery, displayAllDrawingsInGallery} from '../../actions/index';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(event) {
    event.preventDefault();

    this.props.dispatch(getGallery())
    
  }

  render() {
    return (
      <div className="header">
        <Link to="/"><h1 className="header-text">a little sol</h1></Link>
        <Link to="/logout" className="logout-link">logout</Link>
        <Link to="/gallery" onClick={this.handleClick.bind(this)} className="gallery-link">my gallery</Link>
        <Link to="/signup" className="signup-link">signup</Link>
        <Link to="/login" className="login-link">login</Link>
      </div>

    )
  }
}

export default connect()(Header)
// export default connect(mapStateToProps)(Header)
