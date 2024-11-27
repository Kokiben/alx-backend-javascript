// Display welcome message and prompt for user input
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input
process.stdin.on('readable', () => {
    const name = process.stdin.read(); // Read the input
    if (name !== null) {
        process.stdout.write(`Your name is: ${name.toString().trim()}\n`); // Output the user's name
        process.exit(); // End the program after input is processed
    }
});

// Handle program exit
process.on('exit', () => {
    console.log("This important software is now closing");
});
