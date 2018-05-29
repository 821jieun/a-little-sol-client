import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Canvas from './Canvas/Canvas';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Gallery from './Gallery/Gallery';
import LandingPageContent from './LandingPageContent/LandingPageContent';

export default class Main extends React.Component {

  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Canvas} />
          <Route exact path="/landingpage" component={LandingPageContent} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </main>
    )
  }
}
