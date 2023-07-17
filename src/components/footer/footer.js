import React from "react";
import "./Footer.css";

const Footer = () {
  return (
    <footer className="footer">
    <a href="https://github.com/sleonny" target="_blank" rel="noreferrer">
    <img src={process.env.PUBLIC_URL + '/public/githublogo.png'} alt="Github" />
    </a>
    
    </footer>
  )
}