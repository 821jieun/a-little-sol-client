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
  selectedInstructionText: '',
  drawings: [],
  canvas: '',
  currentlyDrawing: false,
  instruction: [
    {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'},
    {option: 'Wall Drawing #579', text: 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.'},
    {option: 'Wall Drawing #65', text: 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.'},
    {option: 'Plate 3', text: 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.'},
    {option: 'Wall Drawing #1112',  text:'Square with broken bands of color.'}
  ],
  canvasSize: {
      width: window.innerWidth,
      height: window.innerHeight
    }
};

export const solReducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SELECT_INSTRUCTION:
      newState.selectedInstructionText = action.selectedInstructionText;
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

    //redux form related stuff
    // case SIGN_UP:
    // case LOG_IN:
    // case LOG_OUT:


    default:
    return state;
  }

return newState;

};
