import React, { Component } from 'react'
import BookItem from './BookItem'


class BooksContainer extends Component {

  state = {
    books: [],
    cart: []
  }

  //
  // shouldComponentUpdate(nextProps) {
  //   return false
  // }



  componentWillReceiveProps(nextProps) {
    console.log("Next Props", nextProps)
    console.log("Previous Props", this.props)

    if (nextProps.books.length > this.props.books.length) {
      console.log("WOOO getting some books")
    }
  }

  componentDidMount() {
    console.log("App did mounting")
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
      .then((res) => res.json())
      .then((json) => {
        const books = json.items

        this.setState({
          books:books
        })
      })
  }

  componentWillMount() {
    console.log("Books will mount")
  }


  removeBook = (book) => {
    console.log(book)
    const remainingBooks = this.state.books.filter((item) => {
      return item.id !== book.id
    })
    this.setState({
      books: remainingBooks
    })
  }


  render() {
    console.log("Books Rendering")

    const bookItems = this.state.books.map((book,index) => {
      return <BookItem key={index} book={book} onRemove={this.removeBook}/>
    })
    return (
      <div>
        <ul>
          {bookItems}
        </ul>
      </div>

    )
  }
}

export default BooksContainer
