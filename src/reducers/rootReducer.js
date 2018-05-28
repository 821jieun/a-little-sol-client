import {combineReducers} from 'redux';
import { solReducer }from './index';
import { uiReducer } from './uiReducer';
import { reducer as reducerForm } from 'redux-form';
import { authReducer } from './authReducer';

export default combineReducers({
  form: reducerForm,
  sol: solReducer,
  ui: uiReducer,
  auth: authReducer
});
