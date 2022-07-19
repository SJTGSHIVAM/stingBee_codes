//primitive
let l = 7;
let m = true;
let n = "hi";

//non-primitive
let f = { a: 8 };

//copy
let newl = l;
console.log(newl); //7
newl = 8;
console.log(newl); //8
console.log(l); //7

// let newf = f;
// console.log(newf); //{a:8}
// newf.a = 9;
// console.log(newf); //{a:9}
// console.log(f); //{a:9}
// newf = { a: 10 };
// console.log(newf); //{a:10}
// console.log(f); //{a:9}
// primitive variables are directly stored but non primitive variables are stored by ref.

// problem is that : we want to make deep copies often
// how to make deep copies

let newf = { ...f };
//... spread op
//{a:9,t:8}
// a:9,t:8
//{a:9,t:8}
console.log(newf); //{a:8}
newf.a = 9;
console.log(newf); //{a:9}
console.log(f); //{a:8}

// let g = { a: 8, x: 7, r: { d: 8 } };
// let newg = { ...g };
// g.a = 16;
// g.r.d = 9;
// console.log(newg.a);
// console.log(newg.r.d);
// console.log(newg.r);
// console.log(g.r);

////////////////////////////////////////////////////////////////////////////////////

let maiHunObject = { a: 7, b: 9, a: 10, b: 4, a: 33 };
console.log(maiHunObject);
let maiHunObjectKiCopy = { ...maiHunObject, a: 44 };
console.log(maiHunObjectKiCopy);
///////////////////////////////////////////////////////////////////////////////////

// we can use the same concept

let g = { a: 8, x: 7, r: { d: 8 } };
let newg = { ...g, r: { ...g.r } };
g.a = 16;
g.r.d = 9;
console.log(newg.a);
console.log(newg.r.d);
console.log(newg.r);
console.log(g.r);

let pleaseMakeMyDeepCopy = { a: 8, x: 7, f: { d: 8 }, g: { k: 0 } };
let pleaseMakeMyDeepCopy0 = { f: { d: 8 }, m: { k: 0 }, k: 9 };
let deepCopy1 = { f: { d: { l: 66 } }, g: { k: 0 } };
let deepCopy2 = { f: { d: { l: 66 } }, g: { d: { l: 66 }, k: 9, n: { r: 9 } } };

// newest way to make deep copy
let copy0 = structuredClone(pleaseMakeMyDeepCopy);
console.log(copy0);
pleaseMakeMyDeepCopy.f.d = 99;
console.log(copy0);
console.log(pleaseMakeMyDeepCopy);

// let copy1 = structuredClone(deepCopy2);
// console.log(copy1);
// deepCopy2.f.d.l = 99;
// console.log(copy1);
// console.log(deepCopy2);

// an older way to do the same
console.log("\n\n\n\n");
let copy1 = JSON.parse(JSON.stringify(deepCopy2));
console.log(copy1);
deepCopy2.f.d.l = 99;
console.log(copy1);
console.log(deepCopy2);

// in js almost every other thing is an object
// map is not correctly copied using JSON.parse(JSON.stringify());
//but structuredClone can do the job
