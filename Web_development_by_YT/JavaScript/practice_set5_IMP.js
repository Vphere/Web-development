// Q1 & 2
let numbers = [];
// let count = parseInt(prompt("How many numbers do you want to enter?"));

for (let i = 0; numbers[i-1]!=0 ; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

console.log("The array of numbers is:", numbers);

// Q3 : 

const divisibleby10 = (num) =>{
    if(num%10==0)
        return true;
    return false;
}

console.log("The array of numbers divisible by 10 is:" , numbers.filter(divisibleby10));

// Q4:

let squarearr = numbers.map((num)=>{
    return num**2;
})

console.log("Square of every number in above array is:", squarearr);

// Q5:

let factarr = [1,2,3,4,5,6,7,8];

const multiply = ((a,b) =>{
    return a*b;
})

let fact = factarr.reduce(multiply);

console.log(fact);