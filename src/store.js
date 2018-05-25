import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    createLogger({collapsed: true})
  )
);

// import {createStore, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
// import {solReducer} from './reducers';

// export default createStore(
//   combineReducers({
//     form: formReducer,
//     sol: solReducer
//   })
// );

//
// import {createStore, applyMiddleware} from 'redux';
// import {solReducer} from './reducers';
//
// import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
//
//
// export default createStore(
//   solReducer,
//   applyMiddleware(
//     thunk,
//     createLogger({collapsed: true})
//   )
// );
