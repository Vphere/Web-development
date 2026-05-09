import React from 'react'
import UserCard from './UserCard';
import '../ApiCall_3.css';

export default function UserList({users}) {
  return (
    <div className="container">
        <h2>UserList</h2>
        {
            users.map(
                user =>(
                    <UserCard
                        key={user.id}
                        userName={user.name}
                        email={user.email}
                        phoneNo={user.phone}
                        website={user.website} />
                )
            )
        }
        
    </div>
  );
}