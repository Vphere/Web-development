import React, {useState} from "react";
import { sculptureList } from "./data";

const Gallery = () =>{
    const[index, setIndex] = useState(0);

    function handleNext(){
        setIndex(index + 1);
    }

    function handlePrev(){
        setIndex(index - 1);
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <button onClick={handlePrev} disabled={index === 0} style={{margin: 10}}>Prev</button>
            <button onClick={handleNext} disabled={index === sculptureList.length - 1 }>Next</button>
            
            <h1>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h1>
            <h2>({index} of {sculptureList.length})</h2>
            <img src={sculpture.url} alt = {sculpture.alt}/>
            <p>
                {sculpture.description}
            </p>
        </>
    );
}

export default Gallery;