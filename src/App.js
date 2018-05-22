import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Canvas from './components/Canvas/Canvas';
import InstructionOptions from './components/InstructionOptions/InstructionOptions';
import InstructionOptions from './components/InstructionText/InstructionText';
// import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import CanvasContainer from './containers/CanvasContainer/CanvasContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InstructionOptions />
        <InstructionText />
        <CanvasContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
