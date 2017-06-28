import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome to the WiFi Weather Station</h4>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

         <p><Link to="/">Home</Link></p>

         <p><Link to="/location">Location</Link></p>

         <p><Link to="/forcast">Forcast</Link></p>

         <p><Link to="/history">History</Link></p>

         <p><Link to="/notexist">Not Exist</Link></p>
         {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
