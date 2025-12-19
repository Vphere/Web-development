// Q1:
let a = "Vaidik";
a = a + 10;
console.log(a);


// Q2:
console.log(typeof(a));


// Q3 & 4:
const c1 = {
    name : "Haider",
    salary : 50000.36
};

c1.phone_no = 1235897460; // You can modify the properties (add, update, or delete) of a const object like add new key to it.
// c1 = {name: "Faizux"}; // It will through an TypeError because we can't reassign the object itself to a new reference.

console.log(c1);
// Answer of Q4 : Yes, we can add new key to constant object.
// If i write Object.freeze(c1); then we can't add key to object c1