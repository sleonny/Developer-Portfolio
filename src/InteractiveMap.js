import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customMarkerIcon = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/marker.png", // Adjust this path
  iconSize: [25, 25], // Adjust the size of your icon if needed
  iconAnchor: [12.5, 12.5], // Adjust this point of the icon which will correspond to the marker's location
  popupAnchor: [-3, -76], // Adjust this point from which the popup should open relative to the iconAnchor
});

const locations = [
  {
    name: "Hawai'i",
    coordinates: [21.3069, -157.8583],
    img: "/hawaii.JPG",
  },
  {
    name: "Cancun",
    coordinates: [21.1619, -86.8515],
    img: "/mexico.jpg",
  },
  {
    name: "Moscow",
    coordinates: [55.7558, 37.6176],
    img: "/moscow.jpg",
  },
  {
    name: "Sochi",
    coordinates: [43.6028, 39.7345],
    img: "/sochi.jpg",
  },
  {
    name: "London",
    coordinates: [51.5074, -0.1278],
    img: "/london.jpg",
  },
  { name: "Paris", coordinates: [48.8566, 2.3522], img: "/paris.jpg" },
  { name: "Rome", coordinates: [41.9028, 12.4964], img: "/rome.jpg" },
  {
    name: "Bangkok",
    coordinates: [13.7563, 100.5018],
    img: "/bangkok.jpg",
  },
  {
    name: "Helsinki",
    coordinates: [60.1699, 24.9384],
    img: "/helsinki.jpg",
  },
  {
    name: "Lima",
    coordinates: [-12.0464, -77.0428],
    img: "/lima.jpg",
  },
  {
    name: "Stonehenge",
    coordinates: [51.1789, -1.8262],
    img: "/stonehenge.jpg",
  },
  {
    name: "Macchu Picchu",
    coordinates: [-13.1631, -72.545],
    img: "/macchupichhu.JPG",
  },
  {
    name: "Dublin",
    coordinates: [53.3498, -6.2603],
    img: "/dublin.JPG",
  },
  {
    name: "Puerta Plata",
    coordinates: [19.7808, -70.6871],
    img: "/puertaplata.jpg",
  },
  {
    name: "Windsor",
    coordinates: [51.4839, -0.6044],
    img: "/windsor.jpg",
  },
];

function InteractiveMap() {
  // Add state to store the clicked location
  const [clickedLocation, setClickedLocation] = useState(null);

  return (
    <div className="map-and-image-container" style={{display: 'flex', height: '60vh'}}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        style={{ height: "100%", width: "66%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, idx) => (
          <Marker
            position={location.coordinates}
            key={idx}
            icon={customMarkerIcon}
            eventHandlers={{
              click: () => {
                // On click, set the clicked location state
                setClickedLocation(location);
              },
            }}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {clickedLocation && (
        <div style={{ width: "33%", textAlign: 'center', marginTop: '20px' }}>
          <img
            src={process.env.PUBLIC_URL + clickedLocation.img}
            alt={clickedLocation.name}
            style={{ width: "80%", height: "90%" }} // adjust size as needed
          />
          <p>{clickedLocation.name}</p>
        </div>
      )}
    </div>
  );
}

export default InteractiveMap;