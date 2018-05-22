import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-text">a little sol</h1>
        <a href="#" className="logout-link">logout</a>
        <a href="#" className="gallery-link">my gallery</a>
        <a href="#" className="signup-link">signup</a>
        <a href="#"className="login-link">login</a>
      </div>

    )
  }
}
