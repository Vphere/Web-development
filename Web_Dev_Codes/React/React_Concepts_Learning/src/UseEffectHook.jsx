import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (count > 5)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMessage("Too High!");
        else if (count < 0)
            setMessage("Too Low!");
        else
            setMessage("");

        document.title = `Count is ${count}`;
    }, [count]);

    /*  We should use useState only for data which is independent from others and cannot be computed using 
        existing data, but here we compute message using count that's why message should not be stored 
        using useState */

    return (
        <>
            <h1>Day 2 React Learning 🚀</h1>
            <h2>Today is All about larning useEffect how it works and what is requirement of this Hook.</h2>

            <p>{count}</p>
            <p>{message}</p>
            <p>This number is {count % 2 === 0 ? "EVEN" : "ODD"}</p>

            <p>Alternative to how to handle message without using useState is below.</p>
            <p>
                { count > 5 ? "Too High !" : count < 0 ? "Too Low!" : "" }
            </p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </>
    );
}