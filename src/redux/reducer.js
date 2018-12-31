import axios from 'axios';
const DWARF = require('../components/assets/language_DWARF.json');
const ELF = require('../components/assets/language_ELF.json');
const HUMAN = require('../components/assets/language_HUMAN.json');
const GOBLIN = require('../components/assets/language_GOBLIN.json');
const WORD_TYPES = require('../components/assets/language_words.json');

// FLAGS
let languagesInitalized = false

// CONSTANTS
const INITIALIZE_LANGUAGES = 'INITIALIZE_LANGUAGES';
const MERGE_LANGUAGES = 'MERGE_LANGUAGES';

// INITIAL APP STATE
const initialState = 
{
  english: [],
  dwarf: [],
  elf: [],
  human: [],
  goblin: [],
  grammar: [],
  merged: []
};

//REDUCER
export default function generalReducer(state = initialState, action) 
{
  switch (action.type) 
  {
    case "MERGE_LANGUAGES":
      console.log("Entering MERGE_LANGUAGES")
      return;
    case "INITIALIZE_LANGUAGES":
      if(action.payload !== false)
      {
        return {
          ...state,
          english: action.payload.english,
          dwarf: action.payload.dwarf,
          elf: action.payload.elf,
          human: action.payload.human,
          goblin: action.payload.goblin,
          grammar: action.payload.grammar
        };
      }
      else return state;
    default:
      console.log('Reached default state. Maybe something is pending.')
      return state;
  }
}

// ACTION CREATORS

export function initializeLanguages()
{
  let english, dwarf, elf, human, goblin, grammar;
  if(!languagesInitalized)
  {
    english = DWARF.map((e,i) => e.original);
    dwarf = DWARF.map((e,i) => e.translated);
    elf = ELF.map((e,i) => e.translated);
    human = HUMAN.map((e,i) => e.translated);
    goblin = GOBLIN.map((e,i) => e.translated);
    grammar = WORD_TYPES;
    // All this mapping doesn't need to happen more than once, so allow Redux to check if it has already done the work
    languagesInitalized = true;
    return {
      type: INITIALIZE_LANGUAGES,
      payload: {
        english,
        dwarf,
        elf,
        human,
        goblin,
        grammar
      }
    };
  }
  else
  {
    // returns false if the language files have already been mapped over
    return false;
  }
}

export function mergeLanguages() 
{
  let completeLanguage = {};
  return {
    type: MERGE_LANGUAGES,
    payload: completeLanguage
  };
}