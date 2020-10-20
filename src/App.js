import React, { Component } from 'react';
import './reset.css';
import './App.scss';
import NameModule from './components/NameModule/NameModule';
import Footer from './components/Footer/Footer';
// import TestModule from './components/TestModule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameModule/>
          {/* <TestModule/> */}
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
