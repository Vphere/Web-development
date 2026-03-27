import React, {useRef, useState} from "react";
import axios from "axios";

const UseRef = () =>{
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);

    const textareaRef = useRef(null);
    const inputRef = useRef(null);

    async function handleSubmit(){
        setData("");

        try{
            const apiUrl = inputRef.current.value;
            const response = await axios.get(apiUrl);
            setData(JSON.stringify(response.data));

            if(textareaRef.current){
                textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
            }
        }
        catch(error){
            setError(error);
        }
        inputRef.current.focus();
    }

    return(
        <div>
            <div>
                <label htmlFor="api">API URL:</label>
                <input type="text" ref={inputRef} style={{width: "500px", color: "brown"}}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Fetch Data</button>
            {   data?(
                    <div>
                        <textarea rows = '7' cols = '100' name="result" id = "result" ref={textareaRef} value={data} readOnly style={{width:"600px", height: "200px", color:"blue"}}/>
                    </div>
                ):error?(
                    <p style={{color: "red"}}>Error: {error.message}</p>
                ): (
                    <p>No data fetched yet. Please wait</p>
                )
            }
        </div>
    );
}

export default UseRef;