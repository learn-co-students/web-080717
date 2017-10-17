import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import MovieContainer from './components/MovieContainer'
import { Route } from 'react-router-dom'
import MovieApi from './services/movielistrApi'
import authorize from './authorize'


class App extends Component {

  state = {
    user: {}
  }

  loginUser = (userObj) => {
    console.log(userObj)
    MovieApi.login(userObj)
      .then((json) => {
        console.log(json)


        if (json.message) {
          // somethign went wrong
          // show some error
        } else {
          localStorage.setItem('movieToken', json.token)
          this.setState({
            user: json.user
          })

        }
        // this.setState({
        //   user: json.user
        // })
        //
        // localStorage.setItem('movieToken', json.token)

      })
  }

  componentDidMount() {

  }



  loggedIn() {
    if (localStorage.getItem('movieToken')) {
      return true
    } else {
      return false
    }
  }
  render() {
    const AuthMovieContainer = authorize(MovieContainer)
    const AuthLoginForm = authorize(LoginForm)
    return (
      <div>

        <Route exact path="/" render={(props) => <AuthMovieContainer beef="steak" {...props} />} />
        <Route path="/login" render={(props) => <AuthLoginForm onLogin={this.loginUser} {...props}/>}/>

      </div>
  );
  }
}

export default App;
