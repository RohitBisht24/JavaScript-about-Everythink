                                    /* Arithmetic Operators. */      

let a = 10;
let b = 5;
console.log(a + b);  // 15              
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0
console.log(a ** b); // 100000


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Comparison Operator */      


console.log(5 == '5');   // true
console.log(5 === '5');  // false
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Unary Operator */                     

/*
                            Pre increment                  Post increment
                                ++a                               a++

                            Pre dicrement                  Post dicrement
                                --a                               a--
*/                           


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Logical Operator */  


let A = 5, B = 10;

// AND (&&) 
console.log(a < b && b < 20);  // true (both true)
console.log(a > b && b < 20);  // false (first false)

// OR (||)
console.log(a > b || b < 20);  // true (second true)
console.log(a > b || b > 20);  // false (both false)

// NOT (!)
console.log(!(a < b));  // false (because a<b is true, !true = false)
console.log(!(a > b));  // true  (because a>b is false, !false = true)


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Assingment Operator */  

let z = 10;

z += 5;   // 15
z -= 3;   // 12
z *= 2;   // 24
z /= 4;   // 6
z %= 5;   // 1
z **= 3;  // 1 (since 1³ = 1)

console.log(z);

/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Bitwise Operator */  

let x = 5, y = 1;

console.log(x & y);         // 1
console.log(x | y);         // 5
console.log(x ^ y);         // 4
console.log(~x);            // -6
console.log(x << 1);        // 10
console.log(x >> 1);        // 2
console.log(x >>> 1);       // 2


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Ternary Operator */      

                        12 > 13 ? console.log("true") : console.log("false");


/*---------------------------------------------------------------------------------------------------*/ 


                                    /* Typeof & instance Operator */      


// typeof examples
console.log(typeof 10);                                         // "number"
console.log(typeof "Rohit");                                    // "string"
console.log(typeof true);                                       // "boolean"
console.log(typeof undefined);                                  // "undefined"
console.log(typeof null);                                       // "object"
console.log(typeof [1,2,3]);                                    // "object"
console.log(typeof NaN);                                        // "number"
console.log(typeof {a:1,b:2});      // "object"
console.log(typeof function(){});                               // "function"

// instanceof examples
let arr = [1, 2, 3];
let obj = {name: "Rohit"};

console.log(arr instanceof Array);                              // true
console.log(obj instanceof Object);                             // true
console.log(arr instanceof Object);                             // true (array is also an object)
