import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Exerease",
      imageUrl: process.env.PUBLIC_URL + "/Exerease.png",
      projectUrl: "https://github.com/michelleshanna92/Exerease",
    },
    {
      title: "FootWearHouse",
      imageUrl: process.env.PUBLIC_URL + "/FootWearHouse.png",
      projectUrl: "https://github.com/sleonny/FootWearhouse",
    },
    {
      title: "Golf Tournament",
      imageUrl: process.env.PUBLIC_URL + "/RobbyInv.png",
      projectUrl: "https://github.com/sleonny/RobbyInv",
    },
  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
