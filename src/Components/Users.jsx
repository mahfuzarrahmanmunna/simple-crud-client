import React, { use, useState } from 'react';

const Users = ({ userPromise }) => {
    const initialUsers = use(userPromise)
    console.log(initialUsers);
    const [user, setUser] = useState(initialUsers)
    console.log(user);

    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email }
        console.log(newUser);

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
                {user?.map(user => (
                    <p key={user._id}>{user.name} : {user.email}</p>
                ))}
            </div>
        </div>
    );
};

export default Users;