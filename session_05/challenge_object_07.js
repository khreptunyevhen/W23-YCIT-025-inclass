const a = { a: 1 };
const b = { a: 1 };
const c = a; // copy refference - true

console.log(a === b); // false
console.log(a === c); // true
