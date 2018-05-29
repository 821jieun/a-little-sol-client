import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {screenResize} from './actions';

import {loadAuthToken} from './local-storage';

import {setAuthToken} from './actions/index';


const authToken = loadAuthToken();

if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();
