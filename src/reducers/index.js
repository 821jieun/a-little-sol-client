import {
  SAVE_CANVAS,
  MAKE_DRAWING,
  SELECT_COLOR,
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  SEE_GALLERY,
  RESET_CANVAS,
  SELECT_INSTRUCTION } from '../actions';

const initialState = {
  instructionText: '',
  drawings: [],
  canvas: '',
  currentlyDrawing: false
};

export const solReducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SELECT_INSTRUCTION:
      newState.instruction = action.instruction;
      break;

    case SAVE_CANVAS:
      newState.canvas = action.canvas;
      break;

    case SELECT_COLOR:
      newState.color = action.color;
      break;

    case MAKE_DRAWING:
      newState.currentlyDrawing = action.currentlyDrawing;
      break;
    //redux form stuff
    // case SIGN_UP:
    // case LOG_IN:
    // case LOG_OUT:


    default:
    return state;
  }

return newState;

};
