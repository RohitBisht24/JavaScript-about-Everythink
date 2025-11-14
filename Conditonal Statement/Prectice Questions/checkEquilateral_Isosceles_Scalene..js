let a = +prompt("Enter the first side of triangle : ");
let b = +prompt("Enter the second side of triangle : ");
let c = +prompt("Enter the third side of triangle : ");

if (a === b || b === c || c === a){
    console.log("Equilateral Triangle..");
}
else if(a === b || b === c){
    console.log("Isosceles Triangle.");
}
else{
    console.log("Scalene Triangle");
}