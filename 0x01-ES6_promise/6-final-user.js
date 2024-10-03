// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions and store their promises
  const userPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle
  return Promise.allSettled([userPromise, uploadPromise]).then((results) => {
    // Map the results to the desired structure
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
