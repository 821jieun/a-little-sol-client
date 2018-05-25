import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {screenResize} from './actions';


window.addEventListener('resize', () => {
  console.log('get state')
  store.getState();
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
