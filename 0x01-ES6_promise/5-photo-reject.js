// 5-photo-reject.js
export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
