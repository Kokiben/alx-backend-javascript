// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      // For demonstration, we resolve the promise after 1 second
      resolve("Response from API");
      
      // If there were an error, you could call reject() like this:
      // reject(new Error("Something went wrong"));
    }, 1000);
  });
}
