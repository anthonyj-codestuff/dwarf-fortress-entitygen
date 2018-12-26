import React, { Component } from "react";
const D_NAMES = require('./assets/language_DWARF.json');
const WORDS = require('./assets/language_words.json');

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

  setRand(length)
  {
    // TODO: Check that D_NAMES.length is always within bounds
    let newNum = Math.floor(Math.random() * D_NAMES.length)
    console.log("setting Rand to", newNum)
    this.setState({rand: newNum})
  }

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
    let englishWord = this.state.original[rand];
    let dwarfWord = this.state.translated[rand];
    return <div>
      <p className="name">{englishWord} -> {dwarfWord}</p>
      <p className="name">{englishWord} is a { englishWord ? WORDS[englishWord.toUpperCase()][0] : null}</p>
      <button onClick={() => this.setRand()}>rand = {rand}</button>
    </div>;
  }
}

export default Name;
