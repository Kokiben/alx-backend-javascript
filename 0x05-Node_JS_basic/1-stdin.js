// Display welcome message and prompt for user input
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  const userInput = process.stdin.read();

  if (userInput) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

// Handle program exit
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
