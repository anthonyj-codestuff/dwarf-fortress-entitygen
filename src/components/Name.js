import React, { Component } from "react";
const D_NAMES = require('./assets/language_DWARF.json');

class Name extends Component 
{
  constructor() {
    super();
    this.state = {
      original: [],
      translated: [],
      rand: null
    };
  }

  setRand()
  {
    this.setState({rand: Math.floor(Math.random() * this.state.original.length)})
  }

  /*
  Language blocks should appear in this format
  {
    DWARVEN: {

    }
  }
  */

  componentDidMount()
  {
    let rippedKeys = [];
    let rippedValues = [];
    for(let i = 0; i<D_NAMES.length; i++)
    {
      rippedKeys.push(D_NAMES[i]["original"]);
      rippedValues.push(D_NAMES[i]["translated"]);
    }
    this.setState({
      original: rippedKeys, 
      translated: rippedValues
    });
    this.setRand();
  }

  render() 
  {
    let { rand } = this.state;
    return <div>
      <p className="name">{this.state.original[rand]} -> {this.state.translated[rand]}</p>
      <button onClick={() => this.setRand()}>rand = {rand}</button>
    </div>;
  }
}

export default Name;
