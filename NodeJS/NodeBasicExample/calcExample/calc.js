const { add, sub, mul, div } = require("./arithmaticfunction");

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

console.log(`Addition of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is ${sub(num1, num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is ${mul(num1, num2)}`);
console.log(`Division of ${num1} and ${num2} is ${div(num1, num2)}`);
