import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>...and more!</li>
      </ul>
    </div>
  );
};

export default Resume;
