/** Constants: An object full of arrays. Each array's key describes its theme */
import * as Constants from "../assets/languages";

/**
 * Calls getPool() for an array of valid names
 * @param {*} tags [[required tags],[forbidden tags]]
 * @param {*} language A string from the list of defined languages
 * @returns An object with the requested name in three pieces
 */
export async function getName(tags, language) {
  let fullPool = getPool(tags);
  this.setState({entityName: {...this.state.entityName, first: language}});
}

/**
 * @param {*} tags 
 * @returns an array of words. Consists of all of the positive word pools minus the negative pools
 */
function getPool(tags) {
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
  const allForbidden = exclusive.map(e => Constants.tokens[e]).flat();
  
  // remove negative labels from pool
  pool = pool.filter(f => !allForbidden.includes(f));

  // remove dupes
  return pool.filter((e,i,s) => (e !== "" && s.indexOf(e) === i));
}