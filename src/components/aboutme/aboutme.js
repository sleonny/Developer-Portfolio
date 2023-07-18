import React from "react";
import InteractiveMap from "../../InteractiveMap";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <div className="text-container">
          <h2>About me</h2>
          <p>Fill in details about myself</p>
        </div>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/lima.jpg"}
            alt="Posing by a boat"
          />
        </div>
      </div>
      <InteractiveMap />
    </div>
  );
};

export default AboutMe;
