import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser)
    const handleUpdateUser = event =>{
        event.preventDefault();
        console.log(user);

      
       
    }
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
       const newUser = {...user}
       newUser[field] = value;
       setUser(newUser);
    }

    return (
        <div>
            <h2>Please update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.name} name='name' placeholder='Name' required />
                <br />
                <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name='email' placeholder='Email' required/>
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name='address' placeholder='Address' required/>
                <br />
                <button type='submit'>Update User</button>
            </form>
        </div>
    );
};

export default Update;