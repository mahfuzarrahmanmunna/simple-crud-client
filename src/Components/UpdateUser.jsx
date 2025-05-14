import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const updated = useLoaderData()
    console.log(updated);
    return (
        <div>
            <h1>This is user Update</h1>
        </div>
    );
};

export default UpdateUser;