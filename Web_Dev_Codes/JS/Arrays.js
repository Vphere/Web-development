// Creating an Array and Initializing with Values
let b = [10, 20, 30,40,50];	// This method has more efficiency, readability, and speed than creating using below method
console.log(b);

b[2] = 35;  // change element of array like this
/* "Array Constructor" method refers to creating arrays by invoking the Array constructor function. */
let a1 = new Array(10, 20, 30);
console.log(a1);

b.splice(2,2,10,25,39);
/* First parameter is for at which index you want to perform o/p, second one is for how many numbers to remove 
   and afterwards parameters will be used to add the numbers to array from which first element is removed.*/
console.log(b);

let concateArray = a1.concat(b);    // Concatenate both arrays
console.log("Concatenated Array: ", concateArray);
console.log(typeof concateArray);     // Check type of array

// There are two methods by which we can recognize a JavaScript array:
console.log("Using Array.isArray() method: ", Array.isArray(concateArray));
console.log("Using instanceof method: ", courses instanceof concateArray);

// Creating an Array and Initializing with Values
let a2 = ["HTML", "CSS", "JS","React","SpringBoot"];
a2.push("Node.js");	    // Add Element to the end of Array
a2.unshift("Web Development");	// Add Element to the beginning
console.log(a2);

let lst = a2.pop();     // Removes and returns the last element
console.log("After Removing the last: " + a2);

let fst = a2.shift();   // Removes and returns the first element
console.log("After Removing the First: " + a2);

a2.splice(1, 2);     // Removes 2 elements starting from index 1
console.log("After Removing 2 elements starting from index 1: " + a2);

console.log(a2.length);     // To get length of array.
console.log(a2.toString()); // It will print multiple elements seperated by comma.
console.log(a2.join("-"));  // We can specify how to join multiple elements. 