import React, {useState, useEffect} from "react";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import SearchType from "./SearchType";

export default function ApiCall_5(){

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");
    const[search, setSearch] = useState("");
    const[searchType, setSearchType] = useState("");

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

    const filteredData = search.trim() === ""
                            ? []
                            : data.filter(user =>
                                {
                                    if(searchType === "name")
                                        return user.name.toLowerCase().includes(search.toLowerCase());
                                    else
                                        return user.email.toLowerCase().includes(search.toLowerCase());
                                }
                                )
                                .slice(0, 5);
    return(
        <>
            <h1>Hello, Welcome to react day 5 learning, excited to explore about API calls</h1>

            <SearchType
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)} />

            <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value) }/>

            <UserList users={filteredData} />
        </>
    );
}