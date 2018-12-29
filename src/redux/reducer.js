import axios from 'axios';
const DWARF = require('./assets/language_DWARF.json');
const ELF = require('./assets/language_ELF.json');
const HUMAN = require('./assets/language_HUMAN.json');
const GOBLIN = require('./assets/language_GOBLIN.json');
const WORD_TYPES = require('./assets/language_words.json');

//CONSTANTS
const INITIALIZE_LANGUAGES = 'INITIALIZE_LANGUAGES';
const MERGE_LANGUAGES = 'MERGE_LANGUAGES';

// INITIAL APP STATE
const initialState = 
{
  langInit = false,
  english = [],
  dwarf = [],
  elf = [],
  human = [],
  goblin = [],
  grammar = [],
  complete = []
};

//REDUCER
export default function generalReducer(state = initialState, action) 
{
  switch (action.type) 
  {
    case "MERGE_LANGUAGES":
      console.log("Entering MERGE_LANGUAGES")
      return;
    default:
      console.log('Reached default state. Maybe something is pending.')
      return state;
  }
}

// ACTION CREATORS

export function initializeLanguages()
{
  return {
    type: INITIALIZE_LANGUAGES,
    payload: ""
  };
}

export function mergeLanguages() 
{
  completeLanguage = {};
  return {
    type: MERGE_LANGUAGES,
    payload: completeLanguage
  };
}