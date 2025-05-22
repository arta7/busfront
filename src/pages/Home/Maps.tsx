import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

const Maps = ({lat,long}) => {
  return (
    <MapContainer center={[35.6892, 51.3890]} zoom={13} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
     <Marker position={[35.6892, 51.3890]}>
          
      </Marker>

       <Marker position={[35.6892, 51.3890]}>
          
      </Marker>
    </MapContainer>
  );
};

export default Maps;