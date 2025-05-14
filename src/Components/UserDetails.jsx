import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h1>This is user details</h1>
            <form>
                
            </form>
        </div>
    );
};

export default UserDetails;