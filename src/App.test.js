// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { connect } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

describe('<App />', () => {
  const ReactComponent = () => (<App />);
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

    // it('renders without crashing', () => {
    //   const div = document.createElement('div');
    //   ReactDOM.render(<App />, div);
    //   ReactDOM.unmountComponentAtNode(div);
    // });
  });
  //
});
