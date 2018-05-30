import React from 'react';
import {connect} from 'react-redux';
import './Header.css';
import {Link} from 'react-router-dom';
import { clearAuth } from '../../actions/index';
import {clearAuthToken} from '../../local-storage';

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export class Header extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }
  render() {
    let logOutLink;
    let myGalleryLink;
      if (this.props.loggedIn) {
          return (
            <div className="header">
              <Link to="/"><h1 className="header-text">a little sol</h1></Link>
              <Link to="/logout" onClick={() => this.logOut()} className="logout-link">logout</Link>
              <Link to="/gallery" className="gallery-link">my gallery</Link>
            </div>
          )
        } else {
          return (
            <div className="header">
              <Link to="/"><h1 className="header-text">a little sol</h1></Link>
              <Link to="/register" className="signup-link">register</Link>
              <Link to="/login" className="login-link">login</Link>
            </div>
          )
        }
  }
}

export default connect(mapStateToProps)(Header)
