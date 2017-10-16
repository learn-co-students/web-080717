import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom'
import BookContainer from './components/BookContainer'
import BookDetail from './components/BookDetail'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>

          <Route path="/books/:id" render={(props) => <BookDetail/>}/>
          <Route path="/books" component={BookContainer} />

        </Switch>

      </div>
  );
  }
}

export default App;
