import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Name/>
        </header>
      </div>
    );
  }
}

export default App;
