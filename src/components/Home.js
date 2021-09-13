import React, { Component } from 'react';
import About from './About';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Route path="/" component={ Home } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default Home;
