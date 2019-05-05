import React  from 'react';
import { capitalize } from '../assets/utils';
import { wordToLang } from './getName';
import { wordTypes } from '../assets/language_words_new';

function trimWord(str){
  return str.split("_")[0];
}

function buildLastName(last1, last2) {
  if(last1 === "" && last2 === "") {
    // initially, bith terms should be empty
    return "";
  } else if (last1 && last2) {
    const DFWFirst = wordTypes[last1];
    const DFWSecond = wordTypes[last2];
    // after the first pass, both should be filled
    capitalize(trimWord(last1));
    capitalize(trimWord(last2));
    return last1 + last2;
  } else {
    // I don't know why this would ever be called
    throw Error(`invalid terms ${last1} and ${last2} passed to buildLastName()`);
  }
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