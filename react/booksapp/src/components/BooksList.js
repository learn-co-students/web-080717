import React from 'react'
import BookItem from './BookItem'


class BooksList extends React.Component {
  render() {
    const bookItems = this.props.books.map((book,index) => {
      return <BookItem key={index} book={book} onRemove={this.removeBook}/>
    })
    return (
      <div>
        {bookItems}
      </div>

    )
  }
}

export default BooksList
