import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/sleonny" target="_blank" rel="noreferrer">
        <img
          src={process.env.PUBLIC_URL + "/public/githublogo.png"}
          alt="Github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sean-leonard-23280010b/"
        target="_blank"
        rel="roreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/public/linkedinlogo.png"}
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://www.facebook.com/sean.leonard.359126/"
        target="blank"
        rel="noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/public/facebooklogo.png"}
          alt="Facebook"
        />
      </a>
    </footer>
  );
};

export default Footer;
