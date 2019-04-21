import React  from 'react';
import { getSliderList } from "./trinarySliderList";
import { getDropDownMenu } from "./dropDownList";

/**
 *
 * @param {object} stuffObj
 */
export function getPoolState(stuffObj) {
  const { races, allTokens, currentLanguage, currentRace, currentTokens, setRace, setLang, handleSwitch, clear } = stuffObj;
  return (
    <div className="token-list">
      <div className="token-list-head">
        <div>{getDropDownMenu("Race", races, currentRace, setRace)}</div>
        <div>
          {getDropDownMenu("Language", races, currentLanguage, setLang)}
        </div>
        <div>
          <button onClick={() => clear()}>
            Clear all options
          </button>
        </div>
      </div>
      {getSliderList(allTokens, currentTokens, handleSwitch)}
    </div>
  );
}
