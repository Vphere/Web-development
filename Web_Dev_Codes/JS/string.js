let nam = "vaidik";
const age = 25;

console.log(nam.length); // To print length of string.
console.log(`Hello, my name is ${nam} and I am ${age} years old.`);
console.log(`Hello,\nThis is Vaidik's Academy.`);

let literal = `I can print double quote also " " `;
console.log(literal);

let s1 = "      harry       ";
console.log(s1.trim()); // it removes extra white space.

console.log("har\"".length);
console.log(s1.includes("rgyh")); // It find that whether specified substring is present in object or not. 
console.log(nam.startsWith("vai"));
console.log(nam.endsWith("dik"));

let s2 = "please give rs 1000";
console.log(s2.slice(15));