export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
      if (somethingWasSuccesful) {
         resolve();     
      } else {
         reject()
      }
   });
}
