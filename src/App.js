import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import EntityName from './components/EntityName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Name/> */}
          <EntityName/>
        </header>
      </div>
    );
  }
}

export default App;
