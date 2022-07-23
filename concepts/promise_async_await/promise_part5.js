const startTime = Date.now();
const timeSpent = () => "       |  Time: " + String(Date.now() - startTime);
const pres = (val, timeout = 1) =>
  new Promise((res) => {
    setTimeout(() => {
      res(val);
    }, timeout * 1000);
  });
const prej = (val, timeout = 1) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(val);
    }, timeout * 1000);
  });
// allSettled
try {
  console.log(timeSpent());
  let arr1 = await Promise.allSettled([
    pres("res1", 2),
    pres("hi", 3),
    prej(" for some reason", 4),
  ]);
  // Promise.allSettled takes an array of promises (will run in parallel)
  // it waits for all the promises to either fulfill or reject
  // then returns an array of objects containg reason for rejection or value of fulfilment

  console.log(timeSpent());
  console.log(JSON.stringify(arr1));
} catch (err) {
  console.log("some error");
}

//any
console.log(
  "\n\n\n\n\n\n\n+++++++++++++++++Promise.any++++++++++++++++++++++++++++++"
);
try {
  console.log(timeSpent());
  let resp1 = await Promise.any([
    pres("res1", 200),
    pres("hi", 5),
    prej(" for some reason", 4),
  ]);
  // Promise.any takes an array of promises (will run in parallel)
  // it waits for either one of them to fulfill or for all of them to be rejected
  // and returns the value of fulfilled promise or Aggregate error if all promises are rejected

  console.log(timeSpent());
  console.log(JSON.stringify(resp1));

  let resp2 = await Promise.any([
    prej("res1", 2),
    prej("hi", 5),
    prej(" for some reason", 4),
  ]);
  console.log(timeSpent());
  console.log(JSON.stringify(resp1));
} catch (err) {
  console.log(timeSpent());
  console.log(err);
}

// race

console.log(
  "\n\n\n\n\n\n\n+++++++++++++++++Promise.race++++++++++++++++++++++++++++++"
);
try {
  console.log(timeSpent());
  let resp1 = await Promise.race([
    pres("res1", 1),
    pres("hi", 0.5),
    prej(" for some reason", 4),
  ]);
  // Promise.any takes an array of promises (will run in parallel)
  // it waits for either one of them to fulfill or for all of them to be rejected
  // and returns the value of fulfilled promise or Aggregate error if all promises are rejected

  console.log(timeSpent());
  console.log("resp1:", JSON.stringify(resp1));

  let resp2 = await Promise.race([
    pres("res1", 2),
    pres("hi", 5),
    prej(" for some reason", 1),
  ]);
  console.log(timeSpent());
  console.log("resp2:", JSON.stringify(resp2));
} catch (err) {
  console.log(timeSpent());
  console.log("err:", err);
}
