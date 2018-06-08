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


});
