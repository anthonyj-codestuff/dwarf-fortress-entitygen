/**
 * @exports languages each export is an array of words in the given language. All are in the same order.
 * ["abbey", "ace", "act", "after", "age"...]
 */
export const english = require('./language_DWARF.json').map((e,i) => e.original);
export const dwarven = require('./language_DWARF.json').map((e,i) => e.translated);
export const elven = require('./language_ELF.json').map((e,i) => e.translated);
export const human = require('./language_HUMAN.json').map((e,i) => e.translated);
export const goblin = require('./language_GOBLIN.json').map((e,i) => e.translated);
/**
 * @exports wordTypes an object with all english words as keys and an array with all word forms
 *  "abbey": ["noun"],
 *  "ace": ["noun"],
 *  "act": ["noun", "verb"]
 */
export const wordTypes = require('./language_words.json');
/**
 * @exports tokens an object with all pool names for keys and an array of words that fit the pool
 * "name_grassland": ["field", "plain", "prairie", "steppe"]
 */
export const tokens = require('./language_SYM.json');
/**
 * @exports allNameTokens an array of all valid word pools that can be used for entity names.
 * Name pools for caves, regions, wars, islands, etc are excluded
 */
export const allNameTokens = ["flowery", "nature", "primitive", "holy", "evil", "negator", "magic", "violent", "peace", "ugly", "death", "old", "subordinate", "leader", "new", "domestic", "mythic", "artifice", "color", "mystery", "negative", "romantic", "assertive", "aquatic", "protect", "restrain", "thought", "wild", "earth", "good", "balance", "boundary", "dance", "darkness", "light", "order", "festival", "family", "fire", "food", "freedom", "games", "luck", "music", "sky", "silence", "trade", "travel", "truth", "wealth"];

export const racePresets = {
  dwarf: [["artifice", "earth"], ["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
  elf: [["flowery", "nature"], ["domestic", "subordinate", "evil", "negative", "ugly", "negator"]],
  human: [[], ["subordinate", "evil", "negative", "ugly", "negator"]],
  goblin: [["evil"], ["domestic", "flowery", "holy", "peace", "negator", "good"]]
};

export const raceEnum = Object.keys(racePresets);

export const languageEnum = ["dwarven", "elven", "human", "goblin"];