//
// Contains the generic getName function for getting the name of a civ entity. 
// Not suitable for FBs or artifacts except in special cases.
//

import store from './redux/store';
let PROPS;

// getName() //Should take in a language and a word pool. Outputs a standard name in the given language using the given pool

// wordIsOfType() //Grammar checking function. Checks to see that a given word has a given form

  export function initializeGenericProps() {
    PROPS = store.getState();
  }

  export function wordIsOfType(word, type) {
    // Take the word, retrieve the array of types from the grammar blob, and check to see if it can be considered "type"
    if (word) {
      let typeArray = PROPS.grammar[word];
      return typeArray.includes(type);
    } else return true;
  }

  export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  export function deaccent(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  export function buildNamePool(selectedPools) {
    //selectedPools should be an array with two arrays inside it.
      //the first is a list of required pools
      //the second is a list of forbidden pools. Forbidden words are removed even if they are also required
    let newPool = [];

    // If the pool options have changed since last time, rebuild the pool from scratch using the first part of the pool options
    // If the selectedCurrent[0] array is empty, the user has not selected any tags to be applied. Add all available names to the pool
    if (selectedPools[0].length > 0) {
      // add only the activated names to the pool
      for (let i = 0; i < selectedPools[0].length; i++) {
        newPool = newPool.concat(
          PROPS.tokens[selectedPools[0][i]]
        );
      }
    } else {
      // add all available names to the pool
      for (let i = 0; i < PROPS.tokens.length; i++) {
        newPool = newPool.concat(
          PROPS.tokens[PROPS.tokens[i]]
        );
      }
    }
    //remove dupes
    newPool = newPool.filter((e, i, self) => e !== "" && i === self.indexOf(e));
    
    // filtering out forbidden words (passing in the forbidden pools)
    return cullForbiddenNames(newPool, selectedPools[1]);

  }

  // export function getName(pool = []) { //change to getEntityName()
  export function getEntityName(pool, nameType = 1) {
    // To get a name, choose from the pool of names. The pool should already be filtered to include all relevant spheres
    let first, last1, last2;

    // given a pool of names, return an appropriate name (english words only. Translation will happen at the end)

    //TODO: Program crashes if the resulting pool of names is empty. Check for this.
    // do {
    //   first = pool[Math.floor(Math.random() * pool.length)];
    // } while (!wordIsOfType(first, "noun"));
    // last1 = pool[Math.floor(Math.random() * pool.length)];
    // last2 = pool[Math.floor(Math.random() * pool.length)];

    // let dwarfName = {
    //   firstName: PROPS["dwarf"][PROPS.english.indexOf(first)],
    //   lastName: capitalize (PROPS["dwarf"][PROPS.english.indexOf(last1)] +
    //                         PROPS["dwarf"][PROPS.english.indexOf(last2)]),
    //   transLastName: capitalize(last1) + "-" + capitalize(last2)
    // };
    // console.log(dwarfName);
  }

  export function cullForbiddenNames(pool, forbiddenArray) {
    // this function should be used to filter out any array of tokens passed in as the second parameter
    let forbiddenPool = [];
    for (let i in forbiddenArray) {
      // every item in forbiddenArray represents another array of words in state.tokens
      // add those arrays together to get a list of all forbidden words
      forbiddenPool = forbiddenPool.concat(
        PROPS.tokens[forbiddenArray[i]]
      );
    }
    // Remove dupes
    forbiddenPool = forbiddenPool.filter(
      (e, i, self) => e !== "" && i === self.indexOf(e)
    );
    // Filter one more time and remove any word that appears in the pool of forbidden names
    return pool.filter((e, i) => !forbiddenPool.includes(e));
  }