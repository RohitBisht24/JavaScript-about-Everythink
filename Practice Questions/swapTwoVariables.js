/*Swap Two Variables (Without Using Third Variable):
Create two variables a and b.
Swap their values without using a third variable.*/

let a = 8;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(` a = 8 to a = ${a}`);
console.log(` b = 3 to b = ${b}`);
