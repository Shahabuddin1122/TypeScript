import {IsPlayer} from "../interface/IsPlayer.js"
export class Person implements IsPlayer {
    name:string;
    age:number;
    country:string;
    constructor(n:string,a:number,c:string){
        this.name = n,
        this.age = a,
        this.country = c
    }
    play(){
        console.log(`${this.name} play for ${this.country}` );
    }
}