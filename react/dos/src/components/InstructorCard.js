import React from 'react'

class InstructorCard extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <li>{this.props.data} is awesome</li>
    )
  }
}

export default InstructorCard
