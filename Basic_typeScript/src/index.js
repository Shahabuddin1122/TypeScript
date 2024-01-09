"use strict";
// src/index.ts
console.log("Hello, TypeScript!");
let a = 5;
console.log(a);
//@ts-ignore
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 9));
let arr = ["apple", "orange", "banana"];
arr.push("guava");
let arr2 = ["string", true, 45, {}];
arr2.push("hello");
arr2.push(45);
arr2.push({
    name: "akash"
});
console.log(arr2);
//union type
let x;
x = 7;
x = "Hello";
let y = [];
y.push("shahida");
y.push(8);
//object
let z;
z = {
    name: "shahabuddin",
    age: 78
};
let z1;
z1 = {
    name: "shahabuddin",
    age: 78
};
