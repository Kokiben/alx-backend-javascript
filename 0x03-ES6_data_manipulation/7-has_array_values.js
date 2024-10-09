// 7-has_array_values.js
export default function hasValuesFromArray(valueSet, valuesArray) {
  for (const value of valuesArray) {
    if (!valueSet.has(value)) return false;
  }
  return true;
}
