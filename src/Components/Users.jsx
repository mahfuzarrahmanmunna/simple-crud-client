import React, { use, useState } from 'react';
import { Link } from 'react-router';
import './User.css'

const Users = ({ userPromise }) => {
    const initialUsers = use(userPromise)
    // console.log(initialUsers);
    const [user, setUser] = useState(initialUsers)
    // console.log(user);

    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email }
        // console.log(newUser);

        // create User 
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after creating user in the db', data);
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...user, newUser]
                    setUser(newUsers)
                    alert("User added successfully");
                    e.target.reset()
                }
            })
    }

    const handleUserDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingUser = user.filter(user => user._id !== id);
                    setUser(remainingUser)
                    console.log('after delete', data);
                }
            });
    }
    return (
        <div>
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name="name" id="" /><br />
                    <input type="email" name="email" id="" /><br />
                    <input type="submit" value="Add User" />
                </form>
            </div>
            <div>
                <h1>{user.length}</h1>
                {user?.map(user => (
                    <p key={user._id}>
                        {user.name} : {user.email}
                        <Link state={{ marginLeft: "12px" }} to={`/users/${user._id}`}>details</Link>
                        <button onClick={() => handleUserDelete(user._id)}>x</button>
                        <Link state={{ marginLeft: "12px" }} to={`/update/${user._id}`}>Edit</Link>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;