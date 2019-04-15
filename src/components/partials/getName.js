/** Constants: An object full of arrays. Each array's key describes its theme */
import * as Constants from "../assets/languages";

/**
 * Calls getPool() for an array of valid names
 * @param {*} tags [[required tags],[forbidden tags]]
 * @param {*} language A string from the list of defined languages
 * @returns An object with the requested name in three pieces
 */
export function getName(tags, language) {
  let fullPool = getPool(tags[0]);
  this.setState({entityName: {...this.state.entityName, first: language}});
}

function getPool(posTags) {
  let pool = [];
  if (posTags.length > 0) {
    posTags.forEach(e => {
      console.log("posTags loop", e);
      Constants.tokens[e].forEach(f => pool.push(f));
    });
  } else {

  }

  // remove dupes
  pool = pool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
}