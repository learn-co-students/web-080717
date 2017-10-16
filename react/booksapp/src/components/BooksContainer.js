import React, { Component } from 'react'
import BookItem from './BookItem'
import { Route } from 'react-router-dom'
import GenreContainer from './GenreContainer'
import BooksList from './BooksList'


class BooksContainer extends Component {

  state = {
    books: [],
    cart: []
  }


  componentDidMount() {

    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
      .then((res) => res.json())
      .then((json) => {
        const books = json.items

        this.setState({
          books:books
        })
      })
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

    console.log(this.props)


    return (
      <div>
          <Route path="/books/:genre" component={GenreContainer} />
          <Route exact path="/books" render={() => <BooksList books={this.state.books}/>}/>
      </div>

    )
  }


}





export default BooksContainer
