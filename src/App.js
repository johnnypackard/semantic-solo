import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageHeader from './components/Homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageHeader />
      </div>
    );
  }
}

export default App;
