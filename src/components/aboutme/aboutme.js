import React, { useState } from "react";
import MapComponent from "./MapComponent"; // Import your map component

const AboutMe = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);

  return (
    <div className="about-me">
      <div className="intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          purus quis vehicula hendrerit.
        </p>
        <p>
          Mauris ultrices purus non turpis sagittis, a posuere lectus ornare.
          Integer tincidunt nunc sit amet elit tincidunt, in pharetra sem
          fermentum.
        </p>
        <p>
          Fusce sodales odio a augue dictum, nec sagittis massa gravida. Vivamus
          volutpat nisl quis libero efficitur, at sollicitudin nulla luctus.
        </p>
      </div>
      <h3 className="map-title">
        Explore the places I've been by hovering over the cities on the map!
      </h3>
      {isMapVisible && <MapComponent />}
    </div>
  );
};

export default AboutMe;
