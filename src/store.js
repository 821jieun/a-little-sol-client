import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

// import {loadAuthToken} from './local-storage';
//
// import {setAuthToken} from './actions/index';

export default createStore(
    rootReducer,
  applyMiddleware(
    thunk,
    createLogger({collapsed: true})
  )

);
