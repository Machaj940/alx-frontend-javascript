export default function getFullResponseFromAPI(success) {
  if (success === true) {
    return new Promise((resolve) => {
      resolve("{ status: 200, body: 'success' }");
    });
  }
  if (success === false) {
    return new Promise((reject) => {
      reject(Error('The fake API is not working currently'));
    });
  }
}
