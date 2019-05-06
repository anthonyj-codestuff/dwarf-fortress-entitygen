import React, { Component } from 'react';
import './reset.css';
import './App.css';
import NameModule from './components/NameModule/NameModule';
// import TestModule from './components/TestModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameModule/>
          {/* <TestModule/> */}
        </header>
      </div>
    );
  }
}

export default App;
