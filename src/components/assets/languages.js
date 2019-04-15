export const english = require('./language_DWARF.json').map((e,i) => e.original);
export const dwarf = require('./language_DWARF.json').map((e,i) => e.translated);
export const elf = require('./language_ELF.json').map((e,i) => e.translated);
export const human = require('./language_HUMAN.json').map((e,i) => e.translated);
export const goblin = require('./language_GOBLIN.json').map((e,i) => e.translated);
export const wordTypes = require('./language_words.json');
export const tokens = require('./language_SYM.json');
export const allNameTokens = ["flowery", "nature", "primitive", "holy", "evil", "negator", "magic", "violent", "peace", "ugly", "death", "old", "subordinate", "leader", "new", "domestic", "mythic", "artifice", "color", "mystery", "negative", "romantic", "assertive", "aquatic", "protect", "restrain", "thought", "wild", "earth", "good", "balance", "boundary", "dance", "darkness", "light", "order", "festival", "family", "fire", "food", "freedom", "games", "luck", "music", "sky", "silence", "trade", "travel", "truth", "wealth"];