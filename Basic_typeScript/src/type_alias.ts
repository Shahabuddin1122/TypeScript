type stringOrnumber = string | number ;
type userType = { name:string,age:number };

const userDetails = (user:userType)=>{
    console.log(`response from type aliasing: ${user.name}`);
}
userDetails({
    name:"shahab",
    age:45
})