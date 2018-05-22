import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {solReducer} from './reducers';

export default createStore(
  combineReducers({
    form: formReducer,
    sol: solReducer
  })
);