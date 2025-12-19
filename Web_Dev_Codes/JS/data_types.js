/* 
The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively. 
NaN is technically of type number.*/
let n1 = 2;
let n2 = 1.3;
let n3 = Infinity;
let n4 = 'something here too' / 0;

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

/*
There's no difference between 'single' and "double" quotes in JavaScript. Backticks provide extra functionality as with their help of them we can embed variables inside them.*/
let s1 = "Hello There";
let s2 = 'Single quotes work fine';
let s3 = `can embed ${s1}`;

console.log(s1); 
console.log(s2); 
console.log(s3);


// The boolean type has only two values i.e. true and false.
let b1 = true; // OR b1 = false
console.log(b1);  


// null data type defines a special value that represents nothing, or empty value.
let age = null;
console.log(age)


/*
A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.*/
let a;
console.log(a);

/*
Symbols are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.
Here, immutable does not mean you cannot change value of it but it means that whenever i assign new value to that variable it will point to NEW value not pointing to OLD value and later this OLD value will be garbage-collected*/
let sm1 = Symbol("Geeks");
let sm2 = Symbol("Geeks");
sm1 = "Hello";
sm2 = "World";

console.log(sm1);
console.log(sm2);
console.log(sm1 === sm2);

/*
Because JavaScript numbers can only safely store integers up to: Number.MAX_SAFE_INTEGER // 9007199254740991
Anything beyond this loses accuracy. So, BigInt solves that.
BigInt can store any-size integer — there is no fixed maximum limit like normal numbers.*/
let big = 123456789012345678901234567890n;
let big1 = BigInt(100);   // 100n                    // From Number
let big2 = BigInt("123456789012345678901234567890"); // From String
let big3 = BigInt("0b1010101001010101001111111111111111"); // Here, 0b indicates that is is binary number 
                                                // Take this long binary number and convert it to a BigInt.
console.log(big);
console.log(big1);
console.log(big2);
console.log(big3);

// objects are key-value pairs used to store data, created with {} or the new keyword. 
let gfg = {
    type: "Company",
    location: "Noida"
};
console.log(gfg.type);


// Array is a special kind of object used to store an ordered collection of values, which can be of any data type.
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);


// The Date object is used to work with dates and times, allowing for date creation, manipulation, and formatting.
let currentDate = new Date();
console.log(currentDate); // It will display current date and time