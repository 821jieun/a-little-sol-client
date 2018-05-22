import * as actions from '../actions';

const initialState = {
  // drawings: [],
  //find the size of viewport to set it
  canvasSize: {
    x:
    y:
  }
  canvas: [
    {
           color: '#000000',
           enabled: false,
           x: 200,
           y: 200
       }, {
           color: '#F4D35E',
           enabled: false,
           x: 200,
           y: 200
       }, {
           color: '#F78764',
           enabled: false,
           x: 200,
           y: 200
       }
  ]
  // color: 'black'
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

    // case SIGN_UP:
    // case LOG_IN:
    // case LOG_OUT:


    default:
    return state;
  }

return newState;

};
