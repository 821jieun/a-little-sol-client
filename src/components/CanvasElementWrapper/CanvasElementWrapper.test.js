import React from 'react';
import { connect } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import CanvasElementWrapper from './CanvasElementWrapper';

describe('<CanvasElementWrapper />', () => {
  // const ReactComponent = () => (<div>dummy component</div>);
  const ReactComponent = () => (<CanvasElementWrapper />);
  describe('state', () => {
    it('works', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });
  });
  //
});
