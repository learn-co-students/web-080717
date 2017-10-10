import React from 'react'
import ReactDOM from 'react-dom'


// React.createClass


//const ClasComponent = React.createClass({})

class App extends React.Component {
  render() {
    // I NEED TO TELL REACT WHAT TO RENDER
    return (
      <p>Hello From App</p>
    )

  }
}


ReactDOM.render(<App/>, document.getElementById('root'))
