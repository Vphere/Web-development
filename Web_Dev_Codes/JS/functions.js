function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}
greet("Alice");  // "Alice" is the argument

function greet(name = "Guest") {    // Default Parameter
  console.log("Hello, " + name);
}
greet();        // Hello, Guest (default used)
greet("Aman");  // Hello, Aman

function factorial(n) {     // Recursive Function
  if (n === 0) 
    return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

function greeting(mes,mes1) 
{
    return `Good ${mes} ${mes1}`; //By concatanation(+ sign) "Good " + mes + " " + mes1 ;
}
console.log(greeting("Morning","Hii"));


const greet = function() {  // Anonymous Function
  return "Hi there!";
};
console.log(greet()); 

const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); 


const square = n => n * n; // As we have one parameter "n" only i is not required to put round bracket 
console.log(square(4)); // 16

const sum = (a,b) => {
    let c = a + b;
    return c;
};
console.log(sum(1,5));


// A special type of function used to create multiple objects with the same structure. It’s called with the new keyword.
function Person(name, age) {    // Constructor Function
  this.name = name;
  this.age = age;
}
const user = new Person("Vaidik", 20);
console.log(user.name); // Vaidik