import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const locations = [
  {name: "Hawai'i", coordinates: [0,0], img: '../../../public/'},
  {name: "Cancun", coordinates: [0,0], img: '../../../public'},
  {name: "Moscow", coordinates: [0,0], img: '../../../public'},
  {name: "London", coordinates: [0,0], img: '../../../public'},
  {name: "Paris", coordinates: [0,0], img: '../../../public'},
  {name: "Rome", coordinates: [0,0], img: '../../../public'},
  {name: "Bangkok", coordinates: [0,0], img: '../../../public'},
  {name: "Helsinki", coordinates: [0,0], img: '../../../public'},
  {name: "Lima", coordinates: [0,0], img: '../../../public'},
  {name: "Chiclayo", coordinates: [0,0], img: '../../../public'},
  {name: "Macchu Picchu", coordinates: [0,0], img: '../../../public'},
  {name: "Dublin", coordinates: [0,0], img: '../../../public'},
  {name: "Puerta Plata", coordinates:[0,0], img: '../../../public'},
  ];

  function InteractiveMap() {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height:"100vh", width: "100%" }}>
        
      </MapContainer>
    )
  }