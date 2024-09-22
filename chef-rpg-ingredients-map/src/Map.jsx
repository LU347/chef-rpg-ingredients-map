import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapImage from './assets/game-map.png';

import coordinates from './lib/coordinates.json';
import items  from './lib/itemData.json';

import animalIcon from './assets/map-markers/animal.png';
import fruitIcon from './assets/map-markers/fruit.png';
import grainIcon from './assets/map-markers/grain.png';
import herbIcon from './assets/map-markers/herb.png';
import vegetableIcon from './assets/map-markers/vegetable.png';
import seafoodIcon from './assets/map-markers/seafood.png';
import buildingIcon from './assets/map-markers/building.png';
import grassIcon from './assets/map-markers/grass.png';
import animalDropIcon from './assets/map-markers/animalDrop.png';

const Map = () => {
    const [map, setMap] = useState(null);
    const [markerLocations] = useState(coordinates);
    const [itemData] = useState(items);

    useEffect(() => {
        // Check if the map already exists, if yes, destroy it
        if (map) {
            map.remove(); // Cleanup the existing map before initializing a new one
        }

        // Initialize the map
        const leafletMap = L.map('leaflet-map', {
            crs: L.CRS.Simple,
            minZoom: 0,
        });

        const bounds = [[0, 0], [1080, 1920]];  // Adjust to the dimensions of your image
        L.imageOverlay(mapImage, bounds).addTo(leafletMap);
        leafletMap.fitBounds(bounds);

        setMap(leafletMap);

        // Cleanup the map on component unmount
        return () => {
            if (leafletMap) {
                leafletMap.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (map) {
            markerLocations.forEach((location) => {
                const itemName = itemData[location["id"]]["name"];
                const itemType = itemData[location["id"]]["type"];

                const customIcon = L.icon({
                    iconUrl: getMarkerIcon(itemType), 
                    iconSize: [32, 32], 
                    iconAnchor: [16, 32], 
                    popupAnchor: [0, -32], 
                });

                L.marker([location.y + 5, location.x - 8], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`${itemName}: ${location.x} ${location.y}`);
            });
        }
    }, [map, markerLocations]);

    const getMarkerIcon = (type) => {
        switch (type) {
            case 'fruit':
                return fruitIcon; 
            case 'vegetable':
                return vegetableIcon; 
            case 'seafood':
                return seafoodIcon; 
            case 'building':
                return buildingIcon;
            case 'grass':
                return grassIcon;
            case 'grain':
                return grainIcon;
            case 'herb':
                return herbIcon;
            case 'animal':
                return animalIcon; 
            case 'animal-drop':
                return animalDropIcon;
            default:
                return animalIcon;
        }
    };

    return (
        <div id="leaflet-map" style={{ width: '100vw', height: '100vh' }}></div>
    );
};

export default Map;
