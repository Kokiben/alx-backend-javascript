// Display welcome message and prompt for user input
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input
process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Get the user input and trim whitespace
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit(); // End the program after input is processed
});

// Handle program exit
process.on('exit', () => {
    console.log("This important software is now closing");
});
