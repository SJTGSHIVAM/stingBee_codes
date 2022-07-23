//how to create a promise part 2
//  to create a promise we need to call Promise constructor
// syntax: new Promise(
// (resolve,reject)=>{
//  we will call resolve or reject to either resolve or reject a promise
// }
// );
// example:
let promise1 = new Promise((resolve, reject) => {
  resolve(7);
  //reject("reason");
});
let val1 = await promise1;
console.log("promise1:", await promise1);

// we usually use promises with function
// in a way that functions returns promises
// and such functions are called asynchronous functions

// i.e. asynchronous functions are functions that return promise

// lets create a function that returns a promise

function return7() {
  return new Promise((resolve, reject) => {
    // here we will write the same code that we would have written in the normal function
    // but instead of using "return statement"
    // we use reslove or reject functions provided.
    resolve(7);
  });
}

function return7_non_async() {
  return 7;
}
console.log("return7_non_async=>", return7_non_async());
console.log("return7=>", await return7());
// lets go to promise.js file and see older functions we have created.

// now lets try to create same function without any setTimeout
// function should take a number as an input
// it should resolve if number is even and reject iif number is odd

// can check file promise_example_by_kushagra.js for answer to this

// this was an old way to create asynchronous promises
// we can now easily create promises using "async" keyword

// we just need to append async in front of the function to make it asynchronous
// instead of resolve we simply use return
// instead of reject we can use throw
// for eg
async function return7_async() {
  return 7;
}

// lets see a case where we have to reject
async function return8(num) {
  // this function rejects the promise if num===0  else it resolves to 7
  if (num === 0) throw "for some reason";
  return 8;
}

// task is to make the same programme evenChecker using async keyword
