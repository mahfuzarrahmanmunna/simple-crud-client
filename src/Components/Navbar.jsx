import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'> Home </NavLink>
            </nav>
        </div >
    );
};

export default Navbar;