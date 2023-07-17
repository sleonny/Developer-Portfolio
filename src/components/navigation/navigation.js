import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink exact to="/">
        About Me
      </NavLink>
      <NavLink to="/Portfolio">Portfolio</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Resume">Resume</NavLink>
    </nav>
  );
};

export default Navigation;
