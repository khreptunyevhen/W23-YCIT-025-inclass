const x = [4, 2];

let sum = ++x[0] + x[1]++ - (x[0] + x[1]);

console.log(x);
console.log("---------------------");
console.log("x[0]", x[0]);
console.log("++x[0]", ++x[0]);
console.log("x[0]", x[0]);
console.log("---------------------");
console.log("x[1]", x[1]);
console.log("x[1]++", x[1]++);
console.log("x[1]", x[1]);
console.log("---------------------");
console.log(++x[0] + x[1]++ - (x[0] + x[1]));
//           5    +    2    -  5       3
