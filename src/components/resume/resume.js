import React, { useState } from "react";
import "./resume.css";

const Resume = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <div className="resume">
      <div className="resume-section">
        <h2>Experience</h2>
        <div className="job" onClick={() => setSelectedJob("Job1")}>
          <h3>Title 1</h3>
        </div>
        {selectedJob === "Job1" && <p>Job Description</p>}

        <div className="job" onClick={() => setSelectedJob("Job2")}>
          <h3>Title 2</h3>
        </div>
        {selectedJob === "Job2" && <p>Job Description</p>}

        <div className="job" onClick={() => setSelectedJob("Job3")}>
          <h3>Title 3</h3>
        </div>
        {selectedJob === "Job3" && <p>Job Description</p>}

        <div className="resume-section">
          <h2>Education</h2>
          <div className="school" onClick={() => setSelectedSchool("School1")}>
            <h3>School Name 1</h3>
          </div>
          {selectedSchool === "School1" && <p>Degree</p>}

          <div className="school" onClick={() => setSelectedSchool("School2")}>
            <h3>School Name 2</h3>
          </div>
          {selectedSchool === "School2" && <p>Degree</p>}

          <div className="school" onClick={() => setSelectedSchool("School3")}>
            <h3>School Name 3</h3>
          </div>
          {selectedSchool === "School3" && <p>Degree</p>}
        </div>
        <div className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
            <li>Skill 5</li>
            <li>Skill 6</li>
            <li>Skill 7</li>
            <li>Skill 8</li>
            <li>Skill 9</li>
            <li>Skill 10</li>
            <li>Skill 11</li>
            <li>Skill 12</li>
            <li>Skill 13</li>
            <li>Skill 14</li>
          </ul>
        </div>

        <a href="https://docs.google.com/document/d/15NBWUrvLEH5hA2j_AJh6F3RY1AiRCdigx9nw2hp9NvA/edit?usp=sharing">
          View my official resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
