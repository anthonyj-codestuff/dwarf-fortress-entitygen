import React, { Component } from 'react';
import './reset.css';
import './App.css';
import NameModule from './components/NameModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameModule/>
        </header>
      </div>
    );
  }
}

export default App;
