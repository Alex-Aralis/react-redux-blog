import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import BlogFooter from './BlogFooter'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BlogFooter />
      </div>
    );
  }
}

export default App;
