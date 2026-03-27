import React, {useState} from "react";
import { sculptureList } from "./data";

const Gallery = () =>{
    const[index, setIndex] = useState(0);
    const[showmore, setShowmore] = useState(false);

    function handleNext(){
        setIndex(index + 1);
    }

    function handlePrev(){
        setIndex(index - 1);
    }

    function handleShowmore(){
        setShowmore(!showmore);
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
            <div>
                <button onClick={handleShowmore}>
                    {showmore ? "Hide" : "Show"} Details
                </button>
            </div>
            <div>
                { showmore && <p>{sculpture.description}</p> }
                <img src={sculpture.url} alt = {sculpture.alt}/>
            </div>
            
        </>
    );
}

export default Gallery;