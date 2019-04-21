import React  from 'react';
import { capitalize } from '../assets/utils';
import { wordToLang } from './getName';

function trimWord(str){
  return str.split("_")[0];
}

export function getNameBlock() {
  const {first, last1, last2, firstHeld, lastHeld} = this.state.entityName;
  const entFirst = wordToLang(first, this.state.selectedLanguage);
  const entLast1 = wordToLang(last1, this.state.selectedLanguage);
  const entLast2 = wordToLang(last2, this.state.selectedLanguage);
  const entLast = entLast1 + entLast2;
  const engLast = last1 + last2;
  const englishName = (first ? capitalize(trimWord(entFirst)) : "") + " " 
  + (engLast ? capitalize(trimWord(last1)) + "-" + capitalize(trimWord(last2)) : "");
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