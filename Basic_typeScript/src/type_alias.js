"use strict";
const userDetails = (user) => {
    console.log(`response from type aliasing: ${user.name}`);
};
userDetails({
    name: "shahab",
    age: 45
});
