console.log("hello")
let myfun:Function;
myfun = ()=>{
    console.log("hello from function")
}
myfun();

const mul =(k:number,l:number,m:boolean = true)=>{
    console.log(`multification of ${k} & ${l} is: `, k*l);
}

mul(6,7);

//function signature

let div: (a:number,b:number)=> number;

div = (x:number,y:number) =>{
    return x/y
}
const o:number = div(89,6);
console.log(o);