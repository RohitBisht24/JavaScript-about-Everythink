/*Comparison Practice:
Given:
let a = 5, b = "5";
Compare them using both == and === and print the results to see the difference.*/

let a = 5, b = "5";

console.log(a == b);  //true
// a == b dual equrel se value compare karne per srif value ko compare karna karna hai uske type ko nhi isiliye ye ture return karta hia

console.log(a === b)    //false
// a === b  traple equal ko stricked behaviar hota hia value ko compare karne per ye value ke saath value ke type ko compare karna hi kiski wajah se number(5) === string("5")  compare karne per false return  karna hia 