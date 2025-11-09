// let var const
// declarations and initialization

//  var a ;        declaration
//  a = 12;        initialization
 // var a = 12;              // declaration and initialization

// window main add hota hai variable
// function scoped hota hai variable
// aap first declere ke sakte  ho same name se and error nhi ayega variable

/*------------------------------------------------------------------------------------------------------------------------ */


// Scope (globlal, block, funcrional)


//  scope in real life
{
    var num= 20;
    let str = "rohit";
    const year = 2025;
}

console.log(num);   //20
console.log(str);   //not working 
console.log(year);  //not working 


/*------------------------------------------------------------------------------------------------------------------------ */


// to check a var for respecting a functions

function test() {
  var y = 20; // yeh sirf function ke andar ka variable hai
//   console.log(y); // chalega
}

test();
console.log(y); // ❌ Error — y bahar use nahi ho sakta



/*------------------------------------------------------------------------------------------------------------------------ */


//  TDZ (Temporal Dead Zone)

/* when a variable is devlares using let or const , if you try to access it before its declaration an error accurs. 
    This time peroid is called the TDZ (Temporal Dead Zone )*/


console.log(x);   //  undifined
var x=10;    


console.log(y);   //  Reference Error
var y = 10;   



/*------------------------------------------------------------------------------------------------------------------------ */



// hoisting in js 

/* Hoisting in s means that variable and function declaration are moved to the top of their scope b
  efore code execution  */
  

  console.log(z);   //undefind
  var z = 10;   



