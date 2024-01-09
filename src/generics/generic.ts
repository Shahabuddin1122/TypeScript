const addId = <T extends object> (obj:T)=>{
    const id = Math.floor(Math.random()*100)
    return {...obj,id};
}

export const addUser = addId({
    name:"akash",
    age:34,
    country:"BD"
})
console.log(addUser.country)
const addUser2 = addId({name:"shahab"});
//generics with interface

interface Response<T> {
    name:string;
    type:number;
    data: T
}
const response1:Response<object> = {
    name:"API",
    type:200,
    data: {
        value:"shahabuddin"
    }
}