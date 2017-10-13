import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksContainer from './components/BooksContainer'




/// what the hell is this app doing?


class App extends Component {

  componentWillMount() {
    console.log("Will Mounting")
  }


  render() {
    console.log("App rendering")
    return (
      <div className="App">
        <BooksContainer/>
      </div>
    );
  }


}






export default App;
