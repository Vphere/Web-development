import React, {useEffect, useState} from "react";
import axios from "axios";

const UseEffect = ()=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos/1");

                setData(response.data);
            }
            catch(error){
                setError(error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
             {  data ? (
                    <div>
                        <h2>Api Response came</h2>
                        <h2>title: {data.title}</h2>
                        <img src={data.url} width="300" alt={data.title}/>
                    </div>
                ):
                error ? (
                    <div>
                        <h2>Error in fetching api response</h2>
                        <h3 style={{color:'red'}}>{error.message}</h3>
                    </div>
                ): (
                    <p>Loading...</p>
                )
             }
        </div>
    );
}

export default UseEffect;