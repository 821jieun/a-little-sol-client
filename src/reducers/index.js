import {
  SAVE_CANVAS,
  SELECT_COLOR,
  SELECT_INSTRUCTION,
  GET_GALLERY_SUCCESS,
  ON_SUCCESSFUL_DELETE,
  RESET_CANVAS
} from '../actions';

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


//TODO: demo login account
//TODO: css!!!
//TODO: a11y
//TODO: why does touch mobile screen draw so much below the "finger"

export const solReducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RESET_CANVAS:
    newState.canvas = '';
    break;

    case ON_SUCCESSFUL_DELETE:
    newState.drawings = newState.drawings.filter((drawing) => {
      return drawing.id !== action.id
    })
    break;

    case SELECT_INSTRUCTION:
      newState.selectedInstructionText = action.selectedInstructionText;
      break;

    case SAVE_CANVAS:
      newState.canvas = action.canvas;
      break;

    case SELECT_COLOR:
      newState.color = action.color;
      break;

    case GET_GALLERY_SUCCESS:
      newState.drawings = action.drawings;
      break;

    default:
    return state;
  }

return newState;

};
