import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Navbar</NavLink>
          <NavLink to="/Form">Form</NavLink>
       </div>
    );
}
 
export default Navigation;