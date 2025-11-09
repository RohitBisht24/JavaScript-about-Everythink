console.log("Bhopal");
console.info("Bhopal");
console.warn("Bhopal");
console.error("Bhopal");

/*--------------------------------------------------------------------------------------*/ 

let a = prompt("Enter your Name ?");
alert(`Hey ${a}`);

let username = Number(prompt("username batao "));
console.log( username );

/*--------------------------------------------------------------------------------------*/ 

                                    /*comadd Two numbers */


let num1 = +prompt("Enter First Number");
// let a = Number(prompt("Enter First Number"));    // we can write this code

let num2 = +prompt("Enter second Number");

let sum = a + b;
console.log(`sum is : `+ sum);
console.log(typeof sum);


/*--------------------------------------------------------------------------------------*/ 

                                        /*working with string */


let msg = "i Love Sheryians";
console.log(msg.slice(2, 6));     // slice
console.log(msg.split(''));       // split
console.log(msg.length);          // length
console.log(msg.replace("Love", "study at"))       // replace
console.log(msg.includes("Love"));      // includes --> for checking this particuler string(word) available or not.

let name = "Rohit";
console.log(`Hey ${name}, Welcome to JS.`);   // template literals

/*--------------------------------------------------------------------------------------*/ 

                                    /*Statement and Semicolons */


//  1. Remove semocolon and check if code still runs .                          --> true
//  2. Combine two statements in one line and see if it breaks .                --> true
//  3. Write a console.log statements without semicolons and predict output.    --> true


/*--------------------------------------------------------------------------------------*/ 

                                     /*Datatypes*/

let age = 25;                       // number
let naam = "rohit";                 // String
let isStudent = true;               // boolean
let skills = ["JS", "HTML"];        // array      --> js main array ka type object hote hai
let user = {city : "Bhopal"};       // object
let x = null;                       // null    --> bhi ek object hota hai
let y;                              // undefind
let z = symbol("id");               // symbol



/*--------------------------------------------------------------------------------------*/ 


/* Primitive vs Referece*/

// 1.  
let X = 5;
let Y = X;
Y = 10; 
console.log(X, Y);    // X = 5, Y = 10   // primitive : Copies the actual value, so changes in one variable don’t affect the other.

// 2.  
let obj1 = {name: "Harsh"};
let obj2 = obj1;
// let obj2.names = "sheryians";  // reference : Copies the memory address, so changes in one variable also affect the other.


/*--------------------------------------------------------------------------------------*/ 


                                     /*Web console*/

/*

script.js:36 (16) ['i', ' ', 'L', 'o', 'v', 'e', ' ', 'S', 'h', 'e', 'r', 'y', 'i', 'a', 'n', 's']
script.js:37 16
script.js:38 i study at Sheryians
script.js:39 true
script.js:42 Hey Rohit, Welcome to JS.
let skills = ["JS", "HTML"];   
undefined
skills
(2) ['JS', 'HTML']
stypof skills
VM1596:1 Uncaught SyntaxError: Unexpected identifier 'skills'Understand this error
typeof skills
'object'
let x = null;
undefined
typeof x
'object'
number (2)
VM1778:1 Uncaught ReferenceError: number is not defined
    at <anonymous>:1:1
(anonymous) @ VM1778:1Understand this error
number(2)
VM1785:1 Uncaught ReferenceError: number is not defined
    at <anonymous>:1:1
(anonymous) @ VM1785:1Understand this error
Number(2)
2
Number(2+3)
5
1/0
Infinity
0/0
NaN
String("rohit")
'rohit'
String("rohit" + )
VM2083:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
String("rohit" + "singh")
'rohitsingh'
String("rohit" + " singh")
'rohit singh'
undefind + 1\
VM2268:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
undefind + 1
VM2316:1 Uncaught ReferenceError: undefind is not defined
    at <anonymous>:1:1
(anonymous) @ VM2316:1Understand this error
undefind + 1
VM2382:1 Uncaught ReferenceError: undefind is not defined
    at <anonymous>:1:1
(anonymous) @ VM2382:1Understand this error
undefined + 1
NaN
console.log(Number.isNaN(0 / 0));
VM2691:1 true
undefined

*/ 