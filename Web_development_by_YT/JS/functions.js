const sum = (a,b) => {
    let c = a + b;
    return c;
}
console.log(sum(1,5));


function greeting(mes,mes1) 
{
    return "Good ${mes} ${mes1}"; //By concatanation(+ sign) "Good " + mes + " " + mes1 ;
}
console.log(greeting("Morning","Hii"));

function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument