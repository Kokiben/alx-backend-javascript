export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // This task is scoped to the if block
    let task2 = false; // This task2 is scoped to the if block
  }

  return [task, task2];  // Returns the outer scope task and task2
}
