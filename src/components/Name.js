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

  setRand()
  {
    // TODO: Check that D_NAMES.length is always within bounds
    let newNum = Math.floor(Math.random() * D_NAMES.length)
    console.log("setting Rand to", newNum)
    this.setState({rand: newNum})
    return newNum;
  }

  getNewName()
  {
    let randomNum = this.setRand();
    // When getting a new name, three compound parts are needed. 
    // The first should always be a noun
    // The other two have no restrictions on type
    // When displaying an entity's translated name, only the last name is ever translated
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
      <button onClick={() => this.getNewName()}>rand = {rand}</button>
    </div>;
  }
}

export default Name;
