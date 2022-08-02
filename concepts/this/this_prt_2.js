// constructor functions and new opreator

function Human(name, age, money) {
  this.name = name;
  this.age = age;
  this.money = money;
}
// a common way of creating object
const newHuman = {
  name: "Ram",
  age: 39,
  money: 10,
};
// but the pitfall is
// its tedious
// no scema defined
// const newHuman = {
//   name: "Ram",
//   age: 39,
//   mone: 10,
// };

// An another way using constructor function could be
const newHuman2 = {};
Human.call(newHuman2, "Shyam", 35, 5);

// but even this method is not the best
// why?
// why would I need to create an object my self and pass
// I know I can but I want a better way
// so lets learn what we have with the new opreator

const newHuman3 = new Human("Radhe Shyam", 30, 2.5);

console.log(newHuman, newHuman2);
console.log(newHuman3);
