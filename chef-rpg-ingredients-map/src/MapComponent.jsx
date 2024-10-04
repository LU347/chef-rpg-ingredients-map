import React, { useState } from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import MarkerObjects from './MarkerObjects';
import Sidebar from './Sidebar';

import "leaflet/dist/leaflet.css";
import mapImageUrl from './assets/game-map.png';

function MapComponent() {
  const [filter, setFilter] = useState("");
  const bounds = [
    [0, 0], 
    [1080, 1920]
  ];

  const handleSearch = (searchTerm) => {
    setFilter(searchTerm);
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onSearch={handleSearch} />
      <MapContainer 
        style={{ width: '100vw', height: '100vh' }}
        center={[500, 960]} 
        zoom={0}
        minZoom={-2}
        crs={L.CRS.Simple}
      >
        <ImageOverlay
          url={mapImageUrl}
          bounds={bounds}
          opacity={1}
          zIndex={10}
        />
        <MarkerObjects filter={filter} />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
