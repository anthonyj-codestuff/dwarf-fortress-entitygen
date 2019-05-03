import React  from 'react';
import { getSliderList } from "./trinarySliderList";
import { getPresetMenu, getLanguageMenu } from "./dropDownList";
import "../NamePoolModal.scss";

/**
 *
 * @param {object} stuffObj
 */
export function getPoolState(stuffObj) {
  const { races, allTokens, currentLanguage, currentTokens, setRace, setLang, handleSwitch, toggleModal, clear } = stuffObj;
  return (
    <div className="token-list">
      <div className="token-list-head">
        <div>
          {getPresetMenu(races, currentTokens, setRace)}
        </div>
        <div>
          {getLanguageMenu(races, currentLanguage, setLang)}
        </div>
        <div>
          <button onClick={() => clear()}>
            Clear
          </button>
        </div>
        <div>
          <button class="" onClick={() => toggleModal()}>
            X
          </button>
        </div>
      </div>
      {getSliderList(allTokens, currentTokens, handleSwitch)}
    </div>
  );
}
