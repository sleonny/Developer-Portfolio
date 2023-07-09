import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/YourGitHubUsername"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/YourLinkedInUsername"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://facebook.com/YourFacebookUsername"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      {/* Add more links as you need */}
    </footer>
  );
};

export default Footer;
