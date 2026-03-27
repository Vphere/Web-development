import React, {useState, useEffect} from "react";
import './ApiCall_3.css'

export default function ApiCall_3(){

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");
    const[search, setSearch] = useState("");

    // useEffect(() =>{

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data);
    //         setLoading(false);
    //     })
    //     .catch(err => {
    //         setError("Something went wrong");
    //         setLoading(false);
    //     })
    // }, []);

    useEffect(()=>{

        async function fetchData(){
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setData(data);
            }
            // eslint-disable-next-line no-unused-vars
            catch(err){
                setError("Something went wrong in fetching user details.")
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[]);
    
    if(loading)
        return <p>Loading...</p>
    if(error)
        return <p>{error}</p>

    const filteredData = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).slice(0,5);

    return(
        <>
            <h1>Hello, Welcome to react day 3 learning, excited to explore about API calls</h1>
            {/* {loading===true && <p>Loading...</p>}  */}

            <div className="container">
                {
                    data.slice(0,5).map(
                        user =>(
                            <div className="user-card" key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p><br/>
                            </div>
                        )
                    )
                }
            </div>

            <br/>
            <br/>

            <input type="text" 
                    placeholder="Search by name" 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)} />

            <p>Below is filtered result for your search result</p>
            
            {
                search.length!==0 ? 
                    <div className="container">
                    {
                        filteredData.map(
                            user =>(
                                <div className="user-card" key={user.id}>
                                    <p>Name: {user.name}</p>
                                    <p>Email: {user.email}</p><br/>
                                </div>
                            )
                        )
                    }
                </div>
                :
                <></>
            }
        </>
    );
}