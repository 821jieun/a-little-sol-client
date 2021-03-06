
  import React from 'react';
  import { connect } from 'react-redux';
  import { shallow, mount } from 'enzyme';
  import { shallowWithStore } from 'enzyme-redux';
  import { createMockStore } from 'redux-test-utils';

  import InstructionOptions from './InstructionOptions';

  describe('<InstructionOptions />', () => {
    const ReactComponent = () => (<InstructionOptions />);
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
    });
    //
  });
