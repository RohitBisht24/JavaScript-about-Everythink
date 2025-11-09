// Tamplate Literals ?
// they are uesd to add embedded expressions in a string.

let pencilPrice = 10;
let erasorPrice = 5;
console.log("The Total Price is : ",pencilPrice + erasorPrice,"Rupees"); 

// can you write this.
let output = "The Total Price is : "+ (pencilPrice + erasorPrice )+" Rupees.";
console.log(output);


//and can you write this also using Tamplate Literals is JavaScript.
let output1 = `The Total Price is : ${pencilPrice + erasorPrice} Rupees`; //using `` back ticks
console.log(output);

//and can write in console.log
console.log(`The Total Price is : ${pencilPrice + erasorPrice} Rupees.`);


