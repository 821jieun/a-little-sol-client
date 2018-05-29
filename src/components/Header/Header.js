import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <Link to="/"><h1 className="header-text">a little sol</h1></Link>
        <Link to="/logout" className="logout-link">logout</Link>
        <Link to="/gallery" className="gallery-link">my gallery</Link>
        <Link to="/register" className="signup-link">register</Link>
        <Link to="/login" className="login-link">login</Link>
      </div>

    )
  }
}

// export default connect()(Header)
// export default connect(mapStateToProps)(Header)
