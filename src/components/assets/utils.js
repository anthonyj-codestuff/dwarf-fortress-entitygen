export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const deaccent = string => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Used to trim descriptions off of df words. e.g. "wind_clock" -> "wind"
 * @param {string} str simple string. May or may not contain a '_'
 * @returns {string} all of the string that comes before the first underscore
 */
export const trimWord = str => {
  return str.split("_")[0];
}