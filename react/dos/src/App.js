import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import InstructorCard from './components/InstructorCard'

class App extends Component {
  render() {
    let someValue = "Maxwell"
    let someInstructors = ["Alex", "Johann", "Lindsey", "Rachel"]
    let someItems = someInstructors.map((instructor) => {
      return <InstructorCard data={instructor}/>
    })

    return (
      <div>
        <div>
          <ClassComponent/>
          <FunctionalComponent/>
        </div>
        <p>Hello There {someValue}</p>
        <ul>
          {someItems}
        </ul>
      </div>
    );
  }
}















export default App;
