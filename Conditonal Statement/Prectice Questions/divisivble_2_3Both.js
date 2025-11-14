// chech if a given number is divisible by 2,3 or both

let num = +prompt("Enter a number : ");

if(num % 2 === 0){
    console.log(`${num} is divisible by 2.`); 
}
else if(num % 3 === 0){
    console.log(`${num} divisible by 3.`);
}
else if(num % 2 == 0 && num % 3 == 0){
    console.log(`${num} is divisivle by both 2 and 3.`);
}
else{
    console.log(`${num} is not divisible by 2 or 3.`);
}