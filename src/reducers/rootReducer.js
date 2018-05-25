import {combineReducers} from 'redux';
import { solReducer }from './index';
import { uiReducer } from './uiReducer';

export default combineReducers({
  sol: solReducer,
  ui: uiReducer
});
