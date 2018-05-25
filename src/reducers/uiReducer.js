import { SCREEN_RESIZE } from '../actions';

const initialState = {
    screenWidth: typeof window === 'object' ? window.innerWidth : null
};

export const uiReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

    switch (action.type) {
        case SCREEN_RESIZE:
          newState.screenWidth = action.screenWidth;
          break;

        default:
          return state;
    }
    return newState;
};
