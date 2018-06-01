import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
import jwtDecode from 'jwt-decode';
import {saveAuthToken} from '../local-storage';
import axios from 'axios';

//ui reducer
export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const screenResize = (screenWidth) => {
  return {
    type: SCREEN_RESIZE,
    screenWidth
  };
}

//sol reducer
export const SAVE_CANVAS = 'SAVE_CANVAS';
export const SELECT_COLOR = 'SELECT_COLOR';
export const GET_GALLERY = 'GET_GALLERY';
export const RESET_CANVAS = 'RESET_CANVAS';
export const SELECT_INSTRUCTION = 'SELECT_INSTRUCTION';
export const DELETE_CANVAS = 'DELETE_CANVAS';
export const GET_GALLERY_SUCCESS = 'GET_GALLERY_SUCCESS';
export const ON_SUCCESSFUL_DELETE = 'ON_SUCCESSFUL_DELETE';

export const saveCanvasToGallery = (instruction, canvas) => {
  return dispatch => {
    axios.post(`${API_BASE_URL}/drawings/create/${localStorage.getItem('token')}`, {
      instruction: instruction,
      canvas: canvas
    })
    .then((response) => {
      console.log(response, 'response inside saveCanvasToCallery')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const deleteCanvas = (id) => {
  return dispatch => {
    axios.delete(`${API_BASE_URL}/drawings/delete/${id}/${localStorage.getItem('token')}`, {
    })
    .then(() => {
      console.log('deleted')
      dispatch(onSuccessfulDelete(id));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

export const onSuccessfulDelete = (id) => ({
  type: ON_SUCCESSFUL_DELETE,
  id
});

export const getGallerySuccess = (drawings) => ({
  type: GET_GALLERY_SUCCESS,
  drawings
});


export const getGallery = () => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/drawings/all/${localStorage.getItem('token')}`, {

    })
    .then((response) => {
      const drawingsArr = response.data.drawings;
      dispatch(getGallerySuccess(drawingsArr));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};

export const selectInstruction = selectedInstructionText => ({
  type: SELECT_INSTRUCTION,
  selectedInstructionText
});
export const selectColor = color => ({
  type: SELECT_COLOR,
  color
});
export const resetCanvas = (canvas) => ({
  type: RESET_CANVAS,
  canvas
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
const storeAuthInfo = (token, username, dispatch) => {
    // const decodedToken = jwtDecode(token);
    dispatch(setAuthToken(token));
    dispatch(authSuccess(username));
    saveAuthToken(token);
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());

    return (
        fetch(`${API_BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then((res) => {
              console.log(res, 'res here')
                 const token = res.data.token;
                 const username = res.data.username;
                 return storeAuthInfo(token, username, dispatch)
             })
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};
