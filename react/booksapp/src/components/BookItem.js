import React, { Component } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
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
      <div>
          <Card>
            <Image src={this.props.book.volumeInfo.imageLinks.thumbnail} />
            <Card.Content>
              <Card.Header>
                {this.props.book.volumeInfo.title}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                {this.props.book.volumeInfo.description}
              </Card.Description>
            </Card.Content>

          </Card>
      </div>

    )
  }
}

export default BookItem
