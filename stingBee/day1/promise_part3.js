import axios from 'axios';

try {
  let resp = await axios.get("https://api.github.com/users/sjtgshivam");

  console.log("moved");
  console.log("moved");
  console.log("moved");
  console.log("moved");
  console.log("moved");

  console.log(resp.data);
} catch (err) {
  console.log(err.response.data);
} finally {
  console.log("i will run finally");
}
