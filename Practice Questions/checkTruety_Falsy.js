/*Truthy and Falsy Values:
Take these values: 0, " ", "Hello", null, undefined, NaN, 1.
For each one, print Boolean(value) and observe which are true or false.*/


console.log(boolean(0));            // false
console.log(boolean(" "))           // true
console.log(boolean("Hello"))       // true
console.log(boolean(null));         // false
console.log(boolean(undefined));    // false
console.log(boolean(NaN));          // false
console.log(boolean(1));            // true