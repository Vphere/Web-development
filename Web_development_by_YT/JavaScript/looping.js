/* for...in — Looping Over Properties
This loop is used for iterating over the keys (property names) of an object. */

const person = { name: "Arya", age: 21 };

for (let key in person) 
{
  console.log(key);        // name, age
  console.log(person[key]); // Arya, 21
}


/* for...of — Looping Over Values
This loop is great for iterating over the values of iterable objects like arrays, strings, Sets, and Maps. */

const colors = ["red", "green", "blue"];

for (let color of colors) 
{
  console.log(color); // red, green, blue
}


let age = 25;
if(age>18)
{
    console.log("You are adult");
}
else if(age<18)
{
    console.log("You are child.");
}
else
{
    console.log("You can not vote.");
}


for (let i = 0; i < 5; i++) 
{
    console.log(" * ");
}


let a = 4;
while(a<9)
{
    console.log(a);
    a++;
}


let day1 = "monday";
let day2 = "sunday";
switch (day2) {
    case "monday":
        console.log("weekdays");
        break;

    case "sunday":
        console.log("weekend");
        break;

    default:
        console.log("Hello World!");
        break;
}