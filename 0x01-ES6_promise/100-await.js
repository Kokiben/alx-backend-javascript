import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPhotoResponse = await uploadPhoto(); // Await the uploadPhoto response
    const createUserResponse = await createUser();   // Await the createUser response

    // Return an object containing the responses
    return {
      photo: uploadPhotoResponse,
      user: createUserResponse,
    };
  } catch (err) {
    // If either function fails, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
