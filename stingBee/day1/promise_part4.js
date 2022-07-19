import axios from 'axios';

const startTime = Date.now();
const timeSpent = () => "       |  Time: " + String(Date.now() - startTime);
// takes more time
console.log(timeSpent());
try {
  let resp = await axios.get("https://jsonplaceholder.typicode.com/users/8");
  // if this line take 1 second
  // then next one will start after one second
  let post = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // if this line take 1 second
  // then next one will start after one second
  let comment = await axios.get(
    "https://jsonplaceholder.typicode.com/comments/1"
  );
  // if this line take 1 second
  // then next one will start after one second
  console.log(resp.data.name);
  console.log("\nTITLE");
  console.log(post.data.title);
  console.log("\nBODY");
  console.log(post.data.body);
  console.log("\nNAME");
  console.log(comment.data.name);
  console.log("\nEMAIL");
  console.log(comment.data.email);
  console.log(timeSpent());
  // total code took 3 seconds
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
}
// will take less time

console.log(timeSpent());
try {
  let resp = axios.get("https://jsonplaceholder.typicode.com/users/8");
  // this call also takes 1 second but next call is started in parallel
  let post = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // this call also takes 1 second but next call is started in parallel
  let comment = axios.get("https://jsonplaceholder.typicode.com/comments/1");
  // this call also takes 1 second but next call is started in parallel

  console.log((await resp).data.name);
  // now we wait for one second right here
  // in this one second all three were done now we dont need to wait any more
  console.log("\nTITLE");
  console.log((await post).data.title);
  console.log("\nBODY");
  console.log((await post).data.body);
  console.log("\nNAME");
  console.log((await comment).data.name);
  console.log("\nEMAIL");
  console.log((await comment).data.email);
  console.log(timeSpent()); // took only one second
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
}
// now this code has the same problem that if one of them is failing we can not abort others
// lets see how can we fix this

// a temporary way to do it
// will take lesser time but is not the best way
// will take less time

console.log(timeSpent());
try {
  let resp = axios.get("https://jsonplaceholder.typicode.com/users/8");
  // this call also takes 1 second but next call is started in parallel
  let post = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // this call also takes 1 second but next call is started in parallel
  let comment = axios.get("https://jsonplaceholder.typicode.com/comments/1");
  // this call also takes 1 second but next call is started in parallel
  //   but  suppose resp takes 3 minutes
  //  post also takes 3 minutes
  // comment takes 1 second only but fails
  // this is not a good solution
  resp = await resp;
  post = await post;
  comment = await comment;
  // in this one second all three were done now we dont need to wait any more
  console.log(resp.data.name);
  console.log("\nTITLE");
  console.log(post.data.title);
  console.log("\nBODY");
  console.log(post.data.body);
  console.log("\nNAME");
  console.log(comment.data.name);
  console.log("\nEMAIL");
  console.log(comment.data.email);
  console.log(timeSpent()); // took only one second
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
}

// lets see what can be done now

console.log(timeSpent());
try {
  let resp = axios.get("https://jsonplaceholder.typicode.com/users/8");
  // this call also takes 1 second but next call is started in parallel
  let post = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // this call also takes 1 second but next call is started in parallel
  let comment = axios.get("https://jsonplaceholder.typicode.com/comments/1");
  // this call also takes 1 second but next call is started in parallel
  // this will solve the previous problem we were facing
  //   suppose resp takes 3 minutes
  //  post also takes 3 minutes
  // comment takes 1 second only but fails
  // promise.all will fail in one second
  //-----------------/ instead of this
  //   resp = await resp;
  //   post = await post;
  //   comment = await comment;
  // we can do this
  await Promise.all([resp, post, comment]);

  // Promise.all takes an array of promises
  // then it waits for all of them to be resolved
  // in case any one of them is failed it fails immidiately
  // in case it succseeds it returns the array of responses ( this line not implemented here)

  // in this one second all three were done now we dont need to wait any more
  console.log((await resp).data.name);
  // now we wait for one second right here
  // in this one second all three were done now we dont need to wait any more
  console.log("\nTITLE");
  console.log((await post).data.title);
  console.log("\nBODY");
  console.log((await post).data.body);
  console.log("\nNAME");
  console.log((await comment).data.name);
  console.log("\nEMAIL");
  console.log((await comment).data.email);
  console.log(timeSpent()); // took only one second
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
} // took only one second

// one more and yet cleaner way

// lets see what can be done now

console.log(timeSpent());
try {
  let resp = axios.get("https://jsonplaceholder.typicode.com/users/8");
  // this call also takes 1 second but next call is started in parallel
  let post = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  // this call also takes 1 second but next call is started in parallel
  let comment = axios.get("https://jsonplaceholder.typicode.com/comments/1");
  // this call also takes 1 second but next call is started in parallel
  // this will solve the previous problem we were facing
  //   suppose resp takes 3 minutes
  //  post also takes 3 minutes
  // comment takes 1 second only but fails
  // promise.all will fail in one second
  //-----------------/ instead of this
  //-----------------/ resp = await resp;
  //-----------------/ post = await post;
  //-----------------/ comment = await comment;
  //-----------------/ we can do this
  [resp, post, comment] = await Promise.all([resp, post, comment]);

  //-----------------/ // if we do not under stand this
  //-----------------/ // we can try running this
  //-----------------/ // let a, b,c;
  //-----------------/ //[a,b,c]=[4,5,6]
  //-----------------/ // console.log(a,b,c)
  //-----------------/ // will log 456

  // Promise.all takes an array of promises
  // then it waits for all of them to be resolved
  // in case any one of them is failed it fails immidiately
  // in case it succseeds it returns the array of responses ( this line is now implemented here)

  // in this one second all three were done now we dont need to wait any more
  console.log(resp.data.name);
  // now we wait for one second right here
  // in this one second all three were done now we dont need to wait any more
  console.log("\nTITLE");
  console.log(post.data.title);
  console.log("\nBODY");
  console.log(post.data.body);
  console.log("\nNAME");
  console.log(comment.data.name);
  console.log("\nEMAIL");
  console.log(comment.data.email);
  console.log(timeSpent()); // took only one second
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
} // took only one second
// there are more promise related function Promise.any() Promise.race() Promise.allSettled() ...
