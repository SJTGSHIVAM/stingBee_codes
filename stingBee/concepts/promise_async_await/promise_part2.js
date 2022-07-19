import axios from 'axios';

axios
  .get("https://api.github.com/users/sjtgshivam")
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("This will run after then or chatch what ever the case is");
  });
// what is an api
// what is an rest api

// https://api.github.com/users/{username}/followers

axios.get("https://api.github.com/users/SJTGSHIVAM/followers").then((resp) => {
  console.log(
    "////////////////////////////////// followers //////////////////////////////"
  );
  console.log(resp.data);
});
// try to get following users
