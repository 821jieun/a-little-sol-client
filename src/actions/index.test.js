import {
  SELECT_COLOR,
  selectColor,
  GET_GALLERY,
  getGallery,
  RESET_CANVAS,
  resetCanvas,
  SELECT_INSTRUCTION,
  selectInstruction,
  deleteCanvas,
  DELETE_CANVAS,
  getGallerySuccess,
  GET_GALLERY_SUCCESS,
  onSuccessfulDelete,
  ON_SUCCESSFUL_DELETE,
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  authSuccess,
  AUTH_SUCCESS
} from './index';


describe('setAuthToken', () => {
  it('Should return the action', () => {
    const action = setAuthToken();
    expect(action.type).toEqual(SET_AUTH_TOKEN);
  });
});
describe('clearAuth', () => {
  it('Should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});
describe('authSuccess', () => {
  it('Should return the action', () => {
    const action = authSuccess();
    expect(action.type).toEqual(AUTH_SUCCESS);
  });
});
describe('authRequest', () => {
  it('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});
//
describe('onSuccessfulDelete', () => {
  it('Should return the action', () => {
    const action = onSuccessfulDelete();
    expect(action.type).toEqual(ON_SUCCESSFUL_DELETE);
  });
});
describe('getGallerySuccess', () => {
  it('Should return the action', () => {
    const action = getGallerySuccess();
    expect(action.type).toEqual(GET_GALLERY_SUCCESS);
  });
});
describe('selectInstruction', () => {
  it('Should return the action', () => {
    const action = selectInstruction();
    expect(action.type).toEqual(SELECT_INSTRUCTION);
  });
});
describe('selectColor', () => {
  it('Should return the action', () => {
    const action = selectColor();
    expect(action.type).toEqual(SELECT_COLOR);
  });
});
describe('resetCanvas', () => {
  it('Should return the action', () => {
    const action = resetCanvas();
    expect(action.type).toEqual(RESET_CANVAS);
  });
});
