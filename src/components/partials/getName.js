/** Constants: An object full of arrays. Each array's key describes its theme */
import * as Constants from "../assets/constants";
import { wordIsOfType } from "../assets/utils"

/**
 * retreives a pool of words and returns a random name
 * @param {*} tags [[required tags],[forbidden tags]]
 * @param {*} language A string from the list of defined languages
 * @returns An object with the requested name in three pieces. Name is returned in English. Translate it as needed.
 */
export function getName(tags, language) {
  let pool = getPool(tags);
  let first, last1, last2;
  do {
    // first name must have a noun form. 
    first = pool[Math.floor(Math.random() * pool.length)];
  } while (!wordIsOfType(first, "noun"));
  last1 = pool[Math.floor(Math.random() * pool.length)];
  last2 = pool[Math.floor(Math.random() * pool.length)];
  return { first, last1, last2 };
}

/**
 * @param {*} tags 
 * @returns an array of words. Consists of all of the positive word pools minus the negative pools
 */
function getPool(tags) {
  console.log("getPool()");
  const inclusive = tags[0];
  const exclusive = tags[1];
  let pool = [];

  // build a pool from the positive labels
  // if there are no positive labels, merge all possible labels
  if (!inclusive || inclusive.length <= 0) {
    // no selected pool. Add all pools
    Constants.allNameTokens.forEach(e => {
      Constants.tokens[e].forEach(f => pool.push(f));
    });
  } else {
    inclusive.forEach(e => {
      // at least one pool is selected. add them together
      Constants.tokens[e].forEach(f => pool.push(f));
    });
  }

  // reduce list of forbidden tags to a single array
  const allForbidden = [].concat(...exclusive.map(e => Constants.tokens[e]));
  
  // remove negative labels from pool
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