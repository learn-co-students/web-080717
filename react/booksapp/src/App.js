import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksContainer from './components/BooksContainer'
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'




/// what the hell is this app doing?


class App extends Component {



  render() {

    return (
      <Grid>
      <div className="App">
        {/*<Route exact path="/" component={Home}/>*/}
        <Route exact path="/" render={(props) => <Home name="Beef" {...props}/>}/>
        <Route path="/books" component={BooksContainer}/>



        <a href="/test">Hello Test</a>
        <Link to="/books">Books</Link>

      </div>
      </Grid>
    );
  }


}



class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <p>Welcome {this.props.name}</p>
    )
  }
}


















export default App;
