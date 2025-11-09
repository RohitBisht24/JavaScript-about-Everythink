/*Let let num = 789;
Convert it into a string and print both before and after type using typeof.*/

let num = 178;

// for normal condition
console.log(num)
console.log(`before : ${typeof num}`)

// it's a first way to convet number to string
let str_way1 = String(num);
console.log(str_way1);
console.log(`after : ${typeof str_way1}`);

// it's a second way to convert number to string
let str_way2 = num + "";
console.log(str_way2);
console.log(`after : ${typeof str_way2}`);