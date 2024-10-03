/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Start both promises
  const upload = uploadPhoto();
  const create = createUser();

  // Use Promise.all to handle both promises together
  return Promise.all([upload, create])
    .then((result) => {
      // Destructure result for better readability
      const [photoResponse, userResponse] = result;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log error message in case of failure
      console.log('Signup system offline');
    });
}
