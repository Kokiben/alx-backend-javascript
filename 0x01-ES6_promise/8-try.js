// 8-try.js
export default function divideFunction(numvalue, denvalue) {
  if (denvalue === 0) throw new Error('cannot divide by 0'); // Throws an error for zero denominator
  return numvalue / denvalue; // Returns the result of the division
}
