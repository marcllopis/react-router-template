import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './App.css';


class App extends Component {

  state = {
    home: {
      title: 'Home component',
      text: 'something extra about this component'
    },
    about: {
      title: 'about component',
      text: 'something extra about this component'
    },
    contact: {
      title: 'contact component',
      text: 'something extra about this component'
    },
  }

  render() {
      return (
        <div className="App">
          <Switch>
            {/* Good way to pass props to child components */}
            <Route
              exact path='/'
              render={props =>
                <Home
                  {...props}
                  title={this.state.home.title}
                  text={this.state.home.text}
                />}
            />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      );
  }
}


export default App;
