import React from 'react'
import { Redirect, Link } from 'react-router-dom'


class LoginForm extends React.Component {


  state = {
    username: "",
    password: ""
  }

  handleUserInputChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  handlePassInputChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const userObj = { username: this.state.username, password: this.state.password }
    console.log(userObj)

    this.props.onLogin(userObj)
  }


  componentDidMount() {

  }



  render() {
    /// I need to know if youre logged and therefore if you're not then show you a login form
    // if you are ogged in redirect

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleUserInputChange} value={this.state.username} />
        <input type="text" onChange={this.handlePassInputChange} value={this.state.password} />
        <input type="submit" value="Login"/>
      </form>
      <Link to="/">Home</Link>
      </div>
    )
  }
}

export default LoginForm
