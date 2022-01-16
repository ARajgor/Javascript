//-------------MDN example ----------------------------
// function greeting(name) {
//     alert('Hello ' + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }

//   processUserInput(greeting);

// const posts =[
//     {title: 'Post one', body:'This is post one'},
//     {title: 'Post Two', body:'This is post two'}
// ]
// function getPosts(){
//     setTimeout(()=> {
//         let output ='';
//         posts.forEach((post, index)=>{
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost(post, callback){
//     setTimeout(()=> {
//         posts.push(post)
//         callback();
//     }, 2000)
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts)

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have data");
    callback({ userEmail: email });
  }, 3000);
}

function getuserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 1000);
}
const user = loginUser("abc@gmail.com", 1223, (userss) => {
  console.log(userss);
  getuserVideos(userss.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("Finished");
