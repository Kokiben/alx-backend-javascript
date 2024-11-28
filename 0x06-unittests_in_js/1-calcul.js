function calculateNumber(operation, a, b) {
    // Check if the operation is valid and both a and b are numbers
    if (typeof operation !== 'string' || isNaN(a) || isNaN(b)) {
        return 'Error';
    }

    // Perform the correct operation based on the operation string
    switch (operation) {
        case 'SUM':
            return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            if (b === 0) {
                return 'Error';
            }
            return Math.round(a) / Math.round(b);
        default:
            return 'Error';  // Return 'Error' if operation
    }
}

module.exports = calculateNumber;
