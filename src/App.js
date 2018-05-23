// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import InstructionOptions from './components/InstructionOptions/InstructionOptions';
// import CanvasContainer from './containers/CanvasContainer/CanvasContainer';
// // import LoginForm from './components/LoginForm/LoginForm';
// // import SignupForm from './components/SignupForm/SignupForm';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <InstructionOptions />
//         <CanvasContainer />
//         <Footer />
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InstructionOptions from './components/InstructionOptions/InstructionOptions';
import Canvas from './components/Canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InstructionOptions />
        <Canvas />
        <Footer />
      </div>
    );
  }
}

export default App;
