import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login">
        <form role="form" id="login-form" class="login-form">
            <div class="input-field">
              <label class="username" for="username">USERNAME: </label>
              <input id="login-username" type="text" name="username" required />
            </div>
            <div class="input-field">
              <label class="password" for="password">PASSWORD: </label>
              <input id="login-password" type="password" name="password" required />
            </div>
            <div>
              <button type="submit" class="login-button" aria-label="login-button">login</button>
            </div>
          </form>
      </div>
    )
  }
}
