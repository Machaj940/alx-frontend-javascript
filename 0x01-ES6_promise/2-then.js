export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'Success' };
  promise
    .then(() => obj)
    .catch((e) => console.error())
    .finally(() => console.log('Got a response from the API'));
}
