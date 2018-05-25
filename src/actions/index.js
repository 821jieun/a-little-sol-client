//ui reducer
export const SCREEN_RESIZE = 'SCREEN_RESIZE';
//sol reducer
export const SAVE_CANVAS = 'SAVE_CANVAS';
export const SELECT_COLOR = 'SELECT_COLOR';
export const SEE_GALLERY = 'SEE_GALLERY';
export const RESET_CANVAS = 'RESET_CANVAS';
export const SELECT_INSTRUCTION = 'SELECT_INSTRUCTION';
export const DELETE_CANVAS = 'DELETE_CANVAS';
export const SET_CANVAS_HEIGHT = 'SET_CANVAS_HEIGHT';

//form reducer
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const screenResize = (screenWidth) => {
  return {
    type: SCREEN_RESIZE,
    screenWidth
  };
}

export const setCanvasHeight = (height) => ({
  type: SET_CANVAS_HEIGHT,
  height
})

export const saveCanvasToGallery = (instruction, canvas) => dispatch => {
  // fetch(`${API_BASE_URL}/drawings/create/${localStorage.getItem('token')}`)
  //   .then((res) => {
  //     if(!res.ok) {
  //       return Promise.reject(res.statusText)
  //     }
  //     return res.json();
  //   })
  //   .then((board) => {
  //     dispatch(saveCanvas(instruction, canvas));
  //   })
  //make call to API to createDrawing here
  console.log(instruction, 'instruction')
  console.log(canvas, 'canvas')
};

export const deleteCanvas = canvas => ({
  type: DELETE_CANVAS,
  canvas
  //make call to API to deleteDrawing here
});
export const seeGallery = () => ({
  type: SEE_GALLERY
  //make call to API to getAll
});
export const selectInstruction = selectedInstructionText => ({
  type: SELECT_INSTRUCTION,
  selectedInstructionText
});
export const selectColor = color => ({
  type: SELECT_COLOR,
  color
});
export const resetCanvas = canvas => ({
  type: RESET_CANVAS
});

//redux form stuff
export const signUp = () => ({
  type: SIGN_UP
});
export const logIn = () => ({
  type: LOG_IN
});
export const logOut = () => ({
  type: LOG_OUT
});
