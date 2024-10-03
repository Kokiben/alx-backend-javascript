// 2-then.js
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log the message when the promise resolves
      console.log("Got a response from the API");
      // Return the response object
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // Return an empty Error object when the promise rejects
      return new Error();
    });
}
