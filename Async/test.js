let p = new Promise((resolve, reject) => {
    let a = '2'
    if (a == 2){
        resolve('success');
    }else{
        reject('failed');
    }
})

p.then((message)=>{
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the Catch: " + message)
})

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({ user: "ed" });
    }, 2000);
});

p1.then(user=>{
    console.log("this is then and print name: " + user.user)
});

// console.log("Start");

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have data");
//       resolve({ userEmail: email });
//     }, 3000);
//   });
// }

// function getuserVideos(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("getuservideo called " + email);
//       resolve(["video1", "video2", "video3"]);
//     }, 1000);
//   });
// }

// function videoDetails(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("i am called " + video)
//       resolve("title of the video");
//     }, 1000);
//   });
// }

// loginUser("ar@gmail.com", "123")
//   .then((user) => getuserVideos(user.userEmail))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail)=> console.log(detail))

// console.log("Finished");
