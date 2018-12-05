import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  width: '100px',
  height: '25px',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola desde REACT
          </p>
          <button style={styles}>
            Juega =>
          </button>
        </header>
      </div>
    );
  }
}

export default App;
