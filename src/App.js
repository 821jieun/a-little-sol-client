import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Canvas from './components/Canvas/Canvas';
import InstructionOptions from './components/InstructionOptions/InstructionOptions';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import CanvasContainer from './components/CanvasContainer/CanvasContainer';

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
