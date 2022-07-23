//how to create a promise
// we have two functions to directly resolve or reject a particular value.
try {
  console.log(await Promise.resolve(2));

  // Promise.resolve(value to be resolved)
  await Promise.reject("some reason");
  // Promise.resolve(value to be rejected)
} catch (error) {
  console.log(error);
}
