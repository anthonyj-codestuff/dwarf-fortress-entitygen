import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import Entity from './components/Entity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Name/> */}
          <Entity/>
        </header>
      </div>
    );
  }
}

export default App;
