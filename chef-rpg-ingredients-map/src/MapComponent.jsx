import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, Tooltip, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from 'leaflet';

import "leaflet/dist/leaflet.css";
import mapImageUrl from './assets/game-map.png';

import coordinates from './lib/coordinates.json';
import items from './lib/itemData.json';
import MarkerComponent from './MarkerComponent.jsx';

function MapComponent() {
  const [itemData] = useState(items);
  const [itemCoordinates] = useState(coordinates);
  const [markerObjects, setMarkerObjects] = useState([]);

  const bounds = [
    [0, 0], 
    [1080, 1920]
  ];

  useEffect(() => {
    const newMarkers = itemCoordinates.map((location) => {
      const itemType = itemData[location.id]["type"];
      const itemName = itemData[location.id]["name"];

      return {
        position: [location.y, location.x],
        itemName: itemName,
        itemType: itemType,
      };
    });

    setMarkerObjects(newMarkers);
  }, [itemCoordinates, itemData]);



  return (
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
        {markerObjects.map((marker, index) => (
          <MarkerComponent key={index} markerObject={marker} />
        ))}
    </MapContainer>
  );
}

export default MapComponent;
