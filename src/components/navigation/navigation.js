import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      {/* Add more NavLinks as needed */}
    </nav>
  );
};

export default Navigation;
