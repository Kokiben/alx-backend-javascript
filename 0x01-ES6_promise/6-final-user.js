// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = []; // Changed from res to results

  // Handle the user signup
  try {
    const userResponse = await signUpUser(firstName, lastName); // Changed from user to userResponse
    results.push({ status: 'fulfilled', value: userResponse });
  } catch (error) {
    results.push({
      status: 'rejected',
      value: error, // Keep the error object
    });
  }

  // Handle the photo upload
  try {
    const uploadResponse = await uploadPhoto(fileName); // Changed from photo to uploadResponse
    results.push({ status: 'fulfilled', value: uploadResponse });
  } catch (error) {
    results.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`, // Keep the same error message format
    });
  }

  return results; // Return the array with both results
}
