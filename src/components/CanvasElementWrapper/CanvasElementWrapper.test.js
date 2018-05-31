import React from 'react';
import { connect } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { shallowWithStore, mountWithStore, mountWithState } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import {saveCanvasToGallery} from '../../actions';

import CanvasElementWrapper from './CanvasElementWrapper';

describe('<CanvasElementWrapper />', () => {
  const ReactComponent = () => (<CanvasElementWrapper />);

  describe('state', () => {
    it('renders without crashing', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });

    it('Renders the canvas initially', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect((component).length).toEqual(1);
    });

  });
  //
// describe('example mountWithState', () => {
//     const ReactComponent = () => (<CanvasElementWrapper />);
//   it('works', () => {
//     const expectedState = 'expectedState';
//     const mapStateToProps = (state) => ({
//       state,
//     });
//     const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
//     const selectedInstructionText = 'test';
//     const component = mountWithState(<ConnectedComponent />, expectedState).dive();
//     expect(component.props().state).toBe(expectedState);
//   });
// });
  // describe('dispatch', () => {
  //   const ReactComponent = () => (<CanvasElementWrapper />);
  //
  //     it('works', () => {
  //       const action = {
  //         type: 'type',
  //       };
  //       const mapDispatchToProps = (dispatch) => ({
  //         dispatchProp() {
  //           dispatch(action);
  //         },
  //       });
  //       const store = createMockStore();
  //
  //       const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
  //       const component = shallow(<ConnectedComponent />, store).dive();
  //       component.props().dispatchProp();
  //       expect(store.isActionDispatched(action)).toBe(true);
  //     });
  //   });
  // // describe('dispatch', () => {
  //   const ReactComponent = () => (<CanvasElementWrapper />);
  //
  //     it('works', () => {
  //       const action = {
  //         type: 'type',
  //       };
  //       const mapDispatchToProps = (dispatch) => ({
  //         dispatchProp() {
  //           dispatch(action);
  //         },
  //       });
  //       const store = createMockStore();
  //
  //       const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
  //       const component = mountWithStore(<ConnectedComponent saveCanvasToGallery={saveCanvasToGallery('selectedInstructionText')}/>, store);
  //       component.props().dispatchProp();
  //       expect(store.isActionDispatched(action)).toBe(true);
  //     });
  //   });

  // describe('callback', () => {
  //   it('Should handle click', () => {
  //     const expectedState = 'expectedState';
  //     const mapStateToProps = (state) => ({
  //       state,
  //     });
  //     const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
  //     const callback = jest.fn();
  //     const component = mountWithStore(<ConnectedComponent handleClick={callback}/>, createMockStore(expectedState));
  //
  //     component.find('save-button').simulate('click')
  //
  //     expect(callback).toHaveBeenCalled();
  //   });
  //
  // });

});
