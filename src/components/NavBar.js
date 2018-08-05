import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={link}
        >Home</NavLink>
      
    </div>
  );
};

export default NavBar;
