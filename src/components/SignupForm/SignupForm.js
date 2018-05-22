import React from 'react';
import './SignupForm.css';

export default class SignupForm extends React.Component {
  render() {
    return (
      <div className="signup">
        <form role="form" id="signup-form" className="signup-form" aria-live="assertive">
          <div className="input-field active">
            <label className="username" for="username">USERNAME: </label>
            <input id="signup-username" type="text" name="username" required />
          </div>
          <div className="input-field">
            <label className="password" for="password">PASSWORD: </label>
            <input id="signup-password" type="password" name="password" required />
          </div>
          <div className="input-field">
            <label className="firstName" for="firstName">FIRST NAME: </label>
            <input id="signup-firstName" name="firstName" />
          </div>
          <div className="input-field">
            <label className="lastName" for="lastName">LAST NAME: </label>
            <input id="signup-lastName" name="lastName" />
          </div>
          <div>
          <button type="submit" className="signup-button" aria-label="signup-button">signup</button>
        </div>
        </form>
      </div>
    )
  }
}
