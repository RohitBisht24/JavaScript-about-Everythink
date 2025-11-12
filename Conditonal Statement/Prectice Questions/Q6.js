/*Q6. Write a program to check is 2 numbers have the same last digit.
        Eg. 32 and 47852 have the same last digit i.e. 2*/

let first_num = 32;
let second_num = 4785;

num1 = first_num%10;
num2 = second_num%10;

if (num1 === num2)
{
    console.log("yes");
}
else{
    console.log("not");
}