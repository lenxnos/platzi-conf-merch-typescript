import type { LatLngExpression } from 'leaflet';
import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import '../styles/components/Map.css';

interface MapProps {
  location: LatLngExpression;
}

interface ChangeViewProps {
  center: LatLngExpression;
  zoom: number;
}

function ChangeView({ center, zoom }: ChangeViewProps) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map: FC<MapProps> = ({ location }) => {
  return (
    <MapContainer center={location} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        <i className="fa-solid fa-location-dot" />
      </Marker>
      <ChangeView center={location} zoom={16} />
    </MapContainer>
  );
};
export default Map;
