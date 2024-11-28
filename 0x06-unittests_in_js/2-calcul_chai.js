const calculateNumber = (type, a, b) => {
  // Ensure exactly 3 arguments are passed
  if (arguments.length !== 3) {
    return 'Error';
  }

  // Handle unsupported operations
  const validOperations = ['SUM', 'SUBTRACT', 'DIVIDE'];
  if (!validOperations.includes(type)) {
    return 'Error';
  }

  // Handle the operations
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  if (type === 'DIVIDE') {
    // Handle division by zero or numbers that round to zero
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }

  return 'Error';  // Return 'Error' for any other unexpected cases
};

export default calculateNumber;  // Use export default for ES Modules
