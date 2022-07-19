// js is async in nature
function someExpensiveFunction() {
  var currentDateObj = new Date();
  var numberOfMlSeconds = currentDateObj.getTime();
  var addMlSeconds = 10000;
  var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
  while (new Date() < newDateObj) {}
  return 8;
}

function someExpensiveFunction0() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is now resolved");
    }, 5000);
  });
}

function evenChecker(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(num % 2)) resolve("this is even");
      reject("this is not even");
    }, 5000);
  });
}

// let x = 7; // 1ms
// let y = someExpensiveFunction0(); // takes 5 secs to execute
// console.log(x); // 1ms
// console.log(y); // 1ms

// which ever function will run in async will return a promise
// pending
// fulfilled
// rejected

///////////////////////////////////

// let x = 7; //1ms
// someExpensiveFunction0().then((y) => {
//   console.log(y);
// }); // takes 5 secs to execute
// console.log(x); // 1ms

// pending
// fulfill
// reject
evenChecker(7)
  .then((res) => {
    console.log("there was no error", res);
  })
  .catch((err) => {
    console.log("we got some error: ", err);
  });
