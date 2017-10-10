import React from 'react'
class StudentItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: true
    }
  }

  handleClick = (event) => {
    this.props.handleRemove(this.props.student)
  }


  render() {

    return (
      <li onClick={this.handleClick}>{this.props.student}</li>
    )
  }
}
export default StudentItem
