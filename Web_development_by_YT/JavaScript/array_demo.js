let a1 = [ 1,2,3,4];


// map : 
let na1 = a1.map((ele)=>{
    return ele**2;
});
console.log(na1);


// a1[2] = 5;
// console.log(a1.length); // To know length of array.
// console.log(a1.toString()); // It will print multiple elements seperated by comma.
// console.log(a1.join("-")); // We can specify how to join multiple elements. 

// a1.pop(); // Removes last element from array.
// console.log(a1);

// a1.push(4); // Adds element to the end of array.
// console.log(a1);

// console.log(a1.shift()); // It will remove first element of array.
// console.log(a1);

// console.log("Before: " + a1);
// console.log(a1.unshift(33)); // It will add new element at the beginning of array and function returns length of array.
// console.log("After: " + a1);

// a1.splice(2,2,10,25,39);
// /* First parameter is for at which index you want to perform o/p, second one is for how many numbers to remove 
//    and afterwards parameters will be used to add the numbers to array from which first element is removed.*/
// console.log(a1);