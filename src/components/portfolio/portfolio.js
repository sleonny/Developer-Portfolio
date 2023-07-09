import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // Sample data, replace with your actual projects
  const projects = [
    {
      title: "Project 1",
      image: "project1.png",
      deployedUrl: "https://www.example.com",
      repoUrl: "https://github.com/user/repo",
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed App
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
