import React from "react";
import '../ApiCall_3.css';

export default function UserCard({userName, email, phoneNo, website}){
    return(
        <div className="user-card" >
            <p>Name: {userName}</p>
            <p>Email: {email}</p>
            <p>Phone No.: {phoneNo}</p>
            <p>Website: {website}</p>
        </div>
    );
}