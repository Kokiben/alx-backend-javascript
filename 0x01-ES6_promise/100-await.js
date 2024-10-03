// 100-await.js
import uploadPhoto from './utils'; // Adjust the path if necessary
import createUser from './utils';   // Adjust the path if necessary

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto(); // Await response from uploadPhoto
    const userResponse = await createUser();   // Await response from createUser

    // Return the responses in the desired format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the functions fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
