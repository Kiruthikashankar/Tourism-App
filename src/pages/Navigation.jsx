// src/pages/Navigation.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Navigation.css';

const Navigation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {
        setLocation([3.139, 101.6869]); // default to Kuala Lumpur
      }
    );
  }, []);

  const userIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
  });

  return (
    <div className="navigation-container">
      <h2>Live Navigation Map 🗺️</h2>
      {location && (
        <MapContainer center={location} zoom={13} className="map-box">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location} icon={userIcon}>
            <Popup>You are here! 📍</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Navigation;
