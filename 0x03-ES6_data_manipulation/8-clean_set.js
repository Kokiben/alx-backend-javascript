// 8-clean_set.js
// Create a function named cleanSet that returns a string
export default function cleanSet(valueSet, startString) {
  let resultString = '';
  
  if (!startString || !startString.length) return resultString;

  for (const item of valueSet) {
    if (item && item.startsWith(startString)) {
      resultString += `${item.slice(startString.length)}-`;
    }
  }

  // Remove the trailing '-' if resultString is not empty
  return resultString ? resultString.slice(0, -1) : resultString;
}
