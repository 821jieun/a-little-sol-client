import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import axios from 'axios';

//ui reducer
export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SET_CANVAS_HEIGHT = 'SET_CANVAS_HEIGHT';
export const screenResize = (screenWidth) => {
  return {
    type: SCREEN_RESIZE,
    screenWidth
  };
}

export const setCanvasHeight = (height) => ({
  type: SET_CANVAS_HEIGHT,
  height
})

//sol reducer
export const SAVE_CANVAS = 'SAVE_CANVAS';
export const SELECT_COLOR = 'SELECT_COLOR';
export const SEE_GALLERY = 'SEE_GALLERY';
export const RESET_CANVAS = 'RESET_CANVAS';
export const SELECT_INSTRUCTION = 'SELECT_INSTRUCTION';
export const DELETE_CANVAS = 'DELETE_CANVAS';
export const saveCanvasToGallery = (instruction, canvas) => dispatch => {
  // fetch(`${API_BASE_URL}/drawings/create/${localStorage.getItem('token')}`)
  //   .then((res) => {
  //     if(!res.ok) {
  //       return Promise.reject(res.statusText)
  //     }
  //     return res.json();
  //   })
  //   .then((board) => {
  //     dispatch(saveCanvas(instruction, canvas));
  //   })
  //make call to API to createDrawing here
  console.log(instruction, 'instruction')
  console.log(canvas, 'canvas')
};

export const deleteCanvas = canvas => ({
  type: DELETE_CANVAS,
  canvas
  //make call to API to deleteDrawing here
});
export const seeGallery = () => ({
  type: SEE_GALLERY
  //make call to API to getAll
});
export const selectInstruction = selectedInstructionText => ({
  type: SELECT_INSTRUCTION,
  selectedInstructionText
});
export const selectColor = color => ({
  type: SELECT_COLOR,
  color
});
export const resetCanvas = canvas => ({
  type: RESET_CANVAS
});

//form reducer
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = token => ({
    type: SET_AUTH_TOKEN,
    token
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const registerUser = (user) => {
  return dispatch => {
    return fetch(`${API_BASE_URL}/user/register`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
  }

};
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (token, dispatch) => {
    const decodedToken = jwtDecode(token);
    dispatch(setAuthToken(token));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(token);
};

export const login = (username, password) => {
  return dispatch => {
    dispatch(authRequest())
    axios.post(`${API_BASE_URL}/user/login`, {
    username: username,
    password: password
  })
  .then(function (response) {
    console.log(response, 'RESPONSE');
  })
  .catch(function (error) {
    console.log(error);
  });
    // axios.get(`${API_BASE_URL}/user/login`)
      // .then(response => {
        // console.log(response, 'dadadada response')
        // dispatch(receiveAlbum(response.data));
      // });
};
  //this is the step where token is set in local storage
//   return dispatch => {
//     dispatch(authRequest());
//     return (
//         fetch(`${API_BASE_URL}/user/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })
//             // Reject any requests which don't return a 200 status, creating
//             // errors which follow a consistent format
//             .then(res => {
//               console.log(res.body, 'RESSSSSSSSS dot body')
//
//               // console.log(res.data, 'RESDOTDATA HERE')
//               normalizeResponseErrors(res)
//             })
//             .then(res => {
//               res.json()
// }
//           )
//             .then(({token}) => storeAuthInfo(token, dispatch))
//             .catch(err => {
//                 const {code} = err;
//                 const message =
//                     code === 401
//                         ? 'Incorrect username or password'
//                         : 'Unable to login, please try again';
//                 dispatch(authError(err));
//                 // Could not authenticate, so return a SubmissionError for Redux
//                 // Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         _error: message
//                     })
//                 );
//             })
//     );
//   }
};

export const logout = () => ({
  type: LOGOUT
});
