export const SAVE_CANVAS = 'SAVE_CANVAS';
export const MAKE_DRAWING = 'MAKE_DRAWING';
export const SELECT_COLOR = 'SELECT_COLOR';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SEE_GALLERY = 'SEE_GALLERY';
export const RESET_CANVAS = 'RESET_CANVAS';
export const SELECT_INSTRUCTION = 'SELECT_INSTRUCTION';

export const saveCanvas = canvas => ({
  type: SAVE_CANVAS,
  canvas
});
export const selectInstruction = instruction => ({
  type: SELECT_INSTRUCTION,
  instruction
});
// export const makeDrawing = canvas => ({
//   type: MAKE_DRAWING
// });
export const selectColor = color => ({
  type: SELECT_COLOR
});
export const signUp = () => ({
  type: SIGN_UP
});
export const logIn = () => ({
  type: LOG_IN
});
export const logOut = () => ({
  type: LOG_OUT
});
export const seeGallery = () => ({
  type: SEE_GALLERY
});
export const resetCanvas = canvas => ({
  type: RESET_CANVAS
});
