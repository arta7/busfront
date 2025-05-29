import React,{useContext} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import UserContext from './../../UserContext';

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Maps = ({lat, long}) => {
   const { userData, setUserData } = useContext(UserContext);
  // Use provided coordinates or default to Tehran coordinates
  const centerLat = lat || 35.6892;
  const centerLong = long || 51.3890;
  
  return (
    <MapContainer 
      center={[centerLat, centerLong]} 
      zoom={13} 
      style={{ height: '500px' }}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Default marker at center position */}
      <Marker position={[userData[0]?.sourcelat, userData[0]?.sourcelong]} icon={defaultIcon}>
        <Popup>
          Source Location <br /> 
          Latitude: {userData[0]?.sourcelat}, Longitude: {userData[0]?.sourcelong}
        </Popup>
      </Marker>
      
      {/* Example of another marker */}
      <Marker position={[userData[0]?.deslat, userData[0]?.deslong]} icon={defaultIcon}>
        <Popup>
          Another Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;