// Create a program to check profit or loss when cost proce and selling proce are given.

let costPrice = +prompt("Enter the Cost Price : ");
let sellingPrice = +prompt("Enter the Selling Price ");

if(costPrice < sellingPrice){
    console.log(`Profit = ${sellingPrice - costPrice}`);
}
else if(costPrice > sellingPrice){
    console.log(`Loss = ${costPrice - sellingPrice}`);  
}
else{
    console.log("No Profit No Loss.");
    
}