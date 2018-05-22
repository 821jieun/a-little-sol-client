import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

console.log(document.getElementById('root')); 
ReactDOM.render(
  <Provider store={store}>
    <App />,
    document.getElementById('root')
  </Provider>
  );
registerServiceWorker();
