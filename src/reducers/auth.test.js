import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../actions/index';

import { authReducer } from './auth';

describe('authReducer', () => {
  const initialState = {
      token: null, // authToken !== null does not mean it has been validated
      currentUser: null,
      loading: false,
      error: null
  };

    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({

              token: null, // authToken !== null does not mean it has been validated
              currentUser: null,
              loading: false,
              error: null

        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});

describe('set auth token', () => {
  const testAuthToken = 'campfiresandmarshmallows';

    it('Should set auth token', () => {

      const initialState = {
          token: null, // authToken !== null does not mean it has been validated
      };
        const newState = authReducer(initialState, {type: SET_AUTH_TOKEN, token: testAuthToken});
        expect(newState).toEqual({
            token: 'campfiresandmarshmallows'
        });
    });
});
