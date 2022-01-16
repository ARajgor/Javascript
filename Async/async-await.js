function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function dowork(){   // this function does samething as above
    try{
    const response = await makeRequest('Google');
    console.log("Response Received");
    const processResponse = await processRequest(response)
    console.log(processResponse);
    }
    catch(err){
        console.log(err)
    }
}
dowork()