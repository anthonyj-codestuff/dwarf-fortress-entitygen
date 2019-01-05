import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import Dwarf from './components/Dwarf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Name/> */}
          <Dwarf/>
        </header>
      </div>
    );
  }
}

export default App;
