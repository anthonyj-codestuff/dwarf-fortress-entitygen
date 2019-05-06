import React  from 'react';
import "../NamePoolModal.scss";
/**
 * @param {Array<string>} tokens - List of all trinary switch labels
 * @param {Array<string>} currentTokens - [[currently selected],[currently forbidden]]
 * @param {function} callback - sets state when toggles are flipped
 */
export function getSliderList(tokens, currentTokens, callback) {
  const toggleStateColor = [
    "trinary-toggle-red",
    "trinary-toggle-default",
    "trinary-toggle-green"
  ]; //used to set toggle switch classes based on value

  return tokens.map((e, i) => {
    return (
      <div key={"token-" + i} className="token-toggle-row">
        <span className="text-slider-option">{e}</span>
        <div>
          <input
            id={"ts-" + i}
            className={
              "trinary-toggle " +
              toggleStateColor[+getSliderValue(e, currentTokens) + 1]
            }
            type="range"
            value={getSliderValue(e, currentTokens)}
            onChange={event => callback(e, event.target.value)}
            min="-1"
            max="1"
            step="1"
          />
        </div>
      </div>
    );
  });
}

function getSliderValue(sliderWord, tokens) {
  // Set the initial value of the toggle based on what values are found in the selectedCurrent arrays
  return tokens[0].includes(sliderWord) &&
    !tokens[1].includes(sliderWord)
    ? 1
    : tokens[1].includes(sliderWord) &&
      !tokens[0].includes(sliderWord)
    ? -1
    : 0;
}