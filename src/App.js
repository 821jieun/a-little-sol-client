
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
