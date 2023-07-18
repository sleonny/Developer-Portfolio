import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const locations = [
  { name: "Hawai'i", coordinates: [0, 0], img: "../public/hawaii.JPG" },
  { name: "Cancun", coordinates: [0, 0], img: "../public/mexico.jpg" },
  { name: "Moscow", coordinates: [0, 0], img: "../public/moscow.jpg" },
  { name: "Sochi", coordinates: [0, 0], img: "../public/sochi.jpg" },
  { name: "London", coordinates: [0, 0], img: "../public/london.jpg" },
  { name: "Paris", coordinates: [0, 0], img: "../public/paris.jpg" },
  { name: "Rome", coordinates: [0, 0], img: "../public/rome.jpg" },
  { name: "Bangkok", coordinates: [0, 0], img: "../public/bangkok.jpg" },
  { name: "Helsinki", coordinates: [0, 0], img: "../public/helsinki.jpg" },
  { name: "Lima", coordinates: [0, 0], img: "../public/lima.jpg" },
  { name: "Stonehenge", coordinates: [0, 0], img: "../public/stonehenge.jpg" },
  { name: "Macchu Picchu",
    coordinates: [0, 0],
    img: "../public/macchupichhu.JPG",
  },
  { name: "Dublin", coordinates: [0, 0], img: "../public/dublin.JPG" },
  {
    name: "Puerta Plata",
    coordinates: [0, 0],
    img: "../public/puertaplata.jpg",
  },
  { name: "Windsor", coordinates: [0, 0], img: "../public/windsor.jpg" },
];

function InteractiveMap() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker position={location.coordinates} key={idx}>
          <Popup>
            <img
              src={process.env.PUBLIC_URL + location.img}
              alt={location.name}
            />
          </Popup>
        </Marker>
      ))}{" "}
    </MapContainer>
  );
}

export default InteractiveMap;
