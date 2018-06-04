import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../Input/Input';
import {login} from '../../actions/index';
import {required, nonEmpty} from '../../validators';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

export class LoginForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        redirectToHome: false
      }
    }

    onSubmit(values) {
          return this.props
            .dispatch(login(values.username, values.password))
            .then(() => {
              this.setState({ redirectToHome: true})
            })
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (this.state.redirectToHome) {
          return <Redirect to="/canvas" />
        }
        return (

            <div>
              <form
                  className="login-form"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
                  {error}
                  <label htmlFor="username">Username</label>
                  <Field
                      component={Input}
                      type="text"
                      name="username"
                      id="username"
                      validate={[required, nonEmpty]}
                  />
                  <label htmlFor="password">Password</label>
                  <Field
                      component={Input}
                      type="password"
                      name="password"
                      id="password"
                      validate={[required, nonEmpty]}
                  />
                  <button disabled={this.props.pristine || this.props.submitting}>
                      Log in
                  </button>
              </form>
              <div className="demo-info">
                <p>demo user: test</p>
                <p>demo password: test123456</p>
              </div>
            </div>

        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
