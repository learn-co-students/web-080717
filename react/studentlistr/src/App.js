import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentContainer from './components/StudentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentContainer/>
      </div>
    );
  }
}

export default App;
