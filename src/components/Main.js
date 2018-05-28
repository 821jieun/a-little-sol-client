import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Canvas from './Canvas/Canvas';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default class Main extends React.Component {

  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Canvas} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </main>
    )
  }
}
