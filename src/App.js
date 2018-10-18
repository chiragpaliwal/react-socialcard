import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="SocialCard">
        <div className="logo">
          <p>DEV</p>
        </div>
        <h1>Learning React? Start Small.</h1>
        <div className="author">
          <p>Dave Ceddia</p>
        </div>
        <div className="bottomInfo">
          <p><strong>Learning React? Start Small.</strong></p>
          <p>Can't pry yourself away from tutorials?
            The cure is to make tiny little experiment apps.
          </p>
          <a href="//dev.to">dev.to</a>
        </div>
      </div>
    );
  }
}

export default App;
