import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function LocationTracker() {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  return (
    <Map center={location} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>Your current location</Popup>
      </Marker>
    </Map>
  );
}

export default LocationTracker;
