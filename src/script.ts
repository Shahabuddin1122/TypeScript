import {Person} from './classes/player.js'
import { IsPlayer } from './interface/IsPlayer.js'
import {addUser} from "./generics/generic.js"
const a:string = "Shahabuddin";
console.log(a);
let sakib:IsPlayer;
sakib = new Person("Sakib",23,"Bangladesh");
console.log(sakib)
console.log(addUser)

//enum 
enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN
}

interface APIResponse {
    status:number;
    type: RType;
}
const per1:APIResponse = {
    status:200,
    type:RType.FAILURE
}
console.log(per1)
//TUPLES

let arr = [3,'hello',{p:3}] 
let tup:[number,string,object] = [4,'world',{t:1}] 
 //this is a special type of array which contain string,number and object. here position of is  matter