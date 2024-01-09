"use strict";
console.log("hello");
let myfun;
myfun = () => {
    console.log("hello from function");
};
myfun();
const mul = (k, l, m = true) => {
    console.log(`multification of ${k} & ${l} is: `, k * l);
};
mul(6, 7);
//function signature
let div;
div = (x, y) => {
    return x / y;
};
const o = div(89, 6);
console.log(o);
