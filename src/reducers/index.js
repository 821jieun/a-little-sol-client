import {
  SAVE_CANVAS,
  SELECT_COLOR,
  SEE_GALLERY,
  SELECT_INSTRUCTION,
  DISPLAY_ALL_DRAWINGS_IN_GALLERY } from '../actions';

const initialState = {
  selectedInstructionText: 'Select instruction to begin.',
  drawings: [],
  canvas: '',
  instruction: [
    {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'},
    {option: 'Wall Drawing #579', text: 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.'},
    {option: 'Wall Drawing #65', text: 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.'},
    {option: 'Plate 3', text: 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.'},
    {option: 'Wall Drawing #1112',  text:'Square with broken bands of color.'}
  ]
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

    case DISPLAY_ALL_DRAWINGS_IN_GALLERY:
      newState.drawings = action.drawings;
      break;

    default:
    return state;
  }

return newState;

};
