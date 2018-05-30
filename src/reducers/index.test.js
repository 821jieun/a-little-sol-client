import {solReducer} from './index';
import {
  saveCanvasToGallery,
  SAVE_CANVAS,
  SELECT_COLOR,
  SELECT_INSTRUCTION,
  GET_GALLERY_SUCCESS,
  ON_SUCCESSFUL_DELETE,
  RESET_CANVAS
} from '../actions';

describe('solReducer', () => {

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

    it('Should set the initial state when nothing is passed in', () => {
        const state = solReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
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
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = solReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
})
    describe('save canvas', () => {

        it('Should save new canvas', () => {
          const canvasOne = 'canvas1';
          const initialState = {

            canvas: ''

          };
            const newState = solReducer(initialState, {type: SAVE_CANVAS, canvas: canvasOne});
            expect(newState).toEqual({
                canvas: canvasOne
            });
        });
    });
    
    describe('select instruction text', () => {

        it('Select instruction text', () => {
          const instructionTextSelected = {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'};
          const initialState = {
            selectedInstructionText: 'Select instruction to begin.',
            instruction: [
              {option: 'Wall Drawing #46', text: 'Vertical lines, not straight, not touching, covering the wall evenly.'},
              {option: 'Wall Drawing #579', text: 'Three concentric arches. The outside one is blue; the middle red; the inside one is yellow.'},
              {option: 'Wall Drawing #65', text: 'Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.'},
              {option: 'Plate 3', text: 'Using a black, hard crayon draw a straight line of any length.  From any point on that line draw another line perpendicular to the first.  From any point on the second line draw another line perpendicular to that line.  Repeat this procedure.'},
              {option: 'Wall Drawing #1112',  text:'Square with broken bands of color.'}
            ]
          };
            const newState = solReducer(initialState, {type: SELECT_INSTRUCTION, selectedInstructionText: 'Vertical lines, not straight, not touching, covering the wall evenly.'});
            expect(newState.selectedInstructionText).toEqual(
              instructionTextSelected.text
            );
        });
    });
