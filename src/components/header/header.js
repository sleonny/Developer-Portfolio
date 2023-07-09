import React from "react";
import Navigation from "../navigation/navigation";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Your Name</h1>
      <Navigation />
    </div>
  );
};

export default Header;