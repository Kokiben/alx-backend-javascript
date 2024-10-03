// 9-try.js
export default function guardrail(mathFunction) {
  const rsltsQueue = []; // Renamed from queue to resultsQueue
  try {
    const rslt = mathFunction(); // Renamed from res to result
    rsltsQueue.push(rslt); // Append the result to resultsQueue
  } catch (error) { // Renamed from err to error
    rsltsQueue.push(error.toString()); // Append the error message to resultsQueue
  } finally {
    rsltsQueue.push('Guardrail was processed'); // Append the guardrail message
  }
  return rsltsQueue; // Return resultsQueue
}
