                                /* Arithmetic Operators. */      


/*
            Operator           Description                  Example            Output 
            ----------------------------------------------------------------------------
            +                  Addition                     5 + 2                7     
            -                  Subtraction                  5 - 2                3     
            *                  Multiplication               5 * 2                10    
            /                  Division                     10 / 2               5.0   
            %                  Modulus (Remainder)          5 % 2                1     
            **                 Exponentiation               2 ** 3               8     
*/  

                let a = 10;
                let b = 5
                console.log(a + b);     // 15              
                console.log(a - b);     // 5
                console.log(a * b);     // 50
                console.log(a / b);     // 2
                console.log(a % b);     // 0
                console.log(a ** b);    // 100000


/*---------------------------------------------------------------------------------------------------*/ 

                      
                
                                /* Assingment Operator */  


/*
            Operator           Description                    Example            Output      
            ----------------------------------------------------------------------------
               =                  Assign                       x = 10              10         
              +=                 Add and assign               x += 5              x = x + 5  
              -=                 Subtract and assign          x -= 5               x
*/ 
                
                let z = 10;
                                    
                z += 5;   // 15
                z -= 3;   // 12
                z *= 2;   // 24
                z /= 4;   // 6
                z %= 5;   // 1
                z **= 3;  // 1 (since 1³ = 1)
                                    
                console.log(z);


/*---------------------------------------------------------------------------------------------------*/ 


                            /* Comparison Operator */      


/*
            Operator           Description                  Example              Output 
            -----------------------------------------------------------------------------
              ==               Equal to                     5 == 5                True   
              !=               Not equal                    5 != 6                True   
              >                Greater than                 6 > 5                 True   
              <                Less than                    5 < 6                 True   
              >=               Greater or equal             5 >= 5                True   
              <=               Less or equal                4 <= 5                True   
*/

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
            Operator           Description                   Example              Output 
            ------------------------------------------------------------------------------
            and                    AND                      (5 > 3 and 6 > 4)      True   
            or                     OR                       (5 > 10 or 6 > 4)      True   
            not                    NOT                      not(5 > 3)             False  
*/


//                         Pre increment                  Post increment
//                              ++a                               a++

//                          Pre dicrement                  Post dicrement
//                              --a                               a--                          


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


                                  // Function Hoisting
            sayHello(); // Works
            function sayHello() {
                console.log("Hello!");
            }
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

                    
                    let voting = 12 > 13 ? console.log("true") : console.log("false");
                    console.log(voting);


/*---------------------------------------------------------------------------------------------------*/ 


                        /* Typeof & instance Operator */      

/*
            Operator           Description                  Example               Output  
            ------------------------------------------------------------------------------
            type()             Returns the data type        type('Hello')         str     
            isinstance()       Checks object type           isinstance([], list)  True    
*/

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


/*---------------------------------------------------------------------------------------------------*/ 


                         /* String Operator */      

//                      + (for concatenation)


/*---------------------------------------------------------------------------------------------------*/ 


                        /* Spread / Rest Operator */      


//   ... (very important in modern JS)  

                        // Spread
                        let arrr = [1, 2, 3];
                        let copy = [...arr];
                        console.log(copy); // [1, 2, 3]

// Rest
function sum(...numbers) {
                            return numbers.reduce((a, b) => a + b);
                        }
                        console.log(sum(1, 2, 3)); // 6





/*---------------------------------------------------------------------------------------------------*/ 


                            /* Nullish Coalescing Operator */      


//          ?? (fallback only when null /  undefined)

                    // Nullish Coalescing Operator (??)
                    let name = null;
                    let displayName = name ?? "Guest";
                    console.log(displayName); // Guest

                    // Optional Chaining (?.)
                    let user = { profile: { name: "Ritik" } };
                    console.log(user?.profile?.name);      // Ritik
                    console.log(user?.address?.city);      // undefined (no error)



/*---------------------------------------------------------------------------------------------------*/ 


                                        /* Optional Chaining */      

//                                 ?.  (safe access to nested values)        



/*---------------------------------------------------------------------------------------------------*/ 


                                        /* Variable Hoisting */      


                // basically, Hoisting ka mtlb hai ki variable ko banane se pehle bhi  use kiya ja sakta hi.
                // hoisting main apna variable toot jata in do hisso main.
                // declaration main top of the file jata hai.
                // initialization wahi rahta hai jaha variable tha.
                // ab apka variable error nhi dena kyuki vo hamesha use hone se pehle exist kar raha tha.

                                // 1.
                                var age = 22;

                                // 2.
                                var age ;
                                age = 22;

                // Note : Hoisting 'let' ke saath work nhi karti hai


                // proper Defianation : Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

                // Variable Hoisting
                console.log(X); // undefined
                var X = 10;

        //  Note: The declaration var a is hoisted, but not the initialization.
        
            // Function Hoisting
            sayHello(); // Works
            function sayHello() {
                console.log("Hello!");
            }
            
        //  Note: Function declarations are fully hoisted, meaning you can call them before they are defined.        



                    


                                
