import { wordTypes } from './constants';

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const deaccent = string => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * 
 * @param {string} word a string to be checked
 * @param {string} type one of ["noun", "verb", "adj", "prefix"]
 * @returns true if word has the type listed in language_words
 */
export function wordIsOfType(word, type) {
  // Take the word, retrieve the array of types from the grammar blob, and check to see if it can be considered "type"
  if (word) {
    let typeArray = wordTypes[word];
    return typeArray.includes(type);
  } else return true;
}