import readlineSync from 'readline-sync';

function evenChecker(number) {
  return new Promise((resolve, reject) => {
    if (!(number % 2)) resolve("this is even");
    reject("this is odd");
  });
}

let value = readlineSync.question("enter value ");
evenChecker(value)
  .then((y) => {
    console.log(y);
  })
  .catch((y) => {
    console.log(y);
  });
