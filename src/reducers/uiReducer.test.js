import {
    SCREEN_RESIZE
} from '../actions/index';

import { uiReducer } from './uiReducer';

describe('uiReducer', () => {
  const initialState = {
    screenWidth: typeof window === 'object' ? window.innerWidth : null
  };

    it('Should set the initial state when nothing is passed in', () => {
        const state = uiReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
          screenWidth: typeof window === 'object' ? window.innerWidth : null

        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = uiReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});
