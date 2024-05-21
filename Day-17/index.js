// *****-Promise-***** //

function getData() {
    console.log("Inside function");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = false; // try true // backend api call > false
      if (result) {
        resolve("data recevied");
      } else {
        reject("failed");
      }
    }, 4000);
  });
}

getData()
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.log(error, "error");
  });

//  *2*  //

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = false;
      if (result) {
        resolve("data received");
      } else {
        reject("failed");
      }
    }, 2000);
  });
}

getData()
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.log(error, "error");
  });
