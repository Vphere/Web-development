import React, { useState } from "react";

function CounterFunction(props){
    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Click Me!</button>
        </div>
    );
}

export default CounterFunction;