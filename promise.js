const condition = true; // Change this to false to test the rejection case

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
