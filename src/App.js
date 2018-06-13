import React, { Component } from 'react';
import Login from './Components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>My App</p>
        <Login/>
      </div>
    );
  }
}

export default App;
