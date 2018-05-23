import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Canvas from './Canvas/Canvas';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

export default class Main extends React.Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Canvas} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
    
        </Switch>
      </main>
    )
  }
}
