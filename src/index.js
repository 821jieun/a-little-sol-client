import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

console.log(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();
