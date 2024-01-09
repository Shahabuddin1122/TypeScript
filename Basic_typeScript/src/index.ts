// src/index.ts
console.log("Hello, TypeScript!");

let a:number = 5;
console.log(a);
//@ts-ignore
function sum(a:number,b:number):number {
    return a+b
}
console.log(sum(3,9));

let arr = ["apple","orange","banana"]
arr.push("guava");
let arr2 = ["string",true,45,{}];
arr2.push("hello")
arr2.push(45);
arr2.push({
    name:"akash"
})
console.log(arr2);

//union type

let x: string | number;
x=7;
x="Hello"

let y:(number | string)[] = []
y.push("shahida")
y.push(8);

//object
let z:object;
z = {
    name:"shahabuddin",
    age: 78
}
let z1:{
    name:string,
    age:number
};
z1 = {
    name:"shahabuddin",
    age: 78
}
