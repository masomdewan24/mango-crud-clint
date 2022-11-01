import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
    const handleDelete = user =>{
        const agree = window.confirm(`Are you aure qant to delete: ${user.name}`);
       
        if(agree){
           fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            // console.log(data)
            if(data.deletedCount > 0){
                alert('User delete successfull');
                const remainingUser = displayUsers.filter(usr => usr._id !== user._id);
                setDisplayUsers(remainingUser);
            }
        });
        }
        
    }
    return (
        <div>
            <h2> User:{displayUsers.length}</h2>
            <div>
                {
                displayUsers.map( user => <p key={user._id}>
                    {user.name} {user.email}<button
                    onClick={() => handleDelete(user)}>X</button>
                </p>
                
                )}
            </div>
        </div>
    );
};

export default Home;