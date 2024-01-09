const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
export const addUser = addId({
    name: "akash",
    age: 34,
    country: "BD"
});
console.log(addUser.country);
const addUser2 = addId({ name: "shahab" });
const response1 = {
    name: "API",
    type: 200,
    data: {
        value: "shahabuddin"
    }
};
