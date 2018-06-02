import React from 'react';
import {connect} from 'react-redux';
import './Header.css';
import {Link} from 'react-router-dom';
import { clearAuth } from '../../actions/index';
import {clearAuthToken} from '../../local-storage';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

export class Header extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        if (this.props.currentUser) {
            return (
              <div className="header">
                <Link to="/" role="link" aria-label="return to landing page"><h1 className="header-text">a little sol</h1></Link>
                <Link to="/" role="link" aria-label="logout and return to landing page" onClick={() => this.logOut()} className="logout-link">logout</Link>
                <Link to="/gallery" role="link" aria-label="go to gallery" className="gallery-link">my gallery</Link>
                <Link to="/canvas" role="link" aria-label="go to canvas" className="gallery-link">canvas</Link>
              </div>
            )
          } else {
            return (
              <div className="header">
                <Redirect to="/" role="link" aria-label="return to landing page" />
                <Link to="/" role="link" aria-label="return to landing page"><h1 className="header-text">a little sol</h1></Link>
                <Link to="/register" role="link" aria-label="go to register page" className="signup-link">register</Link>
                <Link to="/login" role="link" aria-label="go to login page" className="login-link">login</Link>
              </div>
            )
          }
    }
  }

// )

export default connect(mapStateToProps)(Header)
