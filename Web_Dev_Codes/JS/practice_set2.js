// Q2 : switch demo
let a = 10;
let day;

switch(a)
{
    case 1 :
        day = "monday";
        break;

    case 2 :
        day = "tuesday";
        break;

    case 3 :
        day = "wednesday";
        break;

    default:
        day = "No day";
}
console.log(day);


//Q3 & 4: To check number is divisble by 2 and 3 or not.
let num = 13;

if(num % 2 == 0 && num % 3 == 0)
{
    console.log("Number is divisible by 2 and 3.");
}
else
{
    console.log("Number is not divisible by 2 and 3.");
}


//Q6 : Ternary operator
let age = 2;
let string = age>18 ? "You can drive" : "You cannot drive";

console.log(string);