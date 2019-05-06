import React  from 'react';
import { capitalize, trimWord } from '../../assets/utils';
import { wordToLang } from './getName';

export function getNameBlock() {
  const {first, last1, last2, transLast, firstHeld, lastHeld} = this.state.entityName;
  const entFirst = wordToLang(first, this.state.selectedLanguage);
  const entLast1 = wordToLang(last1, this.state.selectedLanguage);
  const entLast2 = wordToLang(last2, this.state.selectedLanguage);
  const entLast = entLast1 + entLast2;
  const engLast = transLast;
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