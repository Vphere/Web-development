import React, {useState} from "react";

function UseStateDemo(){
    const[show, setShow] = useState(false);
    const[count, setCount] = useState(0);
    const[message, setMessage] = useState("");

    function handleClick(){
        setShow(!show);
    }

    return(
        <div>
            <h1>Hello! Vaidik Patel. Kem cho maja ma ne?</h1>
            <button onClick={handleClick}>
                Click Me!
            </button>
            {show && <p>You Clicked!</p>}

            <h2>{count}</h2>
            <p>{message}</p>

            <button 
                onClick={()=>{
                    if(count === 4)
                        setMessage("Max limit reached!");
                    else
                        setMessage("");
                    
                    setCount(count+1);
                    }
                }
                disabled={count === 5} >
                Increment
            </button>

            <button 
                onClick={()=> {
                    if(count <= 1)
                        setMessage("Min limit reached!");
                    else 
                        setMessage("");
                    setCount(count-1)
                    }
                }
                disabled={count === 0} >
                Decrement
            </button>

            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    );
}

export default UseStateDemo;