import * as Constants from "../../assets/constants";
import { wordTypes } from "../../assets/language_words";
import { capitalize, trimWord } from '../../assets/utils';

/**
 * retreives a pool of words and returns a random name
 * @param {*} tags [[required tags],[forbidden tags]]
 * @param {*} language A string from the list of defined languages
 * @returns An object with the requested name in three pieces. Name is returned in English. Translate it as needed.
 */
export function getName(tags) {
  let pool = getPool(tags);
  let first, last1, last2;
  console.log(pool.length);
  console.log(pool);
  do {
    // first name must have a noun form
    // no part of the name may have a prefix form. 
    first = pool[Math.floor(Math.random() * pool.length)];
  } while (!wordTypes[first].hasNounForm || wordTypes[first].hasPrefixForm);
  do {
    last1 = pool[Math.floor(Math.random() * pool.length)];
  } while (wordTypes[last1].hasPrefixForm);
  do {
    last2 = pool[Math.floor(Math.random() * pool.length)];
  } while (wordTypes[last2].hasPrefixForm);
  const compoundLast = buildCompoundNameEng(last1, last2);
  return { first, last1, last2, compoundLast };
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
  let poolIsGood = false;

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
  pool = pool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
  
  // before returning, check if the remaining pool is useable
  // a valid pool must have AT MINIMUM one word with a noun form
  for(let i=0; i<pool.length; i++) {
    if(wordTypes[pool[i]].hasNounForm) {
      poolIsGood = true;
      break;
    }
  };
  if(poolIsGood){
    return pool;
  } else {
    // If the pool is too small to use, return something fun
    return ["dagger"];
  }
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

/**
 * Used for constructing a translated compound name given two base words
 * Language-agnostic.
 * @param {string} last1 an english base word
 * @param {string} last2 an english base word
 * @returns a single, capitalized string consisting of both words converted to an appropriate form
 */
export function buildCompoundNameEng(last1, last2) {
  if(last1 === "" && last2 === "") {
    // initially, both terms should be empty
    return "";
  } else if (last1 && last2) {
    // pull the DFWord classes off of the constant object
    const DFWordFirst = wordTypes[last1];
    const DFWordSecond = wordTypes[last2];
    // using the DFWord class, convert the english words into alternate forms
    const frontCompound = getCompoundWordSegment(DFWordFirst, true);
    const rearCompound = getCompoundWordSegment(DFWordSecond, false);
    // after the first pass, both should be filled
    return capitalize(trimWord(frontCompound)) + trimWord(rearCompound);
  } else {
    // I don't know why this would ever be called
    throw Error(`invalid terms ${last1} and ${last2} passed to buildCompoundNameEng()`);
  }
}

/**
 * Returns part of a compound word in one of the word forms
 * @param {DFWord} dfWord a DFWord class as defined in language_words.js. Contains all available forms of the word
 * @param {bool} isFirst denotes if the word is the front or rear compound
 * @returns a random word in an appropriate form
 */
function getCompoundWordSegment(dfWord, isFirst) {
  let wordFormPool = [];
  // word structure takes on this form [nn, vvvvv, a, p]
  if(isFirst) {
    // The first word in a compound name only uses [n-, v-vv-, a, -]
    if(dfWord.hasNounForm) {
      wordFormPool.push(dfWord.nouns[0]);
    }
    if(dfWord.hasVerbForm) {
      wordFormPool.push(dfWord.verbs[0]);
      wordFormPool.push(...dfWord.verbs.slice(2,4));
    }
    if(dfWord.hasAdjForm) {
      wordFormPool.push(dfWord.adjs[0]);
    }
  } else {
    // The second word in a compound name only uses [nn, vvvv-, a, -]
    if(dfWord.hasNounForm) {
      wordFormPool.push(dfWord.nouns[0]);
    }
    if(dfWord.hasVerbForm) {
      wordFormPool.push(...dfWord.verbs.slice(0,1));
    }
    if(dfWord.hasAdjForm) {
      wordFormPool.push(dfWord.adjs[0]);
    }
  }
  // remove dupes
  wordFormPool = wordFormPool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
  // return a random element
  return wordFormPool[Math.floor(Math.random()*wordFormPool.length)]
}