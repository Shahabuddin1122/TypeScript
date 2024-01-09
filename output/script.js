import { Person } from './classes/player.js';
import { addUser } from "./generics/generic.js";
const a = "Shahabuddin";
console.log(a);
let sakib;
sakib = new Person("Sakib", 23, "Bangladesh");
console.log(sakib);
console.log(addUser);
//enum 
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const per1 = {
    status: 200,
    type: RType.FAILURE
};
console.log(per1);
//TUPLES
let arr = [3, 'hello', { p: 3 }];
let tup = [4, 'world', { t: 1 }];
//this is a special type of array which contain string,number and object. here position of is  matter
