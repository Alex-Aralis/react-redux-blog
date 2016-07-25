import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Main from './Main'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
