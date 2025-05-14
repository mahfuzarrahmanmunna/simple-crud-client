import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const updated = useLoaderData()
    // console.log(updated);

    const handleUpdateUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedData = { name, email }
        console.log(updatedData);


        // Update user from database
        fetch(`http://localhost:3000/users/${updated._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log("After updated", data);
                }
            })
    }
    return (
        <div>
            <h1>This is user Update</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" defaultValue={updated.name} /><br />
                <input type="email" name="email" id="" defaultValue={updated.email} /><br />
                <input type="submit" value="Update User" />
            </form>

        </div>
    );
};

export default UpdateUser;