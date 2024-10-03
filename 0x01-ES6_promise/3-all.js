// 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Call both functions and collect their promises
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // Use Promise.all to handle both promises
  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      // Log the required information to the console
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log the error message if any promise rejects
      console.log('Signup system offline');
    });
}
