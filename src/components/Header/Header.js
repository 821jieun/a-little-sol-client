import React from 'react';
import {connect} from 'react-redux';
import './Header.css';
import {Link} from 'react-router-dom';
import { clearAuth } from '../../actions/index';
import {clearAuthToken} from '../../local-storage';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
    // loggedIn: state.auth.currentUser !== undefined
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
                <Link to="/"><h1 className="header-text">a little sol</h1></Link>
                <Link to="/" onClick={() => this.logOut()} className="logout-link">logout</Link>
                <Link to="/gallery" className="gallery-link">my gallery</Link>
                <Link to="/canvas" className="gallery-link">canvas</Link>
              </div>
            )
          } else {
            return (
              <div className="header">
                <Redirect to="/" />
                <Link to="/"><h1 className="header-text">a little sol</h1></Link>
                <Link to="/register" className="signup-link">register</Link>
                <Link to="/login" className="login-link">login</Link>
              </div>
            )
          }
    }
  }

// )

export default connect(mapStateToProps)(Header)
