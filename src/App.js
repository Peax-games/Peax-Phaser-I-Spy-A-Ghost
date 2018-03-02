import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ISpyAGhost from './Game/ISpyAGhost';

class App extends Component {
  render() {
    ISpyAGhost();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
