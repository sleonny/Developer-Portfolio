import React from "react";
import InteractiveMap from "../../InteractiveMap";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <div className="text-container">
          <h2>A Little About Myself</h2>
          <p>Hello! I'm a recent graduate from the George Washington University Full Stack Bootcamp with a newfound passion for technology and programming. My background in hospitality has instilled in me strong interpersonal skills and a customer-centric mindset that I believe are invaluable in the tech industry. Known for my adaptability, I can comfortably wear the hat of a leader or a team player depending on the needs of a project.

When I'm not immersing myself in code, you can find me exploring the great outdoors with my wife Claudia and our two dogs, Slurpy and Tilly, or meticulously tending to our garden. Traveling is a favorite pastime of mine and I believe it's an activity that has broadened my perspective and encouraged me to continually step outside of my comfort zone, a trait I bring to my programming practice. I'm also an ardent soccer fan and enjoy following the exciting developments of the sport.

As I transition into the tech sector, I am keen to bring my unique blend of skills to a dynamic and innovative team. I'm excited about the potential to craft solutions that can make a real-world impact and I am eagerly seeking opportunities to leverage my tech skills to drive meaningful change. I am eager to learn, ready to take on challenging tasks, and excited to start this new journey. I look forward to not only growing my tech skill set, but also being a valuable and positive addition to the team</p>
        </div>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/me.jpg"}
            alt="Posing by a boat"
          />
        </div>
      </div>
      <InteractiveMap />
    </div>
  );
};

export default AboutMe;
