import React  from 'react';
import { capitalize, trimWord } from '../../assets/utils';
import { wordToLang } from './getName';
import { wordTypes } from '../../assets/language_words_new';


function buildLastName(last1, last2) {
  if(last1 === "" && last2 === "") {
    // initially, bith terms should be empty
    return "";
  } else if (last1 && last2) {
    // pull the DFWord classes off of the constant object
    const DFWordFirst = wordTypes[last1];
    const DFWordSecond = wordTypes[last2];
    // using the DFWord class, convert the english words into alternate forms
    const frontCompound = getCompoundWordSegment(DFWordFirst, true);
    const rearCompound = getCompoundWordSegment(DFWordSecond, false);
    // after the first pass, both should be filled
    return capitalize(trimWord(frontCompound)) + trimWord(rearCompound);
  } else {
    // I don't know why this would ever be called
    throw Error(`invalid terms ${last1} and ${last2} passed to buildLastName()`);
  }
}

/**
 * Returns part of a compound word in one of the word forms
 * @param {DFWord} dfWord a DFWord class as defined in language_words.js. Contains all available forms of the word
 * @param {bool} isFirst denotes if the word is the front or rear compound
 * @returns a random word in an appropriate form
 */
function getCompoundWordSegment(dfWord, isFirst) {
  let wordFormPool = [];
  // word structure takes on this form [nn, vvvvv, a, p]
  if(isFirst) {
    // The first word in a compound name only uses [n-, v-vv-, a, -]
    if(dfWord.hasNounForm) {
      wordFormPool.push(dfWord.nouns[0]);
    }
    if(dfWord.hasVerbForm) {
      wordFormPool.push(dfWord.verbs[0]);
      wordFormPool.push(...dfWord.verbs.slice(2,4));
    }
    if(dfWord.hasAdjForm) {
      wordFormPool.push(dfWord.adjs[0]);
    }
  } else {
    // The second word in a compound name only uses [nn, vvvv-, a, -]
    if(dfWord.hasNounForm) {
      wordFormPool.push(dfWord.nouns[0]);
    }
    if(dfWord.hasVerbForm) {
      wordFormPool.push(...dfWord.verbs.slice(0,1));
    }
    if(dfWord.hasAdjForm) {
      wordFormPool.push(dfWord.adjs[0]);
    }
  }
  // remove dupes
  wordFormPool = wordFormPool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
  // return a random element
  return wordFormPool[Math.floor(Math.random()*wordFormPool.length)]
}

export function getNameBlock() {
  const {first, last1, last2, firstHeld, lastHeld} = this.state.entityName;
  const entFirst = wordToLang(first, this.state.selectedLanguage);
  const entLast1 = wordToLang(last1, this.state.selectedLanguage);
  const entLast2 = wordToLang(last2, this.state.selectedLanguage);
  const entLast = entLast1 + entLast2;
  const engLast = buildLastName(last1, last2);
  const englishName = (first ? capitalize(trimWord(entFirst)) : "") + " " 
  + (engLast ? engLast : "");
  return (
    <div className="entity-name">
      <p className="original">
        <span>{first ? "" : "Click 'Get Name' to start"}</span>
        <span
          className={
            firstHeld ? "held-name" : ""
          }
          onClick={() =>
            this.setState({ entityName: {...this.state.entityName, firstHeld: !firstHeld} })
          }
        >
          {(first ? capitalize(entFirst) : "") + " "} {/* print first name with a held or unheld class*/}
        </span>
        <span
          className={lastHeld ? "held-name" : ""}
          onClick={() =>
            this.setState({ entityName: {...this.state.entityName, lastHeld: !lastHeld} })
          }
        >
          {capitalize(entLast)} {/* print last name with a held or unheld class*/}
        </span>
      </p>
      <p className="translated">
        {englishName} {/* print translated name with smaller font*/}
      </p>
    </div>
  ); //nameBlock - Just a few words wrapped in spans
}