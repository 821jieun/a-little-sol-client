
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
        <Canvas />
        <Footer />
      </div>
    );
  }
}

export default App;
