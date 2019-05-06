/** Constants: An object full of arrays. Each array's key describes its theme */
import * as Constants from "../assets/constants";
import { wordTypes } from "../assets/language_words_new";

/**
 * retreives a pool of words and returns a random name
 * @param {*} tags [[required tags],[forbidden tags]]
 * @param {*} language A string from the list of defined languages
 * @returns An object with the requested name in three pieces. Name is returned in English. Translate it as needed.
 */
export function getName(tags) {
  let pool = getPool(tags);
  let first, last1, last2;
  do {
    // first name must have a noun form AND it must not have a prefix form. 
    first = pool[Math.floor(Math.random() * pool.length)];
  } while (!wordTypes[first].hasNounForm || wordTypes[first].hasPrefixForm);
  last1 = pool[Math.floor(Math.random() * pool.length)];
  last2 = pool[Math.floor(Math.random() * pool.length)];
  return { first, last1, last2 };
}

/**
 * Takes in two arrays of strings that represent name pools from 'language_SYM'
 * @param inclusive An array of strings to pick a name from
 * @param exclusive An array of strings that are invalid name choices
 * @returns an array of words. Consists of all of the inclusive word pools minus the exclusive pools
 */
function getPool(tags) {
  const inclusive = tags[0];
  const exclusive = tags[1];
  let pool = [];

  // build a pool from the inclusive labels
  // if there are no positive labels, merge all possible labels
  if (!inclusive || inclusive.length <= 0) {
    // If no inclusive pools are selected, add all pools together
    Constants.allNameTokens.forEach(e => {
      Constants.tokens[e].forEach(f => pool.push(f));
    });
  } else {
    inclusive.forEach(e => {
      // at least one pool is selected. add them together
      Constants.tokens[e].forEach(f => pool.push(f));
    });
  }

  // reduce list of exclusive tags to a single array
  const allForbidden = [].concat(...exclusive.map(e => Constants.tokens[e]));
  
  // remove exclusive labels from pool
  pool = pool.filter(f => !allForbidden.includes(f));

  // remove dupes
  return pool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
}

/**
 * @returns the same word, but in the given language
 * @param {string} word an english word to be translated
 * @param {string} lang a word from the array of acceptable languages in languages.js
 */
export function wordToLang(word, lang) {
  if(word === ""){
    return "";
  }
  // TODO: check that lang is a valid choice
  const index = Constants.english.indexOf(word);
  return Constants[lang][index];
}