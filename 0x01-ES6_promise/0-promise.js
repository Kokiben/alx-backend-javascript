/* eslint-disable no-unused-vars */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Here you can resolve or reject based on your logic
      resolve('Response from API'); // Resolve with a success message
      // Uncomment the line below to simulate an error
      // reject(new Error('API call failed')); // Uncomment to test error handling
    }, 1000); // Wait for 1 second before resolving
  });
}
