import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/index';

const initialState = {
    token: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
};
export const authReducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SET_AUTH_TOKEN:
    newState.token = action.token;
    break;

    case CLEAR_AUTH:
    newState.token = action.token;
    newState.currentUser = action.currentUser;
    break;

    case AUTH_REQUEST:
    newState.loading = action.loading;
    newState.error = action.error;
    break;

    case AUTH_SUCCESS:
    newState.loading = action.loading;
    newState.currentUser = action.currentUser;
    break;

    case AUTH_ERROR:
    newState.loading = action.loading;
    newState.error = action.error;
    break;

    default:
    return state;
  }
  return newState;
}
//
