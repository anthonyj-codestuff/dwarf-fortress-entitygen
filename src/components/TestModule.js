import React, { Component } from 'react';
import { wordTypes, wordForms, namesToTest } from './assets/language_words_new';

class TestModule extends Component {
  wordStats() {
    let str = "";
    namesToTest.forEach(x => {
      let hit;
      for(let testWord in wordTypes) {
        if(wordTypes[testWord].hasNounForm && wordTypes[testWord].nouns.includes(x)) {
          hit = testWord;
          str = str.concat(`${x}: `);
          break;
        } else if(wordTypes[testWord].hasVerbForm && wordTypes[testWord].verbs.includes(x)) {
          hit = testWord;
          str = str.concat(`${x}: `);
          break;
        } else if(wordTypes[testWord].hasAdjForm && wordTypes[testWord].adjs.includes(x)) {
          hit = testWord;
          str = str.concat(`${x}: `);
          break;
        } else if(wordTypes[testWord].hasPrefixForm && wordTypes[testWord].prefixs.includes(x)) {
          hit = testWord;
          str = str.concat(`${x}: `);
          break;
        } else {
          hit = "";
        }
      }
      str = str.concat(`${wordForms[hit]} [`);
      ["noun", "verb", "adj", "prefix"].forEach(type => {
        if(wordTypes[hit].hasWordType(type)){
          wordTypes[hit][`${type}s`].forEach(check => {
            str = str.concat(check === x ? "x" : "o");
          })
        } else {
          [...Array(wordTypes[hit][`${type}Max`])].map(none => {
            str = str.concat("-");
          })
        }
        str = str.concat(", ")
      })
      str = str.concat("]\n");
    });
    console.log(str);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.wordStats()}>get word stats</button>
      </div>
    );
  }
}

export default TestModule;