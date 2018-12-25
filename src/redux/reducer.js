import axios from 'axios';

//CONSTANTS
const MERGE_LANGUAGES = 'MERGE_LANGUAGES';

// INITIAL APP STATE
const initialState = 
{
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

export function mergeLanguages() 
{
  completeLanguage = {};
  return {
    type: MERGE_LANGUAGES,
    payload: completeLanguage
  };
}