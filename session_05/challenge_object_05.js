const obj1 = {};
const obj2 = {};
const obj3 = obj1;
console.log("obj1 == obj2", obj1 == obj2);
console.log("obj1 === obj2", obj1 === obj2);
console.log("obj3 === obj1", obj3 === obj1);

console.log("=================================");

const dog = { a: {} };
const cat = { ...dog };

console.log("cat", cat);
console.log("cat === dog", cat === dog);
console.log("cat.a === dog.a", cat.a === dog.a);

console.log("=================================");

// const catDeep =

console.log(JSON.stringify(dog));
console.log(JSON.parse(JSON.stringify(dog)));
