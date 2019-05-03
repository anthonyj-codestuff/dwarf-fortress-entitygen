import { racePresets } from "../assets/constants";

/**
 * Alters the current selected name pools to match that race's predefined set
 * @param {string} e a string with incoming race
 */
export function setCurrentRace(e){
  this.setState({selectedCurrent: racePresets[e]});
}

/**
 * @param {string} e 
 */
export function setCurrentLanguage(e){
  this.setState({selectedLanguage: e});
}