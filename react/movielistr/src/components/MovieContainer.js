import React from 'react'
import MovieList from './MovieList'
import { Redirect } from 'react-router-dom'
import { fetchMovies } from '../services/movies'


class MovieContainer extends React.Component {

  componentDidMount() {
    fetchMovies()
      .then(movies => {
        console.log(movies)
      })
  }


  render() {

    /// I need to know if youre logged and therefore if to show you your movies
    // if youre not logged in redirect
    return (
      <div>

        <p>Hello Logged In</p>
        <MovieList/>
      </div>
    )
  }
}

export default MovieContainer
