import * as Constants from "../assets/languages";

export function getName(tags, language) {
  let fullPool = getPool(tags[0], language);
  console.log("fullPool", JSON.stringify(Constants.tokens));
  this.setState({entityName: {...this.state.entityName, first: language}});
}

function getPool(posTags, language) {
  let pool = [];
  if (posTags.length > 0) {
    posTags.forEach(e => {
      console.log(e);
      Constants.tokens[e].forEach(f => pool.push(f))
    });
  } else {

  }
}