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


// const store = createStore(
//
//   applyMiddleware(
//     thunk,
//     createLogger({collapsed: true})
//   ),
//   rootReducer
// );
//
// const authToken = loadAuthToken();
//
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
// }
//
// export default store;
