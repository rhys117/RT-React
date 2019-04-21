export function valuesArrayToValueTextKeys(array) {
  let results = [];
  array.map((option) => results.push({ text: option, value: option }));
  return results;
}