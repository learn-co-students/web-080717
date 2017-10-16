import React, { Component } from 'react'

class GenreContainer extends Component {

  componentDidMount() {
    const genre = this.props.match.params.genre
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=40`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          
        })

      })
    console.log(this.props.match.params.genre)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hello Genres</p>
      <ul>
        <li></li>
      </ul>
      </div>
    )
  }
}


export default GenreContainer
