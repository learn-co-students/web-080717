import React, { Component } from 'react'
class BookItem extends Component {



  constructor(props) {
    super(props)

    /// sum = sum + 1
    //this.handleRemove = this.handleRemove.bind(this)

  }


  componentWillUnmount() {
    console.log("UNmounting")
    console.log(this.props.book)
  }


  handleRemove = () => {
    //remove this book from the list

    /// wheres my book????
    console.log("handleRemove")
    this.props.onRemove(this.props.book)
  }


  render() {
    return (
      <li onClick={this.handleRemove}>{this.props.book.volumeInfo.title}</li>
    )
  }
}

export default BookItem
