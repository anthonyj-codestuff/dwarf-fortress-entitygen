export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function deaccent(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}