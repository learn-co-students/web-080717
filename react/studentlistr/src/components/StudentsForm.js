import React from 'react'


class StudentsForm extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onAdd(this.state.input)
    this.setState({
      input: ""
    })
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.input}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
export default StudentsForm
