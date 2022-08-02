// this points to some object in memomy
// this is connected with the context of caller

// In ESM global this is null while running in node
console.log(this); //undefined

let a = {
  name: "raj",
  printName: function () {
    console.log(this.name);
  },
};
function printGlobal(a, b) {
  console.log(a, b, this);
}

a.printName(); //raj

//function borrowing

let b = {
  name: "Shyam",
};
a.printName.call(b); // Shyam

// normally when a function is called "this" is bound to the caller
// for eg: in  a.printName() a is the caller
// if there is no explicit caller
// ie function is written in global context
// global this is assigned as a caller
// printName() ===> this.printName()4
//lets see
function printName() {
  console.log(this.name);
}
printName.call(b); // Shyam

// what .call does is the frist parameter passed in ".call()" is bound to the this
// within the attached function while the call is made

// what else we can use for function borrowing

// apply

let c = {
  name: "Ram",
};
printName.apply(c); // Ram

// whats the difference
//  we  can use call and apply to bind the context and the variables that are passed as
// parameters.
function print2(p1, p2, p3, p4) {
  console.log(this, p1, p2, p3, p4);
}
print2(); // undefined undefined undefined undefined undefined
print2.apply(c); // { name: 'Ram' } undefined undefined undefined undefined
print2.call(c); // { name: 'Ram' } undefined undefined undefined undefined

//  now we can also pass variables to this fuction

print2(1, 2, 3, 4);
print2.call(c, 1, 2, 3, 4); // { name: 'Ram' } undefined undefined undefined undefined
print2.apply(c, [1, 2, 3, 4]); // { name: 'Ram' } undefined undefined undefined undefined

// bind

// bind returns a new function that is bound to a particular context
console.log("bind");
let new_print2 = print2.bind(c, 1, 2, 3, 4);
// new_print2 is bound with context c and paramenters 1,2,3,4
new_print2();

// we can just bind the context as well
let new_printv3 = print2.bind(c);

new_printv3();
new_printv3(1, 2, 3, 4);

// we can also bind just one or two parameters as well
let new_printv4 = print2.bind(c, 1, 2);

new_printv4();

new_printv4(3, 4);

// bind can not be overridden
console.log("bind can not be overridden");
print2(1, 2, 3, 4);
print2.call(a, 1, 2, 3, 4);
print2.call(b, 1, 2, 3, 4);
print2.call(c, 1, 2, 3, 4);
print2.bind(c).call(a);
// print2.bind(c) returns a new function which is bound to c
// then we tried to to use call on new function
print2.bind(c).apply(a);
// print2.bind(c) returns a new function which is bound to c
// then we tried to to use apply on new function
print2.bind(c, 1, 2).call(a, 3, 4);
print2.bind(c, 1, 2, 3, 4).apply(a, [5, 6, 7, 8]);
print2.bind(c, 10, 2, 3, 4).bind(a, 0, 8, 9, 7)(5, 6, 7, 8);
