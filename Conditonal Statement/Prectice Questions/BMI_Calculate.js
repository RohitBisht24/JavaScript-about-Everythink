// take input form users
let weight = +prompt("Enter Your weight in kg : ");
let height = +prompt("Enter Your Height in meters : ");

// calculate BMI
let BMI = weight / (height * height);

// display BMI
console.log(`your BMI is : ${BMI.toFixed(2)}`);     //  iska mtlb hia kya decimal ke baad srif 2 hi digits dikhane ka liye

if(BMI < 18.5){
    console.log("You are Underweight.");
}
else if(BMI >= 18.5  && BMI < 25){
    console.log("You are the Normal weight.");
}
else if(BMI >= 25 && BMI < 30){
    console.log("you are the overwieght.");
}
else{
    console.log("you are Obese.");
}




