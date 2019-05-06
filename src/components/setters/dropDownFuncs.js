import { racePresets } from "../assets/constants";

/**
 * Alters the current selected name pools to match that race's predefined set
 * Also changes the language to match the preset's native language
 * @param {string} e a string with incoming race
 */
export function setCurrentRace(e){
  this.setState({selectedCurrent: racePresets[e]});
}

/**
 * TODO: Why is the language name being passed in? shouldn't it be the race name that gets translated on the frontend?
 * @param {string} e 
 */
export function setCurrentLanguage(e){
  this.setState({selectedLanguage: e});
}